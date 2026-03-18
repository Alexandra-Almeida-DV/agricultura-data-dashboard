from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import requests
from datetime import datetime
import locale
from pydantic import BaseModel
from typing import List

class WeatherTrend(BaseModel):
    hora: str
    temp: int

class RainTrend(BaseModel):
    day: str
    chuva: float
    pop: int

app = FastAPI()

# Configuração de CORS - Deve vir ANTES das rotas para evitar erros no React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Durante o desenvolvimento, " * " facilita a conexão
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "51ef84bf91c53510e351ed4b828c3e7b"

# Configuração de Localização para os nomes dos dias da semana
try:
    locale.setlocale(locale.LC_TIME, "pt_BR.utf8")
except:
    try:
        locale.setlocale(locale.LC_TIME, "Portuguese_Brazil")
    except:
        pass # Fallback para o padrão do sistema se ambos falharem

@app.get("/api/clima/coords")
def buscar_clima_coords(lat: float, lon: float):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&lang=pt_br&appid={API_KEY}"
    try:
        response = requests.get(url)
        return response.json()
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/clima/{cidade}")
def buscar_clima_cidade(cidade: str):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={cidade},BR&units=metric&lang=pt_br&appid={API_KEY}"
    try:
        response = requests.get(url)
        return response.json()
    except Exception as e:
        return {"error": str(e)}

@app.get("/api/clima/previsao/{cidade}")
async def get_previsao(cidade: str):
    url = f"https://api.openweathermap.org/data/2.5/forecast?q={cidade},BR&units=metric&lang=pt_br&appid={API_KEY}"
    
    try:
        response = requests.get(url)
        data_api = response.json()
        
        if response.status_code != 200:
            return {"error": "Cidade não encontrada"}

        previsoes = []
        # Pegamos os primeiros 8 registros (próximas 24h em intervalos de 3h)
        for item in data_api['list'][:8]: 
            dt_object = datetime.fromtimestamp(item['dt'])
            
            previsoes.append({
                "hora": dt_object.strftime("%H:%M"), # Resolve o "Invalid Date"
                "temp": round(item['main']['temp']),
                "day": dt_object.strftime("%H") + "h", # Usado no eixo X do gráfico de barras
                "chuva": item.get('rain', {}).get('3h', 0),
                "pop": round(item.get('pop', 0) * 100) # De 0-1 para 0-100%
            })
        
        return previsoes
    except Exception as e:
        return {"error": str(e)}
        
        return previsao_formatada
    except Exception as e:
        return {"error": str(e)}

# --- Outras Rotas de Banco de Dados ---

def get_db_connection():
    conn = sqlite3.connect('agriculture.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.get("/")
def read_root():
    return {"message": "API Agro Analises rodando!"}

@app.get("/api/producao")
def get_production():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM production')
    rows = cursor.fetchall()
    results = [dict(row) for row in rows]
    conn.close()
    return results

@app.get("/api/resumo")
def get_summary():
    return {
        "area_total": "4.500 ha",
        "produtividade": "65 sc/ha",
        "colheita": "Em 12 dias"
    }
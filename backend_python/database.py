import sqlite3

def get_connection():
    # Isto cria o ficheiro do banco de dados se não existir
    return sqlite3.connect('agriculture.db')

def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    # Criar a tabela (Corrigido: INTEGER e production_tons)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS production (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            crop TEXT,
            region TEXT,
            year INTEGER,
            production_tons REAL
        )
    ''')

    # Limpar dados antigos para não duplicar durante os testes
    cursor.execute('DELETE FROM production')

    # Inserir os seus dados iniciais
    dados = [
        ('Soja', 'Centro-Oeste', 2023, 15000),
        ('Milho', 'Sul', 2023, 12000),
        ('Café', 'Sudeste', 2023, 8000),
        ('Soja', 'Centro-Oeste', 2024, 17000),
        ('Milho', 'Sul', 2024, 13500)
    ]

    cursor.executemany('''
        INSERT INTO production (crop, region, year, production_tons)
        VALUES (?, ?, ?, ?)
    ''', dados)

    conn.commit()
    conn.close()
    print("✅ Banco de dados Python inicializado com sucesso!")

if __name__ == "__main__":
    init_db()
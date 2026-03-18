"use client";
import { useEffect, useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from "recharts";
import { CloudRain, Wind, Thermometer, Droplets, Snowflake, Sun } from "lucide-react";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

// Interfaces atualizadas para refletir o que o Python (FastAPI) envia
interface WeatherData {
  hora: string;
  temp: number;
  day: string;
  chuva: number;
  pop: number;
}

const getRecomendacao = (v: number, u: number) => {
  if (v > 15) return { status: "Crítico", msg: "Vento Forte: Risco de Deriva", cor: "text-red-400", bg: "border-red-400" };
  if (u < 30) return { status: "Crítico", msg: "Umidade Baixa: Evaporação Rápida", cor: "text-red-400", bg: "border-red-400" };
  if (u >= 30 && u < 50) return { status: "Atenção", msg: "Umidade Moderada: Secagem", cor: "text-yellow-400", bg: "border-yellow-400" };
  if (v > 10 && v <= 15) return { status: "Atenção", msg: "Vento Moderado: Deriva", cor: "text-yellow-400", bg: "border-yellow-400" };
  if (v >= 3 && v <= 10 && u >= 55) return { status: "Ideal", msg: "Condições Ideais", cor: "text-green-400", bg: "border-green-400" };
  if (v < 3) return { status: "Informativo", msg: "Vento Fraco: Inversão", cor: "text-blue-400", bg: "border-blue-400" };
  return { status: "Informativo", msg: "Condições Estáveis", cor: "text-blue-400", bg: "border-blue-400" };
};

export default function ClimaPage() {
  const [tempReal, setTempReal] = useState<number>(26);
  const [umidadeAr, setUmidadeAr] = useState<number>(42);
  const [vento, setVento] = useState<number>(14);
  const [rainData, setRainData] = useState<WeatherData[]>([]);
  const [probabilidadeChuva, setProbabilidadeChuva] = useState<number>(0);
  const [forecastTemp, setForecastTemp] = useState<{ hora: string, temp: number }[]>([]);

  useEffect(() => {
    const fetchData = (lat?: number, lon?: number) => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const currentUrl = lat && lon 
        ? `${API_URL}/coords?lat=${lat}&lon=${lon}` 
        : `${API_URL}/Araraquara`;

      fetch(`${API_URL}/clima`)  

      // 1. Busca Clima Atual
      fetch(currentUrl)
        .then(res => res.json())
        .then(data => {
          if (data && data.main) {
            setTempReal(Math.round(data.main.temp));
            setUmidadeAr(data.main.humidity);
            if (data.wind) setVento(Math.round(data.wind.speed * 3.6));
          }
        })
        .catch(err => console.error("Erro Clima Atual:", err));

      // 2. Busca Previsão (Lógica simplificada consumindo o Backend Python)
      fetch(`${API_URL}/previsao/Araraquara`)
        .then(res => res.json())
        .then((data: WeatherData[]) => {
          if (Array.isArray(data) && data.length > 0) {
            // Volume de Chuva (Gráfico de Barras)
            setRainData(data);
            
            // Tendência Térmica (Gráfico de Linha/Área)
            // Agora apenas mapeamos o que o Python já formatou
            const temps = data.map((item) => ({
              hora: item.hora,
              temp: item.temp
            }));
            setForecastTemp(temps);

            // Probabilidade de Chuva (Card Central)
            // O Python já envia em %, então pegamos o valor direto
            setProbabilidadeChuva(data[0].pop);
          }
        })
        .catch(err => console.error("Erro Previsão:", err));
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchData(pos.coords.latitude, pos.coords.longitude),
      () => fetchData()
    );
  }, []);

  return (
    <PageContainer
      title="Monitoramento Climático"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Temperatura Atual</span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <div className="flex items-center gap-3">
                  <Thermometer className="text-[#D4A24C]" size={28} />
                  <span className="text-3xl font-bold">{tempReal}°C</span>
                </div>
                {tempReal <= 25 ? <Snowflake className="text-[#3b82f6]" size={48} /> : <Sun className="text-[#D4A24C]" size={48} />}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#2D4340]">
              <div className="flex justify-between items-start">
                <span className="text-xs opacity-90 uppercase font-bold tracking-wider">Umidade do Ar</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getRecomendacao(vento, umidadeAr).bg} bg-white/10`}>
                  {umidadeAr < 30 ? "CRÍTICO" : umidadeAr < 50 ? "ATENÇÃO" : "IDEAL"}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <Droplets size={28} className={umidadeAr < 30 ? "text-red-600" : "text-[#2D4340]"} />
                <span className="text-3xl font-bold">{umidadeAr}%</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <div className="flex justify-between items-start">
                <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Vento</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getRecomendacao(vento, umidadeAr).cor} ${getRecomendacao(vento, umidadeAr).bg}`}>
                  {getRecomendacao(vento, umidadeAr).msg}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Wind className="text-[#D4A24C]" size={28} />
                <span className="text-xl font-bold">{vento} km/h</span>
              </div>
            </div>
          </FadeIn>
        </>
      }
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-[#2D4340] uppercase text-xs tracking-widest">Volume de Precipitação</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Estimativa em Milímetros (mm)</p>
              </div>
              <Droplets size={18} className="text-blue-500 opacity-50" />
            </div>
            
            <ResponsiveContainer width="100%" height="75%">
              <BarChart data={rainData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                <YAxis hide domain={[0, 'auto']} />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }} 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  formatter={(value?: ValueType) => {
                    const v = Number(value ?? 0);
                    return [`${v.toFixed(1)} mm`, "Precipitação"];}}
                />
                <Bar dataKey="chuva" radius={[10, 10, 0, 0]}>
                  {rainData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.chuva > 5 ? '#3b82f6' : entry.chuva > 0 ? '#93c5fd' : '#e2e8f0'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }
      middleCardSmall={
        <FadeIn delay={0.5}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[#2D4340] mb-1 uppercase text-xs tracking-widest">Probabilidade</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Chance de Precipitação</p>
            </div>
            <div className="flex flex-col items-center justify-center py-2">
              <div className="relative">
                <CloudRain size={70} className={probabilidadeChuva > 40 ? "text-blue-500" : "text-[#D4A24C]"} strokeWidth={1.5} />
                {probabilidadeChuva > 40 && <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />}
              </div>
              <div className="text-center mt-4">
                <span className="text-5xl font-black text-[#2D4340]">{probabilidadeChuva}%</span>
              </div>
            </div>
            <div className={`rounded-2xl p-3 border-l-4 ${probabilidadeChuva > 40 ? "bg-amber-50 border-amber-400 text-amber-700" : "bg-emerald-50 border-emerald-400 text-emerald-700"}`}>
              <p className="text-[10px] font-bold uppercase leading-tight">
                {probabilidadeChuva > 40 ? "Risco para Pulverização: Evite aplicar defensivos agora." : "Janela Segura: Baixa probabilidade de lavagem foliar."}
              </p>
            </div>
          </div>
        </FadeIn>
      }
      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-[#2D4340] mb-1 uppercase text-xs tracking-widest">Motores de Crescimento</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Indicadores de Fotossíntese</p>
            </div>
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              <div className="bg-slate-50 p-5 rounded-3xl flex items-start gap-4 border-l-4 border-emerald-400">
                <Sun size={34} className="text-emerald-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-black text-[#2D4340]">Radiação Solar</span>
                    <span className="text-xl font-black text-emerald-600">650 <span className="text-xs">W/m²</span></span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">Energia luminosa para fotossíntese. Condição <span className='text-emerald-600 font-black'>Ideal</span>.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-3xl flex items-start gap-4 border-l-4 border-sky-400">
                <span className="text-2xl font-black text-sky-500 mt-1 flex-shrink-0 opacity-80">CO₂</span>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-black text-[#2D4340]">Concentração CO₂</span>
                    <span className="text-xl font-black text-sky-600">418 <span className="text-xs">ppm</span></span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold leading-tight">Nível <span className='text-sky-600 font-black'>Estável</span>. Garante a produção de açúcares.</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2 mt-4 border border-slate-200">
              <Sun size={16} className="text-emerald-600" />
              <p className="text-[9px] font-bold text-slate-700 uppercase leading-tight">Potencial produtivo maximizado para a semana.</p>
            </div>
          </div>
        </FadeIn>
      }
      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-[#2D4340] uppercase text-xs tracking-widest">Tendência de Temperatura</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Previsão para as Próximas 24 Horas</p>
              </div>
              <Thermometer size={18} className="text-[#D4A24C] opacity-50" />
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={forecastTemp}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4A24C" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4A24C" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="hora" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide domain={['dataMin - 3', 'dataMax + 3']} />
                <Tooltip 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  formatter={(value?: ValueType) => {
                    const v = Number(value ?? 0);
                    return [`${v}°C`, "Temperatura"];
                  }}
                />
                <Area type="monotone" dataKey="temp" stroke="#D4A24C" strokeWidth={4} fill="url(#colorTemp)" dot={{ r: 4, fill: '#D4A24C', strokeWidth: 2, stroke: '#fff' }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }
    />
  );
}
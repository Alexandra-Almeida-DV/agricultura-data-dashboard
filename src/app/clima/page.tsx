"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from "recharts";
import { CloudRain, Wind, Thermometer, Droplets } from "lucide-react";

// Dados Fictícios: Previsão de Chuva (mm) e Temperatura (ºC)
const rainData = [
  { day: "Seg", chuva: 10 },
  { day: "Ter", chuva: 0 },
  { day: "Qua", chuva: 45 },
  { day: "Qui", chuva: 30 },
  { day: "Sex", chuva: 5 },
  { day: "Sáb", chuva: 0 },
  { day: "Dom", chuva: 0 },
];

const tempData = [
  { hora: "06:00", temp: 18 },
  { hora: "10:00", temp: 24 },
  { hora: "14:00", temp: 31 },
  { hora: "18:00", temp: 26 },
  { hora: "22:00", temp: 20 },
];

export default function ClimaPage() {
  return (
    <PageContainer 
      title="Monitoramento Climático"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Temperatura Atual</span>
              <div className="flex items-center gap-3">
                <Thermometer className="text-[#D4A24C]" size={28} />
                <span className="text-3xl font-bold">28°C</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-90 uppercase font-bold tracking-wider">Umidade do Solo</span>
              <div className="flex items-center gap-3">
                <Droplets size={28} />
                <span className="text-3xl font-bold">42%</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Vento</span>
              <div className="flex items-center gap-3">
                <Wind className="text-[#D4A24C]" size={28} />
                <span className="text-xl font-bold">14 km/h</span>
              </div>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Previsão de Precipitação (mm)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={rainData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#F8FAFC'}} contentStyle={{borderRadius: '15px', border: 'none'}} />
                <Bar dataKey="chuva" radius={[10, 10, 0, 0]}>
                  {rainData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.chuva > 20 ? '#3b82f6' : '#2D4340'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }

      middleCardSmall={
        <FadeIn delay={0.5}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Probabilidade</h3>
            <div className="flex-1 flex flex-col items-center justify-center">
              <CloudRain size={60} className="text-[#D4A24C] mb-4" />
              <p className="text-4xl font-extrabold text-[#2D4340]">80%</p>
              <p className="text-xs text-slate-400 font-bold uppercase mt-2">Chance de Chuva</p>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Sensores de Campo</h3>
            <div className="space-y-4">
               {[
                 { label: "Setor Norte", status: "Ativo", color: "bg-emerald-500" },
                 { label: "Setor Sul", status: "Ativo", color: "bg-emerald-500" },
                 { label: "Pivô Central", status: "Atenção", color: "bg-amber-500" },
                 { label: "Barragem", status: "Offline", color: "bg-slate-300" },
               ].map((sensor, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
                  <span className="text-xs font-bold text-[#2D4340]">{sensor.label}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${sensor.color}`} />
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{sensor.status}</span>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </FadeIn>
      }

      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Variação Térmica Diária</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={tempData}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4A24C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4A24C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="hora" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="temp" stroke="#D4A24C" strokeWidth={3} fill="url(#colorTemp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }
    />
  );
}
"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area 
} from "recharts";
import { TrendingUp, Globe, Leaf } from "lucide-react";

// Dados Fictícios de Produção Nacional
const barData = [
  { name: "Soja", total: 154 },
  { name: "Milho", total: 125 },
  { name: "Cana", total: 650 },
  { name: "Algodão", total: 7 },
  { name: "Trigo", total: 10 },
];

const growthData = [
  { year: "2021", valor: 240 },
  { year: "2022", valor: 300 },
  { year: "2023", valor: 280 },
  { year: "2024", valor: 350 },
  { year: "2025", valor: 410 },
  { year: "2026", valor: 480 },
];

export default function ProducaoNacionalPage() {
  return (
    <PageContainer 
      title="Produção Nacional"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">PIB Agro Brasil</span>
              <span className="text-3xl font-bold">24.8% <small className="text-sm font-light">do total</small></span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Volume Total Safra</span>
              <span className="text-3xl font-bold">312.5 <small className="text-sm font-light">Mi Ton</small></span>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Ranking Global</span>
              <span className="text-xl font-bold italic">1º Produtor de Soja</span>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6">Produção por Cultura (Milhões de Ton)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#F8FAFC'}} contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="total" radius={[10, 10, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#D4A24C' : '#2D4340'} />
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
            <h3 className="font-bold text-[#2D4340] mb-4">Market Share</h3>
            <div className="flex-1 flex flex-col justify-around">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600"><Globe size={20}/></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Exportações</p>
                  <p className="text-lg font-bold text-[#2D4340]">US$ 166 Bilhões</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-2xl text-amber-600"><TrendingUp size={20}/></div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Crescimento VBP</p>
                  <p className="text-lg font-bold text-[#2D4340]">+5.2% p.a.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-4">Sustentabilidade</h3>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                <Leaf size={40} className="text-emerald-600" />
              </div>
              <p className="text-2xl font-bold text-[#2D4340]">66%</p>
              <p className="text-sm text-slate-400 max-w-[150px]">Área de vegetação nativa preservada</p>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6">Histórico de Produtividade Nacional</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4A24C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4A24C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="valor" stroke="#D4A24C" strokeWidth={3} fillOpacity={1} fill="url(#colorValor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }
    />
  );
}
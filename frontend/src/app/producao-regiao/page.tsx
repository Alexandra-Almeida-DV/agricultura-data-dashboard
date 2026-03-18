"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import { MapPin, Ship, Navigation } from "lucide-react";

// Dados Fictícios de Produção por Região
const regionData = [
  { name: "Centro-Oeste", total: 145 },
  { name: "Sul", total: 82 },
  { name: "Sudeste", total: 45 },
  { name: "Nordeste", total: 28 },
  { name: "Norte", total: 12 },
];

const stateData = [
  { name: "MT", value: 40 },
  { name: "PR", value: 25 },
  { name: "GO", value: 15 },
  { name: "Outros", value: 20 },
];

const COLORS = ["#2D4340", "#D4A24C", "#3a5753", "#CBD5E1"];

export default function ProducaoRegiaoPage() {
  return (
    <PageContainer 
      title="Produção por Região"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider text-[#D4A24C]">Líder Regional</span>
              <span className="text-xl font-bold">Centro-Oeste</span>
              <span className="text-[10px] opacity-50">46% da Produção Graneleira</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#2D4340]">
              <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Crescimento Matopiba</span>
              <span className="text-2xl font-bold">+12.4%</span>
              <span className="text-[10px] opacity-80">Nova Fronteira Agrícola</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider text-[#D4A24C]">Hub de Exportação</span>
              <span className="text-xl font-bold italic">Arco Norte</span>
              <span className="text-[10px] opacity-50">Logística de Alta Performance</span>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Produção em Toneladas (Milhões)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={regionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#2D4340', fontSize: 11, fontWeight: 600}} width={100} />
                <Tooltip cursor={{fill: '#F8FAFC'}} contentStyle={{borderRadius: '15px', border: 'none'}} />
                <Bar dataKey="total" radius={[0, 10, 10, 0]}>
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#D4A24C' : '#2D4340'} />
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
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Top Estados</h3>
            <div className="flex-1 flex flex-col justify-center gap-4">
              {stateData.map((state, i) => (
                <div key={i} className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[i]}} />
                     <span className="text-sm font-bold text-slate-600">{state.name}</span>
                   </div>
                   <span className="text-sm font-extrabold text-[#2D4340]">{state.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Logística</h3>
            <div className="space-y-6 mt-4">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-[#D4A24C]"><Ship size={20}/></div>
                  <div>
                    <p className="text-xs font-bold text-[#2D4340]">Porto de Santos</p>
                    <p className="text-[10px] text-slate-400">Escoamento Região Sul/Sudeste</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 rounded-2xl text-[#2D4340]"><Navigation size={20}/></div>
                  <div>
                    <p className="text-xs font-bold text-[#2D4340]">Ferrovia Norte-Sul</p>
                    <p className="text-[10px] text-slate-400">Integração Centro-Oeste</p>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Densidade de Produção Regional</h3>
            <div className="w-full h-full bg-slate-50 rounded-[2rem] flex flex-col items-center justify-center border border-dashed border-slate-200">
               <MapPin size={40} className="text-[#D4A24C] mb-2 animate-bounce" />
               <span className="text-slate-400 text-sm font-medium">Mapa Interativo de Produtividade</span>
               <span className="text-[10px] text-slate-300 mt-1 italic">Aguardando dados de geolocalização...</span>
            </div>
          </div>
        </FadeIn>
      }
    />
  );
}
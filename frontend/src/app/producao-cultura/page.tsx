"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar
} from "recharts";
import { Wheat, Flower, Sprout } from "lucide-react";

// 1. DADOS FIXOS PARA OS GRÁFICOS (Evita o erro de impureza)
const cultureData = [
  { culture: "Grãos", prod: 270, rent: 85 },
  { culture: "Fibras", prod: 80, rent: 92 },
  { culture: "Hortifruti", prod: 45, rent: 60 },
  { culture: "Cana", prod: 650, rent: 75 },
];

const performanceData = [
  { subject: 'Produtividade', A: 120, B: 110 },
  { subject: 'Resistência', A: 98, B: 130 },
  { subject: 'Valor Mercado', A: 86, B: 130 },
  { subject: 'Custo Insumo', A: 99, B: 100 },
  { subject: 'Exportação', A: 85, B: 90 },
];

// 2. DADOS FIXOS PARA OS CARDS DE INSUMOS (Onde estavam os erros)
const inputDetails = [
  { item: 'Sementes', percent: 32, barWidth: '65%' },
  { item: 'Fertilizantes', percent: 48, barWidth: '80%' },
  { item: 'Defensivos', percent: 25, barWidth: '55%' },
  { item: 'Combustível', percent: 18, barWidth: '40%' },
];

export default function ProducaoCulturaPage() {
  return (
    <PageContainer 
      title="Produção por Cultura"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Cultura Líder</span>
              <div className="flex items-center gap-2 mt-1">
                <Wheat size={20} className="text-[#D4A24C]" />
                <span className="text-xl font-bold">Complexo Soja</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#2D4340]">
              <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Maior Rentabilidade</span>
              <div className="flex items-center gap-2 mt-1">
                <Flower size={20} />
                <span className="text-xl font-bold">Algodão (Pluma)</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Crescimento Safra</span>
              <div className="flex items-center gap-2 mt-1">
                <Sprout size={20} className="text-[#D4A24C]" />
                <span className="text-xl font-bold italic">+8.5% Milho 2ª</span>
              </div>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Volume de Produção (Mi Ton)</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={cultureData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="culture" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#F8FAFC'}} contentStyle={{borderRadius: '15px', border: 'none'}} />
                <Bar dataKey="prod" radius={[10, 10, 0, 0]}>
                  {cultureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2D4340' : '#D4A24C'} />
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
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Análise de Performance</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performanceData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fill: '#64748b'}} />
                <Radar name="Cultura A" dataKey="A" stroke="#D4A24C" fill="#D4A24C" fillOpacity={0.5} />
                <Radar name="Cultura B" dataKey="B" stroke="#2D4340" fill="#2D4340" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Ciclo de Cultivo</h3>
            <div className="space-y-6 mt-4">
               {[
                 { label: "Plantio", date: "Set - Nov", color: "bg-[#2D4340]" },
                 { label: "Desenvolvimento", date: "Dez - Fev", color: "bg-[#D4A24C]" },
                 { label: "Colheita", date: "Mar - Mai", color: "bg-emerald-600" }
               ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div>
                    <p className="text-sm font-bold text-[#2D4340]">{item.label}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
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
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Uso de Insumos por Tipo de Cultura</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
               {inputDetails.map((input, i) => (
                 <div key={i} className="bg-slate-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">{input.item}</p>
                    {/* VALOR FIXO AQUI */}
                    <p className="text-lg font-extrabold text-[#2D4340]">{input.percent}%</p>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-3 overflow-hidden">
                       {/* LARGURA FIXA AQUI */}
                       <div className="bg-[#D4A24C] h-full" style={{ width: input.barWidth }} />
                    </div>
                 </div>
               ))}
            </div>
            <p className="text-[10px] text-slate-400 mt-4 italic text-right">* Médias nacionais baseadas na última safra</p>
          </div>
        </FadeIn>
      }
    />
  );
}
"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

// Dados Fictícios Estáveis
const lineData = [
  { name: "Set", atual: 400, anterior: 240 },
  { name: "Out", atual: 300, anterior: 139 },
  { name: "Nov", atual: 200, anterior: 980 },
  { name: "Dez", atual: 278, anterior: 390 },
  { name: "Jan", atual: 189, anterior: 480 },
  { name: "Fev", atual: 239, anterior: 380 },
];

const pieData = [
  { name: "Soja", value: 45 },
  { name: "Milho", value: 35 },
  { name: "Outros", value: 20 },
];

const COLORS = ["#2D4340", "#D4A24C", "#E2E8F0"];

export default function HomePage() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const { ref: lineRef, isInView: isLineInView } = useInView<HTMLDivElement>();

  return (
    <PageContainer 
      title="Visão Geral"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Área Total Plantada</span>
              <span className="text-3xl font-bold">4.500 <small className="text-sm font-light">ha</small></span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Produtividade Média</span>
              <span className="text-3xl font-bold">65 <small className="text-sm font-light">sc/ha</small></span>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Próxima Colheita</span>
              <span className="text-xl font-bold italic">Em 12 dias</span>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div ref={lineRef} className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6">Evolução da Produção (Ton)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                
                <Line
                  key={isLineInView ? "line-prev" : "idle-prev"} 
                  type="monotone" 
                  dataKey="anterior" 
                  stroke="#CBD5E1" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  dot={false}
                  isAnimationActive={isLineInView}
                  animationDuration={1000}
                  animationBegin={200}
                />

                <Line
                  key={isLineInView ? "line-current" : "idle-current"} 
                  type="monotone" 
                  dataKey="atual" 
                  stroke="#D4A24C" 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: '#D4A24C', strokeWidth: 2, stroke: '#fff' }}
                  isAnimationActive={isLineInView}
                  animationDuration={2000}
                  animationBegin={400}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }

      middleCardSmall={
        <FadeIn delay={0.5}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-4">Status Insumos</h3>
            <div className="space-y-6 mt-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2"><span>FERTILIZANTES</span><span>85%</span></div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#2D4340] h-full w-[85%] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2"><span>DEFENSIVOS</span><span>32%</span></div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D4A24C] h-full w-[32%] rounded-full" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-auto">* Dados atualizados hoje às 08:00</p>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div ref={ref} className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col items-center">
            <h3 className="font-bold text-[#2D4340] self-start mb-4">Distribuição</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  key={isInView ? "animate" : "idle"}
                  data={pieData}
                  innerRadius={60} 
                  outerRadius={80} 
                  paddingAngle={8} 
                  dataKey="value"
                  isAnimationActive={isInView}
                  animationBegin={0}
                  animationDuration={1500}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 text-[10px] font-bold mt-4">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#2D4340]"/> SOJA</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#D4A24C]"/> MILHO</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#E2E8F0]"/> OUTROS</span>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm overflow-hidden flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6">Últimas Atividades</h3>
            <div className="space-y-4 overflow-y-auto pr-2">
              {[
                { task: "Aplicação de NPK - Setor A1", time: "2h atrás", status: "success", icon: <CheckCircle2 size={16}/> },
                { task: "Manutenção Trator JD-90", time: "5h atrás", status: "pending", icon: <Clock size={16}/> },
                { task: "Alerta de Umidade Baixa", time: "Ontem", status: "alert", icon: <AlertTriangle size={16}/> },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <span className={item.status === 'success' ? 'text-emerald-500' : item.status === 'alert' ? 'text-amber-500' : 'text-slate-400'}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-[#2D4340]">{item.task}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      }
    />
  );
}
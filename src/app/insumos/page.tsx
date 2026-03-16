"use client";
import PageContainer from "@/components/layout/PageContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie
} from "recharts";
import { Package, Droplets, Zap, AlertCircle } from "lucide-react";

// Dados Fictícios de Insumos
const inventoryData = [
  { name: "Fertilizantes", estoque: 85, ideal: 100 },
  { name: "Sementes", estoque: 40, ideal: 100 },
  { name: "Defensivos", estoque: 15, ideal: 100 },
  { name: "Combustível", estoque: 60, ideal: 100 },
];

const costData = [
  { name: "Fertilizantes", value: 55 },
  { name: "Defensivos", value: 25 },
  { name: "Sementes", value: 20 },
];

const COLORS = ["#2D4340", "#D4A24C", "#3a5753"];

export default function InsumosPage() {
  return (
    <PageContainer 
      title="Gestão de Insumos"
      topCards={
        <>
          <FadeIn delay={0.1}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Valor em Estoque</span>
              <span className="text-2xl font-bold italic text-[#D4A24C]">R$ 450.000</span>
              <span className="text-[10px] opacity-50 mt-1">Atualizado há 1h</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-[#D4A24C] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center">
              <span className="text-xs opacity-80 uppercase font-bold tracking-wider">Insumos em Falta</span>
              <div className="flex items-center gap-2">
                <AlertCircle size={24} />
                <span className="text-3xl font-bold">02</span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-[#2D4340] h-32 rounded-[2.5rem] p-6 text-white shadow-lg flex flex-col justify-center border-l-4 border-[#D4A24C]">
              <span className="text-xs opacity-60 uppercase font-bold tracking-wider">Próximo Pedido</span>
              <span className="text-xl font-bold">22 Março</span>
              <span className="text-[10px] opacity-50">Sementes de Milho</span>
            </div>
          </FadeIn>
        </>
      }
      
      middleCardLarge={
        <FadeIn delay={0.4}>
          <div className="bg-white h-80 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Nível de Estoque por Categoria (%)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis hide />
                <Tooltip cursor={{fill: '#F8FAFC'}} contentStyle={{borderRadius: '15px', border: 'none'}} />
                <Bar dataKey="estoque" radius={[10, 10, 0, 0]}>
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.estoque < 30 ? '#ef4444' : '#2D4340'} />
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
            <h3 className="font-bold text-[#2D4340] mb-4 uppercase text-xs tracking-widest">Distribuição de Custos</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={costData} innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                  {costData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      }

      bottomCardSmall={
        <FadeIn delay={0.6}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Categorias</h3>
            <div className="space-y-5">
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Package className="text-[#D4A24C]" size={20} />
                  <div>
                    <p className="text-sm font-bold text-[#2D4340]">Sólidos</p>
                    <p className="text-[10px] text-slate-400">Fertilizantes e Corretivos</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Droplets className="text-[#2D4340]" size={20} />
                  <div>
                    <p className="text-sm font-bold text-[#2D4340]">Líquidos</p>
                    <p className="text-[10px] text-slate-400">Defensivos e Foliares</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <Zap className="text-[#D4A24C]" size={20} />
                  <div>
                    <p className="text-sm font-bold text-[#2D4340]">Energia</p>
                    <p className="text-[10px] text-slate-400">Diesel e Lubrificantes</p>
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      }

      bottomCardLarge={
        <FadeIn delay={0.7}>
          <div className="bg-white h-96 rounded-[2.5rem] p-8 shadow-sm flex flex-col">
            <h3 className="font-bold text-[#2D4340] mb-6 uppercase text-xs tracking-widest">Ordens de Saída Recentes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] text-slate-400 font-bold uppercase border-b border-slate-100">
                    <th className="pb-4">Insumo</th>
                    <th className="pb-4">Quantidade</th>
                    <th className="pb-4">Operador</th>
                    <th className="pb-4">Data</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { item: "Ureia", qty: "2.500 kg", op: "João P.", date: "Hoje" },
                    { item: "Glifosato", qty: "400 L", op: "Maria S.", date: "Ontem" },
                    { item: "Semente Soja", qty: "120 sc", op: "Carlos R.", date: "14/03" },
                    { item: "Diesel S10", qty: "1.200 L", op: "João P.", date: "12/03" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0">
                      <td className="py-4 font-bold text-[#2D4340]">{row.item}</td>
                      <td className="py-4 text-slate-600 font-medium">{row.qty}</td>
                      <td className="py-4 text-slate-400">{row.op}</td>
                      <td className="py-4 text-slate-400 italic">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      }
    />
  );
}
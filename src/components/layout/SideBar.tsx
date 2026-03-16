"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { 
  Home, 
  BarChart2, 
  Map, 
  CloudSun,
  LogOut,
  Wheat,
  Sprout,
} from "lucide-react";

// Importando a imagem do seu diretório correto
import Brasil from "../../Image/Brasil.png";

interface MenuItem {
  name: string;
  path: Route | string;
  icon: React.ReactNode;
}

export default function SideBar() {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
  { name: "Lar", path: "/", icon: <Home size={22} /> },
  { name: "Produção Nacional", path: "/producao-nacional", icon: <BarChart2 size={22} /> },
  { name: "Produção por Região", path: "/producao-regiao", icon: <Map size={22} /> },
  { name: "Produção por Cultura", path: "/producao-cultura", icon: <Wheat size={22} /> },
  { name: "Insumos", path: "/insumos", icon: <Sprout size={22} />},
  { name: "Clima", path: "/clima", icon: <CloudSun size={22} /> },
];

  return (
    <aside className="w-72 bg-[#2D4340] text-white flex flex-col h-full shadow-2xl z-50 relative">
      
      {/* Área do Perfil */}
      <div className="p-10 flex flex-col items-center">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-slate-300 mb-4 border-3 border-[#D4A24C] flex items-center justify-center overflow-hidden shadow-inner relative">
             <Image 
                src={Brasil} 
                alt="Brasil" 
                fill 
                className="object-cover"
                priority 
             />
          </div>
          <div className="absolute bottom-5 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#D4A24C] rounded-full z-10"></div>
        </div>
        <h2 className="font-bold text-lg tracking-tight">Agro Analitcs</h2>
        <p className="text-xs text-slate-400 font-medium opacity-70">Análises para produção agrícola</p>
      </div>

      {/* Navegação */}
      <nav className="flex-1 mt-4">
        <ul className="pl-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <li key={item.path} className="relative">
                <Link 
                  href={item.path as Route} 
                  className={`
                    flex items-center gap-4 px-6 py-4 transition-all duration-300 relative
                    ${isActive 
                      ? "bg-[#F4F7F6] text-[#2D4340] font-bold rounded-l-[30px] shadow-[-10px_0_20px_rgba(0,0,0,0.1)]" 
                      : "text-slate-300 hover:text-white group"}
                  `}
                >
                  {/* Curvas Invertidas para o efeito flutuante */}
                  {isActive && (
                    <>
                      <div className="absolute -top-[30px] right-0 w-[30px] h-[30px] bg-[#F4F7F6] before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[#2D4340] before:rounded-br-[30px]"></div>
                      <div className="absolute -bottom-[30px] right-0 w-[30px] h-[30px] bg-[#F4F7F6] before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[#2D4340] before:rounded-tr-[30px]"></div>
                    </>
                  )}

                  <span className={`transition-colors duration-300 z-10 ${isActive ? "text-[#D4A24C]" : "text-inherit"}`}>
                    {item.icon}
                  </span>
                  <span className="text-sm tracking-wide z-10">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Rodapé */}
      <div className="p-6 border-t border-white/5">
        <button className="flex items-center gap-3 w-full px-6 py-4 text-slate-400 hover:text-red-400 transition-all duration-300 rounded-2xl hover:bg-red-400/10 font-medium text-sm">
           <LogOut size={20} />
           Sair
        </button>
      </div>
    </aside>
  );
}
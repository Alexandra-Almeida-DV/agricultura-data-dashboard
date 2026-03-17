import React from "react";
import { Bell, Search, Settings } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-16 lg:h-[72px] w-full flex items-center justify-between px-4 lg:px-10 bg-white">
      {/* Lado Esquerdo: Saudação Dinâmica */}
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-[#D4A24C] uppercase tracking-[0.2em]">
          Plataforma Agro
        </span>
        <h2 className="text-xl font-bold text-[#2D4340]">
          Olá, Alexandra 👋
        </h2>
      </div>

      {/* Centro: Barra de Busca com foco Dourado */}
      <div className="hidden md:flex items-center bg-white border border-slate-100 rounded-2xl px-4 py-2.5 w-[400px] shadow-sm focus-within:ring-2 focus-within:ring-[#D4A24C]/20 focus-within:border-[#D4A24C] transition-all group">
        <Search size={18} className="text-slate-300 group-focus-within:text-[#D4A24C] transition-colors" />
        <input 
          type="text" 
          placeholder="Pesquisar safras, insumos ou regiões..." 
          className="bg-transparent border-none focus:ring-0 text-sm ml-3 w-full text-[#2D4340] placeholder:text-slate-300 font-medium"
        />
      </div>

      {/* Lado Direito: Ações e Perfil */}
      <div className="flex items-center gap-5">
        {/* Botão de Notificação */}
        <button className="p-2.5 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-[#D4A24C] hover:border-[#D4A24C]/30 transition-all shadow-sm relative">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#D4A24C] rounded-full border-2 border-white"></span>
        </button>

        {/* Botão de Configurações */}
        <button className="p-2.5 bg-white rounded-xl border border-slate-100 text-slate-400 hover:text-[#D4A24C] hover:border-[#D4A24C]/30 transition-all shadow-sm">
          <Settings size={20} />
        </button>
        
        {/* Divisor */}
        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        {/* Perfil do Usuário */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-extrabold text-[#2D4340] leading-none">Alexandra Almeida</p>
            <p className="text-[10px] text-[#D4A24C] font-bold uppercase mt-1">Admin Account</p>
          </div>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D4340] to-[#3a5753] flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white">
            AA
          </div>
        </div>
      </div>
    </header>
  );
}
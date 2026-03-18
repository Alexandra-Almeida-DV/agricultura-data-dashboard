"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react"; 
import SideBar from "./SideBar";

interface PageContainerProps {
  title: string;
  topCards: React.ReactNode;    
  middleCardLarge: React.ReactNode; 
  middleCardSmall: React.ReactNode; 
  bottomCardSmall: React.ReactNode;
  bottomCardLarge: React.ReactNode;
}

export default function PageContainer({ 
  title, topCards, middleCardLarge, middleCardSmall, bottomCardSmall, bottomCardLarge 
}: PageContainerProps) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen rounded-[2.5rem] bg-[#E2E9E7] relative">
      
      {/* Botão Hambúrguer - Corrigido para ser visível no mobile */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed top-35 left-6 z-40 p-2 bg-[#2D4340] text-white rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Drawer Mobile com a sua Sidebar Original */}
      <div className={`fixed inset-0 z-[100] lg:hidden ${isMenuOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)} 
        />
        
        <div className={`absolute left-0 top-0 h-full transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
           <SideBar onClose={() => setIsMenuOpen(false)} /> 
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="p-4 lg:p-0">
        <header className="mb-8 mt-16 lg:mt-0">
          <span className="text-[#D4A24C] font-bold text-xs uppercase tracking-widest"></span>
          <h1 className="text-2xl md:text-4xl font-bold text-[#2D4340]">{title}</h1>
        </header>

        <main className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCards}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">{middleCardLarge}</div>
            <div className="col-span-1">{middleCardSmall}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 order-2 lg:order-1">{bottomCardSmall}</div>
            <div className="lg:col-span-2 order-1 lg:order-2">{bottomCardLarge}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
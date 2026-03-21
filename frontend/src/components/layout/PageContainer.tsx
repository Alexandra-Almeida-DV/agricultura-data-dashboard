"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react"; 
import SideBar from "./SideBar";

interface PageContainerProps {
  title: string;
  topCards?: React.ReactNode;
  middleCardLarge?: React.ReactNode;
  middleCardSmall?: React.ReactNode;
  bottomCardSmall?: React.ReactNode;
  bottomCardLarge?: React.ReactNode;
}

export default function PageContainer({
  title, topCards, middleCardLarge, middleCardSmall, bottomCardSmall, bottomCardLarge,
}: PageContainerProps) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex flex-col gap-4 md:gap-6 relative min-h-full">
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed top-29 left-6 z-50 p-3 bg-[#2D4340] text-white rounded-2xl shadow-2xl border border-white/10 active:scale-95 transition-transform"
      >
        <Menu size={24} />
      </button>

      {/* Drawer Mobile (Sem alterações na lógica) */}
      <div className={`fixed inset-0 z-[100] lg:hidden ${isMenuOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)} 
        />
        <div className={`absolute left-0 top-0 h-full transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
           <SideBar onClose={() => setIsMenuOpen(false)} /> 
        </div>
      </div>
      <header className="px-6 pt-24 lg:pt-0 flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-black text-[#2D4340] tracking-tight">
          {title}
        </h1>
      </header>
      <div className="bg-[#E2E9E7] mx-2 md:mx-0 p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm flex flex-col gap-8 md:gap-10">
        
        {/* Seção Superior */}
        {topCards && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCards}
          </div>
        )}

        {/* Seção do Meio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {middleCardLarge}
          </div>
          <div className="lg:col-span-1">
            {middleCardSmall}
          </div>
        </div>

        {/* Seção Inferior */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            {bottomCardSmall}
          </div>
          <div className="lg:col-span-2 order-1 lg:order-2">
            {bottomCardLarge}
          </div>
        </div>

      </div> 

      <div className="h-10" />
    </section>
  );
}
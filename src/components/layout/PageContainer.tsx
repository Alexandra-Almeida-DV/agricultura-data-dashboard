import React from "react";

interface PageContainerProps {
  title: string;
  topCards: React.ReactNode;    
  middleCardLarge: React.ReactNode; 
  middleCardSmall: React.ReactNode; 
  bottomCardSmall: React.ReactNode;
  bottomCardLarge: React.ReactNode;
}

export default function PageContainer({ 
  title, 
  topCards, 
  middleCardLarge, 
  middleCardSmall,
  bottomCardSmall,
  bottomCardLarge 
}: PageContainerProps) {
  return (
    <div className="flex-1 flex flex-col h-full rounded-[2.5rem] bg-[#F4F7F6] overflow-hidden">
      
      <header className="px-10 py-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2D4340] tracking-tight">{title}</h1>
      </header>

      <main className="flex-1 px-10 pb-10 overflow-y-auto space-y-6">
        
        {/* LINHA 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards}
        </div>

        {/* LINHA 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {middleCardLarge}
          </div>
          <div className="col-span-1">
            {middleCardSmall}
          </div>
        </div>

        {/* LINHA 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            {bottomCardSmall}
          </div>
          <div className="lg:col-span-2">
            {bottomCardLarge}
          </div>
        </div>

      </main>
    </div>
  );
}
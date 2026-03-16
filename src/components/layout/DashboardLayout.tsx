import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#2D4340] overflow-hidden">
      {/* 1. Menu Lateral Fixo */}
      <SideBar />

      {/* 2. Área da Direita (TopBar + Conteúdo) */}
      <div className="flex-1 flex flex-col h-full bg-white md:m-4 md:ml-0 md:rounded-[2.5rem] overflow-hidden shadow-2xl">
        
        {/* TopBar dentro do container arredondado */}
        <TopBar />

        {/* Conteúdo da Página que herda o fundo cinza claro e arredondamento interno */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
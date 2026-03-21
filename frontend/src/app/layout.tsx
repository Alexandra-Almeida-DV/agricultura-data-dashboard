import SideBar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import "@/app/globals.css";
import BackToTop from '@/components/ui/BackToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      {/* h-screen e overflow-hidden aqui TRAVAM a tela inteira. Nada se move por padrão. */}
      <body className="bg-[#2D4340] text-slate-900 antialiased h-screen overflow-hidden" suppressHydrationWarning={true}>
        
        <div className="flex h-full w-full">
          
          {/* 1. SideBar: h-full garante que ele ocupe 100% da altura travada */}
          <aside className="hidden lg:flex h-full flex-shrink-0">
            <SideBar />
          </aside>

          {/* 2. Área da Direita (O "Dashboard" Branco) */}
          <div className="flex-1 flex flex-col h-full bg-white md:m-4 md:ml-0 md:rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            {/* TopBar: Ele fica "preso" no topo do container branco */}
            <header className="flex-shrink-0 w-full border-b border-slate-100">
              <TopBar />
            </header>

            {/* 3. CONTEÚDO: O ÚNICO lugar com scroll ativo */}
            <main className="flex-1 overflow-y-auto bg-[#F4F7F6]/30 custom-scrollbar">
              
              <div className="w-full max-w-[1200px] mx-auto py-8 px-6 md:px-10">
                {children}
              </div>

              {/* Footer: Ele fica no final do conteúdo, dentro do scroll */}
              <footer className="w-full text-center text-[10px] text-slate-400 py-6 border-t border-slate-100 bg-white/50 mt-10">
                © {new Date().getFullYear()} Agro Análises — Todos os direitos reservados
              </footer>

            </main>

          </div>
        </div>

        <BackToTop />
      </body>
    </html>
  );
}
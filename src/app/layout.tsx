import SideBar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <body className="bg-[#E2E9E7] text-slate-900 antialiased">
        
        <div className="flex min-h-screen">
          
          {/* Sidebar */}
          <div className="hidden lg:flex">
            <SideBar />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col bg-[#F4F7F6]">
            
            {/* TopBar */}
            <div className="w-full bg-white border-b border-slate-200 pt-4 pb-6 px-6 lg:px-15">
              <TopBar />
            </div>

            {/* Main */}
            <main className="flex-1 overflow-y-auto bg-[#F4F7F6]">
              
              {/* Camada de fundo */}
              <div className="bg-[#E2E9E7] lg:rounded-tl-[50px] py-6 px-6 md:px-8 lg:px-10">
                
                {/* Conteúdo */}
                <div className="w-full max-w-[1200px] mx-auto py-6 px-6 md:px-5 lg:px-20">
                  {children}
                </div>

              </div>

            </main>

            {/* Footer */}
            <footer className="w-full text-center text-xs text-slate-400 py-3 border-t border-slate-200 bg-white">
              © {new Date().getFullYear()} Agro Análises — Todos os direitos reservados
            </footer>

          </div>
        </div>

      </body>
    </html>
  );
}
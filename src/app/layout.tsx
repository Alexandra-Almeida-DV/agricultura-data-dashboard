import SideBar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-pt">
      <body className="bg-[#F4F7F6] text-slate-900 antialiased">
        <div className="flex h-screen overflow-hidden">
          {/* Menu Lateral Fixo */}
          <SideBar />

          {/* Área Principal (Lado direito) */}
          <div className="flex-1 flex flex-col relative overflow-hidden">
            <TopBar />
            
            {/* Onde o conteúdo das páginas será injetado */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-8">
              <div className="max-w-[1400px] mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
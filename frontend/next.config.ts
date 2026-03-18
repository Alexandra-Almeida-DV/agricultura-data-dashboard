import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Habilita melhorias na resolução de módulos se necessário */
  experimental: {
    // Isso ajuda o Turbopack a entender melhor os caminhos do TS
    typedRoutes: true,
  },
};

export default nextConfig;
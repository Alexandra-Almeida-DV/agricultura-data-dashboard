import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          green: "#2D4340",    // Verde escuro da Sidebar
          gold: "#D4A24C",     // Dourado/Amarelo dos botões/cards
          light: "#F4F7F6",    // Fundo cinza bem clarinho
          card: "#FFFFFF",     // Branco dos cards
          text: "#1A1A1A",     // Texto quase preto
          muted: "#667A78",    // Texto secundário/cinza esverdeado
        },
      },
      borderRadius: {
        '3xl': '1.5rem',       // Bordas bem arredondadas como na foto
      },
    },
  },
  plugins: [],
};

export default config;
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Props {
  title: string;
  value: number | string;
  color: string; // Ex: "#D4A24C" ou "primary.main"
}

// 1. Adicionamos 'color' aqui nos parâmetros
export default function StatsCard({ title, value, color }: Props) {
  return (
    <Card 
      sx={{ 
        minWidth: 200, 
        borderRadius: "24px", // Bordas arredondadas como na sua foto
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* 2. Uma barrinha lateral com a cor definida para dar o destaque visual */}
      <Box sx={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, backgroundColor: color }} />
      
      <CardContent sx={{ pl: 3 }}>
        <Typography 
          variant="overline" 
          sx={{ fontWeight: "bold", color: "text.secondary", display: "block", mb: 1 }}
        >
          {title}
        </Typography>

        <Typography variant="h4" sx={{ fontWeight: 800, color: "#2D4340" }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
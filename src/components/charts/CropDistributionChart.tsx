"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Soja", value: 45000 },
  { name: "Milho", value: 32000 },
  { name: "Cana", value: 78000 }
];

const COLORS = ["#2E7D32", "#F9A825", "#8D6E63"];

export default function CropDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          animationDuration={1200}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />

      </PieChart>
    </ResponsiveContainer>
  );
}
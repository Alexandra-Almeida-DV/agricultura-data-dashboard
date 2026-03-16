"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { region: "Centro-Oeste", production: 150000 },
  { region: "Sul", production: 90000 },
  { region: "Sudeste", production: 70000 },
  { region: "Nordeste", production: 40000 }
];

export default function ProductionRegionChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="production" fill="#4CAF50" />

      </BarChart>
    </ResponsiveContainer>
  );
}
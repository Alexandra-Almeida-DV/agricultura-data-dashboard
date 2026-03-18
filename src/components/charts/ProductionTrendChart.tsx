"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2019, production: 200000 },
  { year: 2020, production: 240000 },
  { year: 2021, production: 260000 },
  { year: 2022, production: 280000 },
  { year: 2023, production: 300000 }
];

export default function ProductionTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="production"
          stroke="#1976D2"
          strokeWidth={3}
        />

      </LineChart>
    </ResponsiveContainer>
  );
}
"use client";

import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string;
  description: string;
}

export default function InfoCard({ title, value, description }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 3,
        borderRadius: "20px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      <Typography variant="h5" sx={{ mt: 1 }}>
        {value}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
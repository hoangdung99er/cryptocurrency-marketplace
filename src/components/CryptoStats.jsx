import { ListItem, Box } from "@mui/material";
import React from "react";

function CryptoStats({ title, desc }) {
  return (
    <ListItem
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ fontSize: 18, color: "#615f5fb8" }}>{title}</Box>
      <Box sx={{ fontSize: 16, fontWeight: 600 }}>{desc}</Box>
    </ListItem>
  );
}

export default CryptoStats;

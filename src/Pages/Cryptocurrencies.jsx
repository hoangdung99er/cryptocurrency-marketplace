import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { DrawerHeader } from "../components/Drawer";
import { Top10Crypto } from "../components";

function Cryptocurrencies() {
  return (
    <Box>
      <DrawerHeader />
      <Top10Crypto />
    </Box>
  );
}

export default Cryptocurrencies;

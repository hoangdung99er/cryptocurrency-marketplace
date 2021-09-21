import React from "react";
import { DrawerHeader } from "../components/Drawer";
import { Box, CircularProgress } from "@mui/material";
import { useGetCryptosQuery } from "../store/Utils/CallApi";
import { CryptoStatsContainer, Top10Crypto, News } from "../components";

function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <Box>
      <DrawerHeader />
      {isFetching ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "220px",
            alignItems: "center",
          }}
        >
          <CircularProgress size={55} />
        </Box>
      ) : (
        <CryptoStatsContainer globalStats={globalStats} />
      )}
      <Top10Crypto simplified />
      <News simplified />
    </Box>
  );
}

export default Home;

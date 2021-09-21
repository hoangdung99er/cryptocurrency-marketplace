import React from "react";
import { CryptoStats } from "../components";
import millify from "millify";
import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function CryptoStatsContainer({ globalStats }) {
  return (
    <>
      <TypographyMui variant="h6" noWrap component="div">
        Global Crypto Stats
      </TypographyMui>
      <List
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <CryptoStats title="Total Cryptocurrencies" desc={globalStats.total} />
        <CryptoStats
          title="Total Market Cap"
          desc={millify(globalStats.totalExchanges)}
        />
        <CryptoStats
          title="Total Markets"
          desc={millify(globalStats.totalMarketCap)}
        />
        <CryptoStats
          title="Total Exchanges"
          desc={millify(globalStats.total24hVolume)}
        />
        <CryptoStats
          title="Total 24h volume"
          desc={millify(globalStats.totalMarkets)}
        />
      </List>
    </>
  );
}

const TypographyMui = styled(Typography)`
  margin: 16px 0 0 16px;
  font-size: 1.5rem;
`;

export default CryptoStatsContainer;

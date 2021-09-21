import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../store/Utils/CallApi";
import CryptoItem from "./CryptoItem";
import Input from "../Share/Input";

function Top10Crypto({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredCoin = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredCoin);
  }, [cryptosList, searchTerm]);

  return (
    <>
      {simplified && (
        <CustomBox>
          <TypographyMui variant="h6" noWrap component="div">
            Top 10 Cryptocurrencies in the world
          </TypographyMui>
          <CustomLink to="/cryptocurrencies">
            <Button>Show more</Button>
          </CustomLink>
        </CustomBox>
      )}
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
        <>
          {!simplified && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <Input onChange={(e) => setSearchTerm(e.target.value)} />
            </Box>
          )}
          <Grid container spacing={4}>
            <Grid xs={12} item>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr", lg: "repeat(4, 1fr)" },
                  gap: 2,
                }}
              >
                {cryptos?.map((crypto) => (
                  <Link key={crypto.id} to={`/crypto/${crypto.id}`}>
                    <CryptoItem crypto={crypto} />
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

const TypographyMui = styled(Typography)`
  margin: 16px 0 0 16px;
  font-size: 1.5rem;
`;

const CustomLink = styled(Link)`
  color: "#12916b";
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const CustomBox = styled(Box)`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;

export default Top10Crypto;

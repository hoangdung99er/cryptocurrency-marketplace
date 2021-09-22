import React from "react";
import { DrawerHeader } from "../components/Drawer";
import { useGetCryptoExchangesQuery } from "../store/Utils/CallApi";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  Avatar,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

function Exchanges() {
  const { data: exchanges } = useGetCryptoExchangesQuery();
  const dataExchages = exchanges?.data?.exchanges;
  console.log(exchanges);
  return (
    <div>
      <DrawerHeader />
      <Box sx={{ mt: 5, ml: "calc(100% - 90%)" }}>
        <Box sx={{ display: "flex", maxWidth: "90%", mb: 3 }}>
          <Typography sx={{ width: "23%", flexShrink: 0, ml: 2 }}>
            Exchange Name
          </Typography>
          <Typography sx={{ width: "23.2%", flexShrink: 0 }}>
            24h Volume exchange
          </Typography>
          <Typography sx={{ width: "23.2%", flexShrink: 0 }}>
            Markets
          </Typography>
          <Typography sx={{ width: "23%", flexShrink: 0 }}>Change</Typography>
        </Box>
        {dataExchages &&
          dataExchages?.map((exchange, i) => (
            <Accordion
              sx={{
                maxWidth: "90%",
              }}
              key={exchange?.uuid}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                    }}
                  >
                    {i + 1}
                    {". "}
                    <Avatar
                      sx={{ ml: 2, mr: 2 }}
                      src={exchange?.iconUrl}
                      alt={exchange?.name}
                    />
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{ width: "25%", flexShrink: 0 }}
                    >
                      {exchange?.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ width: "25%", flexShrink: 0 }}
                  >
                    {millify(exchange?.volume)}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ width: "25%", flexShrink: 0 }}
                  >
                    {millify(exchange?.numberOfMarkets)}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ width: "25%", flexShrink: 0 }}
                  >
                    {millify(exchange?.marketShare)}%
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {exchange?.description &&
                    HTMLReactParser(exchange?.description)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </div>
  );
}

export default Exchanges;

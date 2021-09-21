import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { DrawerHeader } from "../components/Drawer";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} from "../store/Utils/CallApi";
import millify from "millify";
import {
  AttachMoney,
  ArrowUpward,
  LocalAtm,
  Money,
  MonetizationOn,
  CheckOutlined,
} from "@mui/icons-material";
import { useTheme, alpha } from "@mui/material/styles";
import HTMLReactParser from "html-react-parser";
import { LineChart } from "../components";

function CryptoDetail() {
  const theme = useTheme();
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("24h");
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const [cryptoDetails, setCryptoDetails] = useState(null);

  console.log(cryptoDetails);

  useEffect(() => {
    setCryptoDetails(data?.data?.coin);
  }, [data?.data?.coin]);

  const time = ["24h", "7d", "30d", "1y", "5y"];

  const stats = [
    {
      title: "Price to USR",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AttachMoney />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <ArrowUpward /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <LocalAtm />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <Money />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh && millify(cryptoDetails?.allTimeHigh.price)
      }`,
      icon: <MonetizationOn />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails && cryptoDetails?.numberOfMarkets,
      icon: <AttachMoney />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails && cryptoDetails?.numberOfExchanges,
      icon: <Money />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails && cryptoDetails?.approvedSupply,
      icon: <CheckOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${cryptoDetails && millify(cryptoDetails?.totalSupply)}`,
      icon: <Money />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${cryptoDetails && millify(cryptoDetails?.circulatingSupply)}`,
      icon: <MonetizationOn />,
    },
  ];

  return (
    <Box component="div" sx={{ border: "none" }}>
      <DrawerHeader />
      <Box
        sx={{
          height: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 600 }}
          color="success.dark"
          component="div"
        >
          {cryptoDetails?.name} ({cryptoDetails?.slug}) Price
        </Typography>
        <Typography variant="body2" component="div">
          {cryptoDetails?.name} live price in US dollars. View value statistics,
          market cap and ....
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          maxWidth: 150,
          mt: 3,
          ml: 5,
          background: theme.palette.background.paper,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Coin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timePeriod}
            label="DateTime"
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            {time.map((date, i) => (
              <MenuItem key={date} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {coinHistory && (
        <LineChart
          coinHistory={coinHistory}
          currentPrice={cryptoDetails?.price && millify(cryptoDetails?.price)}
          coinName={cryptoDetails?.name}
        />
      )}
      <Box>
        <Box
          sx={{
            mt: 3,
            p: 2,
            background: theme.palette.background.default,
          }}
        >
          <Grid justifyContent="center" alignItems="center" gap={6} container>
            <Grid item sm={8} xs={12} md={5}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, fontWeight: 600, textAlign: "center" }}
                  component="div"
                  gutterBottom
                  noWrap
                >
                  {cryptoDetails?.name} Value Statistics
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 5, textAlign: "center" }}
                  color="success.dark"
                  component="div"
                  noWrap
                >
                  An overview showing the stats of {cryptoDetails?.name}
                </Typography>
                {stats?.map(({ title, value, icon, i }) => (
                  <React.Fragment key={title}>
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#dad7d7",
                        color: theme.palette.common.black,
                        opacity: 0.85,
                        "&:hover": {
                          opacity: 1,
                        },
                        height: "8ch",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pl: 1,
                        }}
                      >
                        {icon}
                        <Typography
                          sx={{ ml: 2 }}
                          variant="body1"
                          component="div"
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{ fontWeight: 600, pr: 2 }}
                        variant="body1"
                        component="div"
                        noWrap
                      >
                        {value}
                      </Typography>
                    </Box>
                    <Divider sx={{ height: 2, background: "#d5d4d3" }} />
                  </React.Fragment>
                ))}
              </Box>
            </Grid>
            <Grid item sm={8} xs={12} md={5}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ mb: 3, fontWeight: 600, textAlign: "center" }}
                  component="div"
                  gutterBottom
                  noWrap
                >
                  {cryptoDetails?.name} Value Statistics
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 5, textAlign: "center" }}
                  color="success.dark"
                  component="div"
                  noWrap
                >
                  An overview showing the stats of {cryptoDetails?.name}
                </Typography>
                {genericStats?.map(({ title, value, icon, i }) => (
                  <React.Fragment key={title}>
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#dad7d7",
                        color: theme.palette.common.black,
                        opacity: 0.85,
                        "&:hover": {
                          opacity: 1,
                        },
                        height: "8ch",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pl: 1,
                        }}
                      >
                        {icon}
                        <Typography
                          sx={{ ml: 2 }}
                          variant="body1"
                          component="div"
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{ fontWeight: 600, pr: 2 }}
                        variant="body1"
                        component="div"
                        noWrap
                      >
                        {value}
                      </Typography>
                    </Box>
                    <Divider sx={{ height: 2, background: "#d5d4d3" }} />
                  </React.Fragment>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 2 }}
          color="primary.main"
          component="div"
          noWrap
        >
          What is {cryptoDetails?.name}
        </Typography>
        <Typography variant="body2" component="div">
          {cryptoDetails && HTMLReactParser(cryptoDetails?.description)}
        </Typography>
      </Box>

      <Box sx={{ p: 2, background: theme.palette.background.default }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, mb: 2 }}
          color="primary.main"
          component="div"
          noWrap
        >
          {cryptoDetails?.name} Links
        </Typography>
        <Box>
          {cryptoDetails?.links.map((link) => (
            <Box
              key={link?.url}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "8ch",
                alignItems: "center",
                mb: 3,
                padding: "0 20px",
                "&:hover": {
                  opacity: 0.8,
                  background:
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.common.white, 0.15)
                      : alpha(theme.palette.primary.main, 0.16),
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600 }}
                component="div"
                noWrap
              >
                {link.type}
              </Typography>
              <a href={link.url} target="_blank" rel="noreferrer noreopener">
                {link.name}
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(CryptoDetail);

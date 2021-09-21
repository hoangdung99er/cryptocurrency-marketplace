import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Navbar, Drawer, Footer } from "./components";
import { Switch, Route } from "react-router-dom";
import {
  CryptoDetail,
  Cryptocurrencies,
  Exchanges,
  Home as Homepage,
  News,
} from "./Pages";

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Navbar handleDrawerOpen={handleDrawerOpen} open={open} />
          <Drawer handleDrawerClose={handleDrawerClose} open={open} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CryptoDetail />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
            <Footer />
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default React.memo(App);

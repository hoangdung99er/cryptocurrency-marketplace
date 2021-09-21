import React, { useState } from "react";
import { DrawerHeader } from "../components/Drawer";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useGetCryptosQuery } from "../store/Utils/CallApi";
import { News as NewsCompo } from "../components";

function News() {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  return (
    <div>
      <DrawerHeader />
      <Box sx={{ minWidth: 120, mt: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Coin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newsCategory}
            label="Age"
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <MenuItem value="Cryptocurrency">Cryptocurrency</MenuItem>
            {data?.data?.coins.map((coin, i) => (
              <MenuItem key={i} value={coin.name}>
                {coin.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <NewsCompo newsCategory={newsCategory} />
    </div>
  );
}

export default News;

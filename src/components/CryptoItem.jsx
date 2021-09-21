import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import millify from "millify";

function CryptoItem({ crypto }) {
  return (
    <Item elevation={3}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {crypto.rank}
              {". "}
              {crypto.name}
            </Typography>
            <Avatar src={crypto.iconUrl} alt={crypto.name} />
          </Box>
          <Typography variant="h5" component="div">
            Price: {millify(crypto.price)}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Market Cap: {millify(crypto.marketCap)}
          </Typography>
          <Typography variant="body2">
            Daily Change: {millify(crypto.change)}%
          </Typography>
        </CardContent>
      </Card>
    </Item>
  );
}

const Item = styled(Paper)`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
`;

export default CryptoItem;

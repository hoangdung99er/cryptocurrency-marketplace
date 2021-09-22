import React from "react";
import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString(
        "VN-vi"
      )
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Box sx={{ p: 2, mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "space-around", md: "space-between" },
        }}
      >
        <Typography variant="h5" component="div">
          {coinName} Price Chart
        </Typography>
        <Box sx={{ mt: { xs: 4, sm: 0 } }}>
          <Typography variant="body1" component="div">
            {coinHistory?.data?.change}%
          </Typography>
          <Typography variant="body1" component="div">
            Current {coinName} Price: $ {currentPrice}
          </Typography>
        </Box>
      </Box>
      <Line data={data} options={options} />
    </Box>
  );
}

export default React.memo(LineChart);

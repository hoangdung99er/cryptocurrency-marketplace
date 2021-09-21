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
    <>
      <Box>
        <Typography variant="h5" component="div">
          {coinName} Price Chart
        </Typography>
        <Box>
          <Typography variant="body1" component="div">
            {coinHistory?.data?.change}%
          </Typography>
          <Typography variant="body1" component="div">
            Current {coinName} Price: $ {currentPrice}
          </Typography>
        </Box>
      </Box>
      <Line data={data} options={options} />
    </>
  );
}

export default React.memo(LineChart);

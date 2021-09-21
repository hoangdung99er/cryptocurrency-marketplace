import React from "react";
import { Box, Typography, Divider, Stack, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.paper",
        pt: 25,
      }}
      color="primary.main"
    >
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginBottom: 2,
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Stack>
      </Container>

      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ width: "100%", textAlign: "center", letterSpacing: 1 }}
      >
        CRYPTO REXBOX <Divider /> All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;

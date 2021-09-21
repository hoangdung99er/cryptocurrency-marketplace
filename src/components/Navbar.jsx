import React, { useContext } from "react";
import {
  MonetizationOn,
  LightbulbOutlined,
  Update,
  MenuOutlined,
  Brightness4,
  Brightness7,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Avatar,
  Button,
  Typography,
  IconButton,
  InputBase,
  Box,
  Badge,
} from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../Context/DarkModeContext";
import { Link } from "react-router-dom";

function Navbar({ handleDrawerOpen, open }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <AppBarMui position="fixed" open={open}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={handleDrawerOpen}
          sx={{
            mr: 2,
            ...(open && { display: "none" }),
          }}
        >
          <MenuOutlined />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <LinkBase to="/">CRYPTO REXBOX</LinkBase>
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Search color="primary">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase />
        </Search>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            marginLeft: 2,
          }}
        >
          <IconButton
            size="large"
            aria-label="show 4 new emails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <LightbulbOutlined />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <MonetizationOn />
          </IconButton>
          <IconButton size="large" color="inherit">
            <Update />
          </IconButton>
        </Box>
        <IconButton
          size="small"
          color="inherit"
          sx={{ marginLeft: { xs: 2, md: 0 } }}
        >
          <Avatar
            src="https://images.pexels.com/photos/6693741/pexels-photo-6693741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="imgRad"
          />
        </IconButton>
      </Toolbar>
    </AppBarMui>
  );
}

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const AppBarMui = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const LinkBase = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(["width", "transform"], {
      duration: 300,
      easing: theme.transitions.easing.easeInOut,
    }),
    [theme.breakpoints.up("sm")]: {
      width: "8rem",
      "&:focus": {
        width: "11rem",
      },
    },
  },
}));

export default React.memo(Navbar);

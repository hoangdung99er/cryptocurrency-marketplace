import React from "react";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  MonetizationOn,
  LightbulbOutlined,
  Update,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function DrawerElm({ handleDrawerClose, open }) {
  const theme = useTheme();
  return (
    <DrawerContainer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ padding: 0 }}>
        {[
          { icon: <Home />, text: "Home", to: "/" },
          {
            icon: <MonetizationOn />,
            text: "CryptoCurrency",
            to: "/cryptocurrencies",
          },
          { icon: <LightbulbOutlined />, text: "Chart", to: "/exchanges" },
          { icon: <Update />, text: "Total", to: "/news" },
        ].map(({ text, icon, to }, i) => (
          <Link to={to} key={i}>
            <ListItemMui>
              <ListItemButton sx={{ paddingLeft: "22px" }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItemMui>
          </Link>
        ))}
      </List>
    </DrawerContainer>
  );
}

const drawerWidth = 240;

const ListItemMui = styled(ListItem)`
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
`;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerContainer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default React.memo(DrawerElm);

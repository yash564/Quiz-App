import React from "react";
import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AccountCircle,
  ChevronLeft,
  PaymentOutlined,
  LiveHelpOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";

const Nav = (props) => {
  const [open, setOpen] = useState(false);
  const { currentUser, signOut } = useContext(AuthContext);

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menubutton: {
      marginRight: theme.spacing(2),
    },
    drawerContent: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "240px",
    },
    drawerIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
  }));

  let classes = useStyles();

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const handleLogOut = async () => {
    await signOut();
  };

  return (
    <div
      className={classes.grow}
      style={{ position: "sticky", top: "0", zIndex: "1" }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menubutton}
            onClick={handleOpenDrawer}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6">
            <Link to="/" className={classes.linkStyle}>
              Quiz App
            </Link>
          </Typography>
          <div className={classes.grow}></div>
          <Button
            className={classes.menubutton}
            color="inherit"
            size="medium"
            variant="outlined"
          >
            <Link className={classes.linkStyle} to="/signup">
              Try Now
            </Link>
          </Button>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <IconButton
                  edge="end"
                  color="inherit"
                  size="large"
                  {...bindTrigger(popupState)}
                >
                  <AccountCircle></AccountCircle>
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  {currentUser ? (
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/profile"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      onClick={popupState.close}
                      style={{ display: "none" }}
                    >
                      <Link
                        to="/profile"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </MenuItem>
                  )}
                  {currentUser ? (
                    <MenuItem onClick={popupState.close}>
                      <div onClick={handleLogOut}>
                        <Link
                          to="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Log Out
                        </Link>
                      </div>
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={popupState.close}>
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Log In
                      </Link>
                    </MenuItem>
                  )}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} className={classes.drawer}>
        <div style={{ textAlign: "right" }}>
          <IconButton onClick={handleCloseDrawer}>
            <ChevronLeft></ChevronLeft>
          </IconButton>
        </div>
        <Divider></Divider>
        <List className={classes.drawerContent}>
          <ListItemIcon className={classes.drawerIcon}>
            <PaymentOutlined></PaymentOutlined>
          </ListItemIcon>
          <ListItemText>
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "black" }}
            >
              Pricing
            </Link>
          </ListItemText>
        </List>
        <List className={classes.drawerContent}>
          <ListItemIcon className={classes.drawerIcon}>
            <LiveHelpOutlined></LiveHelpOutlined>
          </ListItemIcon>
          <ListItemText>
            <Link to="/help" style={{ textDecoration: "none", color: "black" }}>
              F.A.Q
            </Link>
          </ListItemText>
        </List>
        <Divider></Divider>
        <List className={classes.drawerContent}>
          <ListItemIcon className={classes.drawerIcon}>
            <ExitToAppOutlined></ExitToAppOutlined>
          </ListItemIcon>
          {currentUser ? (
            <ListItemText onClick={handleLogOut}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Log Out
              </Link>
            </ListItemText>
          ) : (
            <ListItemText>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Log In
              </Link>
            </ListItemText>
          )}
        </List>
        <Divider></Divider>
      </Drawer>
    </div>
  );
};

export default Nav;

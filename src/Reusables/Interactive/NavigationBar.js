import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
  Button,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { useStore, connect } from 'react-redux';
import { userLogOut } from '../../redux/actions/authentication';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fontStyle: {
    textTransform: 'initial',
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const mapDispatchToProps = {
  userLogOut,
};

export const NavigationBar = connect(
  null,
  mapDispatchToProps,
)(({ handleLoginClick, handleSignUpClick, userLogOut }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const state = useStore().getState();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          className={classes.title}
        ></Typography>
        {state.auth.user ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={() => userLogOut()}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </StyledMenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            {['Signup', 'Login'].map((item, i) => (
              <Button
                onClick={() => {
                  if (i === 0) handleSignUpClick();
                  else handleLoginClick();
                }}
                className={
                  i === 0
                    ? [classes.menuButton, classes.fontStyle].join(
                        ' ',
                      )
                    : classes.fontStyle
                }
                variant="contained"
                color="secondary"
              >
                {item}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
});

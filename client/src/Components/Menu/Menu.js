/*
 * @desc Menu Component
 * @desc contains all the menu items
 */
import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";

// MatUI
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Menu = () => {
  // RRD
  const history = useHistory();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        {/* DROP DOWN START */}
        <Button
          ref={anchorRef}
          aria-controls="{open ? 'menu-list-grow' : undefined}"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Account
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Admin</MenuItem>
                    <MenuItem onClick={handleClose}>Current Events</MenuItem>
                    <MenuItem onClick={handleClose}>New Events</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {/* DROP DOWN END */}
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            localStorage.clear();
            history.push("/");
            console.log("user logged out");
            window.location.reload();
          }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Menu;

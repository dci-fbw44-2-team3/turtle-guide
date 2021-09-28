import React from "react";

// * Mat Ui Imports
import { makeStyles } from "@material-ui/core/styles";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import { Settings, Map, DirectionsWalk, Home } from "@material-ui/icons";

// * Custom Hooks
import useGetEvent from "../../Hooks/useGetEvent";

// react router //
import { Link } from "react-router-dom";
import { ourColors } from "../../../../styles/Theme";

const useStyles = makeStyles({
  footer: {
    height: "60px",
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: ourColors.gainsboro,
    borderTop: `1px solid grey`,
    zIndex: "1000", // brings it on top of everything
  },
  navLink: {},
});

export default function BottomNavBar() {
  const classes = useStyles();

  // * States
  const [value, setValue] = React.useState("event");

  //* Custom Hooks
  const event = useGetEvent();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.footer}
    >
      <BottomNavigationAction
        className={classes.navLink}
        // * Intro of the exhibition
        component={Link}
        to={event && `/events/${event.slug}/sections/1`} // intro is always the first slide
        label="Home"
        value="home"
        icon={<Home />}
      />

      <BottomNavigationAction
        className={classes.navLink}
        // * Exhibition Main Page
        component={Link}
        to={event && `/events/${event.slug}`}
        label="Event"
        value="event"
        icon={<DirectionsWalk />}
      />

      <BottomNavigationAction
        className={classes.navLink}
        // * Exhibition Map Page
        component={Link}
        to="/events/:name/map"
        label="Map"
        value="map"
        icon={<Map />}
      />

      <BottomNavigationAction
        className={classes.navLink}
        // * App Settings page
        component={Link}
        to="/events/settings"
        label="Settings"
        value="settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
}

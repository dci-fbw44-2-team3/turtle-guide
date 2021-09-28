/**
* @desc Component for the top section of the sections 
to navigate through them 
*/

import React from "react";
import { useHistory } from "react-router-dom";

// * Imports
import {
  goToSection,
  extractNameIdentifier,
  getSectionFromAddress,
} from "../../Functions/functions";
import useGetEvent from "../../Hooks/useGetEvent";
import useGetAndSaveEvent from "../../Hooks/useGetAndSaveEvent";

import CustomIconButton from "../../../Buttons/CustomIconButtons/CustomIconButton";

//mui
import { MobileStepper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { ourColors } from "../../../../styles/Theme";

// our theme
import { theme } from "../../../../styles/Theme";

const useStyles = makeStyles((theme) => ({
  // "@global": {
  //   // ... global styles here

  //   body: {
  //     margin: 0,
  //   },
  // },
  navWrapper: {
    ...theme.guide.sectionNavbar,
    // backgroundColor: "white",
    position: "fixed",
    width: "100%",
    height: "90px",
    marginTop: "-15px",
    // transitionTimingFunction: "ease-in",
    // transition: "all 1s",
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginTop: "0px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "1rem",
    color: ourColors.jet,
  },
  stepperContainer: {
    marginBottom: "7px",
    marginTop: "-23px",
  },
  stepper: {
    backgroundColor: "transparent",
  },
}));
const SectionNavBar = () => {
  // * Hooks
  const classes = useStyles();
  const history = useHistory();
  const event = useGetEvent();

  // idCurrentSection is the current index in the array of the section
  const idCurrentSection = getSectionFromAddress(window.location.pathname);

  // find current index in sections array
  const indexCurrentSection = event.sections.findIndex(
    (x) => x.id === idCurrentSection
  );

  // extract the ids of the prev/next sections using the current index
  const idPrevSection = event.sections[indexCurrentSection - 1]?.id; //
  const idNextSection = event.sections[indexCurrentSection + 1]?.id;

  // extract in case the page is called directly
  const nameIdentifier = extractNameIdentifier(window.location.pathname);
  const eventSlug = nameIdentifier;

  /**
   * @desc the param section is used in case the page is called
   * directly without passing by <Guide/> or <Home/>
   * if section is null the hook returns otherwise by default returns null
   * cause is already called from <Guide />
   */
  useGetAndSaveEvent(nameIdentifier, event);

  return (
    <div className={`${classes.navWrapper}`}>
      <div className={classes.nav}>
        <CustomIconButton
          // with states goPrev go Next bool values
          // if is 1 is the intro so do not go
          disabled={idPrevSection === 1 ? true : false}
          onClickFunc={() =>
            goToSection(
              history,
              idPrevSection,
              0,
              idCurrentSection,
              eventSlug,
              nameIdentifier
            )
          }
          icon="prev"
          style={{ marginRight: "1rem", padding: "0" }}
        />
        <h4 className={classes.sectionTitle}>{event?.title}</h4>
        <CustomIconButton
          disabled={
            idNextSection === 1 || idNextSection === undefined ? true : false
          }
          onClickFunc={() =>
            goToSection(
              history,
              idNextSection,
              0,
              idCurrentSection,
              eventSlug,
              nameIdentifier
            )
          }
          icon="next"
          style={{ marginLeft: "1rem", padding: "0" }}
        />
      </div>
      <div className={classes.stepperContainer}>
        <MobileStepper
          className={classes.stepper}
          variant="dots"
          steps={event.sections.length - 1} // to skip the intro
          position="static"
          activeStep={indexCurrentSection - 1}
        />
      </div>
    </div>
  );
};

export default SectionNavBar;

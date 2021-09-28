/**
 * @desc Main file for MatUI Styling
 *
 */
import { createTheme } from "@material-ui/core/styles";

export const colors = {
  grey: "#22333B", //darkGraey ----------
  ming: "#3B6C70", //darkGreen ----------------
  black: "#0A0908", // --------------
  arcBlue: "#0B72B9",
  arcOrange: "#FFBA60",
  primaryMain: "#D9D9D9", // yellow/white gainsboro ---------
  primaryLight: "#F5F5F5", // white
  secondaryMain: "#284A63", // darkblue ----------
  errorMain: "#EA1E0B", // Red
  warningMain: "#F76C5E", // light red / orange
  infoMain: "#F5DD90", // light yellow
  successMain: "#918F0F", // olive
  btnOver: "#CCC5B9",
};

export const ourColors = {
  primaryLight: "#F5F5F5",
  black: "#000000", // black
  jet: "#353535", // dark grey
  ming: "#3C6E71", // dark blueish green
  white: "#FFFFFF", // snow white
  gainsboro: "#D9D9D9", // light grey
  indigoDye: "#284B63", // dark blue
  lightGrey: "#ededed",
};

// ! refer to this palette
export const ourColorsTwo = {
  persianIndigo: "#27187E", // blue
  cornflowerBlue: "#758BFD", // baby blue
  maxBluePurple: "#AEB8FE", // light blue
  cultured: "#F1F2F6", // light gray
  darkOrange: "#FF8600", // deep orange
  mandarin: "#FC834A", // deep orange
  englishViolet: "#564256", // violet
  grayX11: "#A3A3A3", // deep orange
  platinum: "#F5F5F5", // deep orange
};

export const ourColorsThree = {
  spaceCadet: "#2B2D42", // dark grey
  manatee: "#8D99AE", // grey
  aliceBlue: "#EDF2F4", // light grey
  imperialRed: "#EF233C", // light red
  amaranthRed: "#D90429", // deep red
};

export const theme = createTheme({
  // overrides: {
  //   MuiFormLabel: {
  //     root: {
  //       lineHeight: "1.11",
  //     },
  //   },
  // },
  // root: {
  //   fontFamily: "Raleway",
  //   fontWeight: 800,
  //   fontSize: "1.1rem",
  //   textTransform: "uppercase",
  // },
  // "@global": {
  //   // ... global styles here

  /*   body: { }, */

  palette: {
    common: {
      black: `${ourColors.black}`,
      white: `${ourColors.white}`,
    },
    primary: {
      main: `${ourColors.indigoDye}`,
      light: `${ourColors.gainsboro}`,
    },
    secondary: {
      main: `${ourColors.indigoDye}`,
      darkGrey: `${colors.grey}`,
      darkGreen: `${colors.ming}`,
    },
    text: {
      primary: `${ourColors.black}`,
      secondary: `${ourColors.indigoDye}`,
      darkGrey: `${colors.grey}`,
    },
    error: { main: `${colors.errorMain}` },
    warning: { main: `${colors.warningMain}` },
    info: { main: `${colors.infoMain}` },
    success: { main: `${colors.successMain}` },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily:
      "'Baton Turbo', 'Poppins', 'Roboto', 'raleway', 'sans-serif', 'Helvetica'",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {},
    h2: {
      fontSize: "1.4rem",
      textAlign: "start",
      textTransform: "capitalize",
      letterSpacing: "0.60000px",
      fontFamily: "'Baton Turbo', sans-serif'",
    },
    body2: {
      letterSpacing: "0.8000000px",
      textAlign: "start",
      "& * p": {
        fontSize: "0.9rem",
        fontFamily: "'Baton Turbo', sans-serif",
        color: "#595751",
        fontWeight: 300,
      },
    },

    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
  admin: {
    // container maxWidth="md"
    page: {
      background: `linear-gradient(360deg, ${ourColors.lightGrey} 10%, ${ourColors.indigoDye} 360%)`,
      // backgroundColor: ourColorsTwo.cultured,
    },
    container: {
      minHeight: "calc(100vh - 80px)",
      padding: "2rem",
    },
    pageTitleContainer: {
      // background: `linear-gradient(45deg, ${ourColorsTwo.darkOrange} 30%, transparent 90%)`,
      // borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
      // borderBottom: `1px solid ${ourColors.indigoDye}`,
    },
    pageTitle: {
      textAlign: "left",
      fontSize: "1.8rem",
      lineHeight: "2.6rem",
      letterSpacing: "0px",
      textTransform: "uppercase",
      color: ourColors.indigoDye,
      // borderRadius: "8px",

      // fontWeight: "bold",

      // borderBottom: `2px solid ${ourColors.jet}`,
      // textShadow: `1px 2px 2px ${ourColors.jet}`,
      /* textShadow: `-1px -1px 0 ${ourColors.indigoDye},
      1px -1px 0 ${ourColors.indigoDye},
      -1px 1px 0 ${ourColors.indigoDye},
      1px 1px 0 ${ourColors.indigoDye}`, */
    },
    sectionsContentsContainer: { paddingLeft: "2rem" },
    btnSidebar: {
      border: `1px solid ${ourColors.gainsboro}`,
      backgroundColor: ourColors.lightGrey,
      display: "flex",
      flexDirection: "column",
      borderRadius: "5px",
      position: "sticky",
      height: "100%",
      padding: "1rem",
      top: "1rem",
    },
    btnGroup: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "8px",
      overflow: "hidden",
      // border: `1px solid ${ourColors.lightGrey}`,
      marginBottom: "1rem",
      /* "& >*": {
        borderRadius: "0",
        margin: "0",
        borderBottom: `1px solid ${ourColors.lightGrey}`,
        "&:last-child": {
          borderBottom: "0",
        },
      }, */
    },
    gridContentHeader: {
      fontSize: "1.6rem",
      textAlign: "center",
      color: ourColors.jet,
      marginTop: "1.6rem",
      marginBottom: "1rem",
    },
    imgTitle: {
      fontWeight: 800,
      fontSize: "0.8rem",
      color: ourColors.jet,
      overflowWrap: "anywhere",
      lineHeight: "10px",
    },
    imgDesc: {
      fontWeight: 400,
      fontSize: "0.8rem",
      color: ourColors.jet,
      overflowWrap: "anywhere",
    },
  },
  // ! refer to ourColorsTwo
  guide: {
    container: { backgroundColor: "white", padding: "0" },
    globalGradientBg: {
      background:
        "linear-gradient(0deg, rgba(242,242,242,0.1) 0%, rgba(219,219,219,1) 68%, rgba(234,234,234,1) 100%)", // zinc
      // background:
      //   "linear-gradient(0deg, rgba(207,222,243,1) 0%, rgba(224,234,252,1) 100%)",
      // background:
      //   "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(170,186,171,1) 100%)", // light green
      // background:
      //   " linear-gradient(0deg, rgba(215,221,232,0.6) 0%, rgba(117,127,154,0.6) 100%)", // blue grey
    },
    mainHeader: {
      top: 0,
      // ! define color here just a test
      color: "grey",
      fontSize: "2.5rem",
      letterSpacing: "0.60000px",
      // ! I don't think it fits
      // fontFamily: "'Baton Turbo', sans-serif",
      // fontWeight: 600,
    },
    header: {
      fontWeight: 600,
    },

    // INTRO
    introTitleWrap: {
      marginTop: "20px",
      marginBottom: "50px",
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
      padding: "15px",
      paddingBottom: "0px",
    },
    introTitle: {
      fontSize: "2.5rem",
      color: `${ourColorsTwo.englishViolet}`,
      fontWeight: 600,
      letterSpacing: "3px",
      lineHeight: "60px",
      // ! removed span test
      // "& > span": {
      //   paddingBottom: "10px",
      //   paddingTop: "10px",
      //   paddingRight: "10px",
      //   paddingLeft: "10px",
      //   backgroundColor: "white",
      //   boxShadow: "5px 3px 15px -13px rgba(0,0,0,1)",
      // },
    },

    // HOME / EVENTS
    eventsTitle: {
      color: `${ourColorsTwo.englishViolet}`,
      fontSize: "2.5rem",
      fontWeight: 400,
      letterSpacing: "3px",
    },

    // SECTION
    sectionTitleWrap: {
      marginTop: "-40px",
      backgroundColor: "white",
      boxShadow: "5px 3px 15px -13px rgba(0,0,0,0.7)",
      // clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 81%)",
    },
    sectionTitle: {
      marginTop: "-15px",
      padding: "10px",
      paddingBottom: "0px",
      color: `${ourColorsTwo.englishViolet}`,
    },
    // NAV BARS
    sectionNavbar: {
      backgroundColor: `${ourColorsTwo.platinum}`,
      iconNormalColor: `${ourColorsTwo.grayX11}`,
      iconSelectedColor: `${ourColorsTwo.mandarin}`,
      boxShadow: " 0 3px 9px rgba(0, 0, 0, 0.3)",
    },
    bottomNavBar: {
      backgroundColor: `${ourColorsTwo.platinum}`,
      iconNormalColor: `${ourColorsTwo.grayX11}`,
      iconSelectedColor: `${ourColorsTwo.mandarin}`,
    },
    settings: {
      header: {
        padding: "1rem",
        borderBottom: `1px solid ${ourColors.indigoDye}`,
        position: "relative",
      },
      gridSection: {
        "&:nth-child(even)": {
          backgroundColor: ourColors.lightGrey,
        },
        textDecoration: "none",
        color: "inherit",
        padding: "2rem 1rem",
      },
    },
  },

  // typography: {
  //   tab: {
  //     fontFamily: "Raleway",
  //     fontWeight: 800,
  //     fontSize: "1.1rem",
  //     textTransform: "uppercase",
  //   },
  // },

  // ? CUSTOM CSS
  // css: {
  //   tab: {
  //     minWidth: 10,
  //     marginLeft: "50px",
  //     marginRight: "50px",
  //     textAlign: "center",
  //     justifyContent: "center",
  //     justifyItems: "center",
  //     "&:hover": {
  //       color: colors.primaryLight,
  //     },
  //   },
  // },

  // "& .MuiButton-root": {
  //   padding: "0px",
  // },

  //  BUTTONS
  buttons: {
    btn: {
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      // backgroundColor: ourColors.ming,
      background: `linear-gradient(45deg, ${ourColors.indigoDye} 30%, ${ourColors.ming} 90%)`,
      boxShadow: `0 3px 5px 2px ${ourColors.gainsboro}`,
      color: "white",
      borderRadius: "5px",
      padding: "0.4rem 0.8rem",
      transition: "all 0.1s",
      "&:hover": {
        transform: "scale(1.03)",

        // color: ourColors.black,
      },
    },
    btnIcon: { backgroundColor: "transparent", padding: "0.6rem" },
    modalbtn: {
      marginLeft: "auto",
      fontWeight: 800,
      letterSpacing: "1px",
      textTransform: "uppercase",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      border: `1px solid ${ourColors.jet}`,
      transition: "all 0.1s",
      backgroundColor: ourColors.lightGrey,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: ourColors.indigoDye,
        color: "white",
      },
      color: ourColors.jet,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },

    //   btnUpdateItem: {
    //     fontSize: "0.9rem",
    //     textTransform: "uppercase",
    //     backgroundColor: colors.primaryMain,
    //     color: "white",
    //     borderRadius: "5px",
    //     marginBottom: "5px",
    //     marginTop: "5px",
    //     marginLeft: "20px",
    //     "&:hover": {
    //       backgroundColor: colors.btnOver,
    //     },
    //     "&:focus": {
    //       backgroundColor: "red",
    //     },
    //   },
  },

  // // TABLES

  // // INSERT

  // // FORM
  // insert: {
  //   inputs: {
  //     display: "flex",
  //     flexDirection: "row",
  //     width: "100%",
  //     marginRight: 30,
  //     "& > *": {
  //       marginTop: 20,
  //     },
  //   },
  //   titleauthor: {
  //     width: "50%",
  //     display: "flex",
  //     flexDirection: "column",
  //     marginRight: "30px",
  //     "& > :first-child": {
  //       marginRight: 20,
  //     },
  //     "& > div": {
  //       width: "100%",
  //       paddingRight: 30,
  //       marginBottom: 20,
  //     },
  //     "& > :last-child": {
  //       marginRight: 0,
  //     },
  //   },
  //   isbn: {
  //     width: "50%",
  //     display: "flex",
  //     flexDirection: "column",
  //     marginLeft: "30px",
  //     "& > *": {
  //       width: "100%",
  //     },
  //     "& > :first-child": {},
  //   },

  //   // BUTTONS

  //   buttons: {
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     marginTop: 20,
  //     "& > *": {
  //       width: 200,
  //       marginBottom: 20,
  //       marginRight: 50,
  //       marginLeft: 50,
  //     },
  //     "& > :last-child": {},
  //   },

  //   // Tables
  //   tableFound: {
  //     backgroundColor: colors.primaryMain,
  //     display: "grid", // Overrides default theme
  //   },
  // },

  // database: {
  //   blocks: {
  //     display: "flex",
  //     flexDirection: "row",
  //     width: "100%",
  //   },
  //   block1: {
  //     display: "flex",
  //     flexDirection: "column",
  //     width: 600,
  //     marginRight: 30,
  //     "& > *": {
  //       marginTop: 20,
  //     },
  //   },
  //   block2: {
  //     display: "flex",
  //     flexDirection: "column",
  //     width: 300,
  //     "& > *": {
  //       marginTop: 20,
  //     },
  //   },
  //   allfilters: {
  //     display: "flex",
  //     flexDirection: "row",
  //     color: "red",
  //     "&$checked": {
  //       color: "blue",
  //     },
  //   },
  //   clearbtn: {
  //     display: "flex",
  //     justifyContent: "center",
  //     height: 130,
  //     borderRadius: 10,
  //   },
  // },
});

// CARD INSERT STYLE

/* export const cardColors = {
  cardBackground: "white",
  cardText: colors.primaryMain,
  cardAddDbBackground: "white",
};

export const cardStyle = {
  marginTop: 5,
  marginRight: 5,
  marginLeft: 5,
  backgroundColor: cardColors.cardBackground,
  color: cardColors.cardText,
  border: "2px solid rgba(0, 0, 0, 0)",
  borderRadius: 3,
  boxShadow: "1px 2px 9px -2px rgba(0,0,0,0.24)",
};

export const cardStyleAddDb = {
  marginTop: -1,
  marginRight: 5,
  marginLeft: 5,
  marginBottom: 5,
  backgroundColor: cardColors.cardAddDbBackground,
  color: cardColors.cardText,
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 0px 5px 5px",
  boxShadow: "0px 2px 5px -4px rgba(0,0,0,0.50)",
};
 */

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  hero: {
    minHeight: "50vh",
    minWidth: "100vw",
    backgroundColor: "gray"
  },
  heroImg: {
    height: "auto",
    width: "100%"
  },
  containerContent: {
    position: "absolute",
    right: "5vw",
    top: "30vh",
    width: "40vw",
    color: "#ff6347",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      margin: "auto",
      position: "relative",
      top: "25em"
    }
  },
  textPri: {
    padding: "1em",
    border: "1px solid tomato",
    width: "max-content",
    display: "block",
    color: "#ff2700",
    textDecoration: "none",
    marginTop: "1em"
  },
  textP: {
    width: "25vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw"
    }
  },
  imgHero: {
    position: "absolute",
    top: "20vh",
    left: "13%",
    [theme.breakpoints.down("sm")]: {
      top: "10vh"
    }
  },
  containerContent1: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "100vh"
  },
  containerContent2: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "80vh",
    color: "white",
    background: "linear-gradient(to right, #fc4a1a, #f7b733)"
  },
  text: {
    position: "absolute",
    bottom: "30%",
    right: "25%",
    [theme.breakpoints.down("sm")]: {
      bottom: "8%"
    }
  },
  h3: {
    fontSize: "22px",
    lintHeight: "19.8px",
    marginBottom: "10px",
    letterSpacing: "1px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  h4: {
    fontSize: "16px",
    lintHeight: "19.8px",
    marginBottom: "10px",
    letterSpacing: "2px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  containerContent3: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: "white",
    color: "black"
  },
  text2: {
    position: "absolute",
    bottom: "30%",
    left: "10%"
  },
  h4_2: {
    fontSize: "16px",
    lintHeight: "19.8px",
    marginBottom: "10px",
    marginTop: "10px",
    letterSpacing: "2px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    width: "20em"
  },
  containerContent4: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "80vh",
    backgroundColor: "#7bc342"
  },
  footer: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "80vh",
    backgroundColor: "white",
    color: "#777"
  }
});

export default styles;

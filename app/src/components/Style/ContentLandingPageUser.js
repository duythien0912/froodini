const styles = theme => ({
  content1: {
    height: "115vw",
    width: "100vw",
    backgroundColor: "#3D3D42",
    color: "white",
    position: "relative",
    maxHeight: "400px"
  },
  FroodiniLogo: {
    top: "-7em",
    left: 0,
    width: "228px",
    right: 0,
    height: 251,
    margin: "auto",
    bottom: 0,
    display: "block",
    position: "absolute",
    flex: 1,
  },
  textContent1: {
    textAlign: "center",
    position: "absolute",
    margin: "0 30px",
    bottom: "90px",
    fontWeight: 500,
    lineHeight: "16px",
    color: "#FFFFFF",
    width: "-webkit-fill-available",
    fontSize: "14px"
  },
  borderColor: {
    height: "10px",
    width: "100vw",
    backgroundColor: "#ACC95B",
    position: "relative",
    marginBottom: "100px"
  },
  eclip: {
    margin: 0,
    height: "134px",
    width: "134px",
    backgroundColor: "transparent",
    borderRadius: "50%",
    boxShadow: "0 4px 4px 0 #0000004d",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden"
  },
  avata: {
    width: "134px",
    position: "absolute",
    bottom: "0",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, 25%)"
  },
  content2: {
    textAlign: "center",
    paddingLeft: "45px",
    paddingRight: "45px"
  },
  textPItalic: {
    width: "100%",
    margin: "20px auto 30px auto",
    textAlign: "start",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "1px",

    [theme.breakpoints.up(420)]: {
      textAlign: "center"
    }
  },
  divtextp2: {
    position: "relative"
  },
  description: {
    textAlign: "start",
    fontSize: "12px",
    lineHeight: "14px",
    fontStyle: "Italic",
    letterSpacing: "1px",

    [theme.breakpoints.up(420)]: {
      textAlign: "center"
    }
  }
});
export default styles;

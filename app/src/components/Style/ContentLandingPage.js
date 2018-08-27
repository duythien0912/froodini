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
    height: "251px",
    width: "228px",
    display: "block",
    margin: "auto",
    position: "absolute",
    top: "-7em",
    left: 0,
    right: 0,
    bottom: 0
  },
  textContent1: {
    textAlign: "center",
    position: "absolute",
    margin: "18px 0",
    // [theme.breakpoints.down('xs')]: {
    //   margin: "3px 0",
    // },
    bottom: "107px",
    left: "50%",
    //marginRight: "-50%",
    transform: "translate(-50%, 0%)",
    fontWeight: 500,
    lineHeight: "16px",
    color: "#FFFFFF",
    width: "80vw",
    fontSize: "14px",
    [theme.breakpoints.down('xs')]: {
      bottom: "94px",
    }
  },
  borderColor: {
    height: "10px",
    width: "100vw",
    backgroundColor: "#ACC95B",
    position: "relative",
    marginBottom: "120px"
  },
  eclip: {
    margin: 0,
    height: "30vw",
    width: "30vw",
    maxWidth: "180px",
    maxHeight: "180px",
    minWidth: "150px",
    minHeight: "150px",
    backgroundColor: "#F7F7F7",
    borderRadius: "50%",
    boxShadow: "0 4px 4px 0 #0000004d",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer"
  },
  camera: {
    height: "65px",
    width: "65px",
    position: "absolute",
    bottom: "0",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, 0)"
  },
  hr: {
    background: "rgba(0, 0, 0, 0.8)",
    height: "0.2vw",
    width: "90%",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  eclipP: {
    position: "absolute",
    top: "25%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontStyle: "Italic",
    fontWeight: 400,
    color: "#545454",
    fontSize: "10px"
  }
});

export default styles;

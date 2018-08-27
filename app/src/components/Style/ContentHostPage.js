const styles = theme => ({
  coffee: {
    position: "absolute",
    height: "auto",
    width: "80px",
    right: "19px",
    bottom: "50vh"
  },
  container: {
    position: "relative",
    minWidth: "100vw",
    minHeight: "100vh",
    fontFamily: "Roboto",
    fontStyle: "Regular",
    fontSize: "36px",
    lineHeight: "42px",
    textAlign: "Center"
  },
  content1: {
    position: "absolute",
    top: "0",
    minWidth: "100vw",
    minHeight: "50vh",
    borderBottom: "1px solid #8A8A8A",
    align: "outside",
    cursor: "pointer"
  },
  content2: {
    position: "absolute",
    bottom: "0",
    minWidth: "100vw",
    minHeight: "50vh",
    cursor: "pointer"
  },
  text: {
    lineHeight: "50vh",
    color: "black"
  }
});

export default styles;

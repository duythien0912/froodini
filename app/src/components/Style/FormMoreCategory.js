const styles = theme => ({
  detail: {
    position: "absolute",
    right: "100%",
    transform: "translate(50%)",
    bottom: 0
  },
  detail2: {
    position: "absolute",
    right: 0,
    transform: "translate(50%)",
    bottom: 0
  },
  p1: {
    color: "#000000",
    width: "85vw",
    marginBottom: "20px"
  },
  p2: { color: "#000000", marginBottom: "15px" },
  p3: { color: "#000000", marginBottom: "15px" },
  form: {
    width: "min-content",
    margin: "auto"
  },
  forminput: {
    backgroundColor: "#EBEBEB",
    height: "30px",
    border: "none",
    width: "80vw",
    "&::placeholder": {
      color: "#545454"
    },
    paddingLeft: "1em",
    marginTop: "1em",
    marginBottom: "1em",
    fontFamily: "Roboto"
  },
  formArea: {
    backgroundColor: "#EBEBEB",
    height: "82px",
    border: "none",
    width: "80vw",
    "&::placeholder": {
      color: "#545454",
      marginTop: 3
    },
    paddingLeft: "1em",
    marginTop: "1em",
    marginBottom: "1em",
    fontFamily: "Roboto"
  },
  formsubmit: {
    marginTop: "30px",
    width: "30vw",
    height: "60px",
    backgroundColor: "#ACC95B",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    borderRadius: "0",
    float: "right"
  },
  buttonProgress: {
    color: "#acc95b",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});
export default styles;

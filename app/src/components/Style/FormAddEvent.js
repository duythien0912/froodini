const styles = theme => ({
  formdiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    flexWrap: "wrap"
  },
  errorLineInput: {
    width: "100%",
    textAlign: "center"
  },
  forminput: {
    //backgroundColor: "#EBEBEB",
    borderBottom: "1px solid rgba(0, 0, 0, 0.20)",
    height: "30px",
    border: "none",
    width: "60vw",
    "&::placeholder": {
      color: "#545454",//"rgba(0, 0, 0, 0.20)",
      fontStyle: "italic",
      fontSize: "12px",
      lineHeight: "14px",
    },
    paddingLeft: "1em"
  },
  formP: {
    fontSize: "12px",
    fontStyle: "italic",
    color: "#545454",
    marginTop: "15px",
    lineHeight: "14px",
    textAlign: "center"
  },
  formbutton: {
    width: "75vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    marginBottom: "30px",
    height: "60px",
    backgroundColor: "#ACC95B",
    border: "none",
    color: "#FFFFFF",
    cursor: "pointer",
    borderRadius: "0",
    display: "block",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 14px -1px",
    position: "relative"
  },
  iconButton: {
    position: "absolute",
    right: "15px",
    fontSize: "16px"
  },
  textPItalic: {
    width: "70vw",
    margin: "20px auto 30px auto",
    borderLeft: "2px solid #545454b8"
  },
  content2: {
    textAlign: "center"
  },
  divtextp2: {
    position: "relative"
  },
  textPItalic2: {
    marginBottom: "2em",
    fontStyle: "Italic",
    position: "absolute",
    right: "17vw",
    top: "-55px"
  },
  hr: {
    width: "6.5vw",
    borderColor: "#3D3D42",
    borderWidth: "1px 0 0 0"
  },
  p1: {
    color: "black",
    marginTop: "4vh",
    marginBottom: "6vh",
    fontWeight: 500,
  },
  p: {
    color: "black",
    fontSize: 12,
    fontWeight: 450,
    lineHeight: "14px"
  },
  ul: {
    listStyle: "decimal",
    marginBottom: "6vh"
  },
  li: {
    width: "70vw",
    margin: "auto",
    textAlign: "start",
    marginBottom: "2vh",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 'bold'
  },
  info2: {
    width: "70vw",
    margin: "auto",
    marginBottom: "10vh",
    marginTop: "6vh"
  },
  p2: {
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "center"
  }
});

export default styles;

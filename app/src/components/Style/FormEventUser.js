const styles = theme => ({
  formdiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px"
  },
  formdivUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    marginTop: "17px",
    width: "50vw",
    margin: "0 auto",
    justifyContent: "start",
    wordBreak: "break-all",
    [theme.breakpoints.down(420)]: {
      marginLeft: 0,
      position: "relative",
      left: "-10px"
    }
  },
  forminput: {
    backgroundColor: "#EBEBEB",
    height: "30px",
    border: "none",
    width: "60vw",
    "&::placeholder": {
      color: "#545454"
    },
    paddingLeft: "1em"
  },
  formP: {
    fontSize: "12px",
    fontStyle: "italic",
    color: "#545454",
    marginTop: "15px"
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
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 8px 14px -1px"
  },
  iconButton: {
    position: "absolute",
    right: "15px",
    fontSize: "16px"
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
    fontWeight: 500
  },
  p: {
    color: "black",
    fontSize: 12,
    fontWeight: 450
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
  }
});
export default styles;

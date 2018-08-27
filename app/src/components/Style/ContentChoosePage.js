const styles = theme => ({
  content1: {
    minHeight: '100vh',
    minWidth: '100%',
    backgroundColor: '#f7f7f7',
    color: '#545454',
    paddingTop: 40
  },
  h1: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#000000',
    margin: 'auto',
    width: 'fit-content',
    padding: 19,
    marginBottom: '30px'
  },
  flex: {
    display: 'flex',
    flex: 1,
    paddingBottom: '30px',
    position: 'relative',
    flexWrap: 'wrap'
  },
  imgflex: {
    flexBasis: '50%',
    position: 'relative',
    height: 'fit-content',
    marginBottom: '2em'
  },
  imgflexChecked: {
    flexBasis: '50%',
    position: 'relative',
    height: 'fit-content'
    // marginBottom: "-15em",
    // [theme.breakpoints.down('md')]: {
    //   marginBottom: "-8em",
    // },
    // [theme.breakpoints.down('sm')]: {
    //   marginBottom: "-4em",
    // },
    // [theme.breakpoints.down('xs')]: {
    //   marginBottom: "8em",
    // },
  },
  imgDiv: {
    margin: 'auto',
    width: 'min-content'
  },
  img: {
    height: '33vw',
    width: '33vw',
    borderRadius: '50%',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  imgPlus: {
    height: '33vw',
    width: '33vw',
    borderRadius: '50%',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden',
    transform: 'translate(0, -12.3px)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(0, -14px)'
    }
  },
  img2: {
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  pPlus: {
    fontSize: '40vw',
    fontFamily: "'Sacramento', cursive",
    lineHeight: '33vw',
    marginTop: '7vw',
    transform: 'translate(0, 12%)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(0, 12%)'
    }
  },
  FlexPlus: {
    background: 'white',
    width: '33vw',
    height: '33vw',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)'
  },
  pflex: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: 12
  },
  fade: {},
  detail: {
    position: 'absolute',
    left: '50vw',
    transform: 'translate(-50%)'
  },
  detail1: {
    position: 'absolute',
    left: 0,
    transform: 'translate(-50%)'
  }
});
export default styles;

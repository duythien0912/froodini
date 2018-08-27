const styles = theme => ({
  content1: {
    backgroundColor: '#f7f7f7',
    color: '#545454'
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
    paddingTop: '10vw',
    position: 'relative',
    flexWrap: 'wrap'
  },
  imgflex: {
    flexBasis: '50%',
    position: 'relative',
    height: 'fit-content',
    marginBottom: '20vmin',
    transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  imgDiv: {
    margin: 'auto',
    width: 'fit-content'
  },
  img: {
    height: '33vw',
    width: '33vw',
    borderRadius: '50%',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  imgCrane: {
    height: '33w',
    width: '33vw',
    borderRadius: '50%',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden',
    transform: 'translate(0px, -3.75px)'
  },
  imgMore: {
    height: '33w',
    width: '33vw',
    borderRadius: '50%',
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    overflow: 'hidden',
    transform: 'translate(0, -4px)'
  },
  pPlus: {
    fontSize: 144,
    fontFamily: "'Sacramento', cursive",
    position: 'relative',
    top: 15
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
    boxShadow: '5px 6px 11px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden'
  },
  pflex: {
    textAlign: 'center',
    marginTop: '20px'
  },
  fade: {},
  imgHero: {
    maxWidth: '100%'
  },
  borderColor: {
    height: '10px',
    width: '100%',
    backgroundColor: '#ACC95B',
    position: 'relative',
    top: '-10px'
  },
  Formchoose: {
    height: '60px',
    borderBottom: '1px solid #BABABA',
    position: 'relative',
    cursor: 'pointer'
  },
  contactImg: {
    width: '10vw',
    position: 'absolute',
    top: '30px',
    left: '10%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '60px'
  },
  textForm: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  arrowDown: {
    border: 'solid #545454',
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: '5px',
    position: 'absolute',
    top: '26px',
    right: '60%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) rotate(45deg)'
  },
  bringForm: {
    position: 'absolute',
    left: '100%',
    transform: 'translate(-50%)',
    bottom: 10,
    width: '80vw',
    background: '#f7f7f7'
  },
  bringFormOdd: {
    position: 'absolute',
    left: '0',
    transform: 'translate(-50%)',
    bottom: 10,
    width: '80vw',
    background: '#f7f7f7'
  },
  formbutton: {
    width: '35vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
    height: '60px',
    backgroundColor: '#ACC95B',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    borderRadius: '0',
    display: 'block',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 14px -1px',
    position: 'relative'
  },
  img2: {
    position: 'relative',
    left: 0,
    boxShadow: 'none',
    backgroundColor: '#0000004d',
    height: '33vw',
    width: '33vw',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    transform: 'translate(0, -5.5px)'
  },
  paper: {
    margin: theme.spacing.unit
  }
});
export default styles;

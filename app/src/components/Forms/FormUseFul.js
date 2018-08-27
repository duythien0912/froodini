import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import { connect } from '../store';
import styles from '../Style/FormUseFul';
import check from '../../img/check.png';

class FormUseFul extends Component {
  state = {
    itemState: null,
    heightItem: 0
  };
  componentDidMount = async () => {
    await this.props.actions.getItem();
  };
  onClickImg = itemState => {
    this.setState({
      itemState
    });
    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ heightItem });
  };

  onClickMore = () => {
    this.setState({
      itemState: null
    });
  };
  render() {
    const { itemState, heightItem } = this.state;
    const { item, classes } = this.props;
    return (
      <div>
        <div className={classes.flex}>
          {item.map(
            (data, i) =>
              i % 2 === 0 ? (
                <div
                  key={`${data._id}`}
                  className={classes.imgflex}
                  ref={divElement => {
                    this.divElement = divElement;
                  }}
                  style={
                    itemState === `itemState${i}`
                      ? { height: heightItem + 200 }
                      : {}
                  }
                >
                  <div
                    className={classes.imgDiv}
                    onClick={() => this.onClickImg(`itemState${i}`)}
                    role="presentation"
                  >
                    <img
                      src={data.picture}
                      alt="dish2"
                      className={classes.img}
                      ref={imgItemElement => {
                        this.imgItemElement = imgItemElement;
                      }}
                    />
                    <p className={classes.pflex}>{data.header}</p>
                  </div>
                  <div
                    ref={divItemElement => {
                      this.divItemElement = divItemElement;
                    }}
                  >
                    {itemState === `itemState${i}` ? (
                      <div>
                        <div>
                          <img
                            src={check}
                            alt="check"
                            className={`${classes.img} ${
                              classes.img2
                            }`}
                            style={{
                              bottom: this.state.heightItem + 38,
                              height: "33.1vw",
                              width: "33.1vw",
                            }}
                            onClick={this.onClickMore}
                            role="presentation"
                          />
                          <hr
                            style={{
                              position: 'relative',
                              bottom:
                                this.state.heightItem * 4 / 3 + 25,
                              left: 0,
                              width: this.state.heightItem / 3
                            }}
                          />
                        </div>

                        <div
                          className={classes.bringForm}
                          style={{ top: this.state.heightItem + 50 }}
                        >
                          <p>{data.description}</p>
                          <br />

                          <p>
                            {data.showItemPrice ? data.price : ''}
                          </p>
                          <br />

                          <a
                            href={data.link ? data.link : '#0'}
                            className={classes.formbutton}
                            style={{
                              lineHeight: '50px',
                              textAlign: 'center',
                              marginRight: '0',
                              boxShadow: 'none',
                              fontSize: '12px',
                              height: '50px'
                            }}
                            target="_blank"
                          >
                            {data.buttonText}
                          </a>
                          <br />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              ) : (
                <div
                  key={`${data._id}`}
                  className={classes.imgflex}
                  ref={divElement => {
                    this.divElement = divElement;
                  }}
                  style={
                    itemState === `itemState${i}`
                      ? { height: heightItem + 200 }
                      : {}
                  }
                >
                  <div
                    className={classes.imgDiv}
                    onClick={() => this.onClickImg(`itemState${i}`)}
                    role="presentation"
                  >
                    <img
                      src={data.picture}
                      alt="dish2"
                      className={classes.img}
                      ref={imgItemElement => {
                        this.imgItemElement = imgItemElement;
                      }}
                    />
                    <p className={classes.pflex}>{data.header}</p>
                  </div>
                  <div
                    ref={divItemElement => {
                      this.divItemElement = divItemElement;
                    }}
                  >
                    {itemState === `itemState${i}` ? (
                      <div>
                        <div>
                          <img
                            src={check}
                            alt="check"
                            className={`${classes.img} ${
                              classes.img2
                            }`}
                            style={{
                              bottom: this.state.heightItem + 37
                            }}
                            onClick={this.onClickMore}
                            role="presentation"
                          />
                          <hr
                            style={{
                              position: 'relative',
                              bottom:
                                this.state.heightItem * 4 / 3 + 25,
                              left: 0,
                              width: this.state.heightItem / 3
                            }}
                          />
                        </div>

                        <div
                          className={classes.bringFormOdd}
                          style={{ top: this.state.heightItem + 50 }}
                        >
                          <p>{data.description}</p>
                          <br />

                          <p>
                            {data.showItemPrice ? data.price : ''}
                          </p>
                          <br />

                          <a
                            href={data.link ? data.link : '#0'}
                            className={classes.formbutton}
                            style={{
                              lineHeight: '50px',
                              textAlign: 'center',
                              marginRight: '0',
                              boxShadow: 'none',
                              fontSize: '12px',
                              height: '50px'
                            }}
                            target="_blank"
                          >
                            {data.buttonText}
                          </a>
                          <br />
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ item: state.item }))(
  withStyles(styles)(FormUseFul)
);

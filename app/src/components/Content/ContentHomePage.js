import React from "react";
import { withStyles } from "material-ui/styles";
import styles from "../Style/ContentHomePage";

function ContentHomePage(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.containerContent1}>
        <div className={classes.imgHero}>
          <img
            className="imgHero"
            alt="imghero"
            src="https://i.pinimg.com/564x/50/f5/78/50f5787e384a870306695ead730db247.jpg"
          />
        </div>
        <div className="mobiContent">
          <div className={classes.containerContent}>
            <h1>sample for Oliver</h1>
            <p className={classes.textP}>this is sample for oliver.</p>
            <a href="#0" className={classes.textPri}>
              {" "}
              Get start{" "}
            </a>
          </div>
        </div>
      </div>
      <div className={classes.containerContent2}>
        <div className="imgContainerContent2">
          <img
            alt="imgContainerContent2"
            href="#0"
            src="https://i.pinimg.com/564x/3e/45/8a/3e458a85445a469e004afafdf4b429bf.jpg"
          />
        </div>

        <div className={classes.text}>
          <h3 className={classes.h3}>Being unique is the preference</h3>
          <h4 className={classes.h4}>Lorem ipsum dolor sit .</h4>
        </div>
      </div>
      <div className={classes.containerContent3}>
        <div className="imgContainerContent3">
          <img
            alt="imgContainerContent3"
            href="#0"
            src="https://i.pinimg.com/564x/f0/4a/21/f04a218b9749944725ccc24c8934efdc.jpg"
          />
        </div>

        <div className={classes.text2}>
          <h3 className={classes.h3}>Voluptate, error quos.</h3>
          <h4 className={classes.h4_2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, eaque minus. Mollitia illo incidunt minima quos. Alias
            similique iusto pariatur. Dolores velit vero, illum tenetur debitis
            laborum eius nesciunt suscipit?
          </h4>
        </div>
      </div>
      <div className={classes.containerContent4}>
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="single-contact col-lg-6 col-md-8">
              <h2 className="text-white">
                Send Us <span>Message</span>
              </h2>
              <p className="text-white">
                Most people who work in an office environment, buy computer
                products.
              </p>
            </div>
          </div>
          <form
            id="myForm"
            action="mail.php"
            method="post"
            className="contact-form"
          >
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <input
                  name="fname"
                  placeholder="Enter your name"
                  className="common-input mt-20"
                  required
                  type="text"
                />
              </div>
              <div className="col-lg-5">
                <input
                  name="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  className="common-input mt-20"
                  required
                  type="email"
                />
              </div>
              <div className="col-lg-10">
                <textarea
                  className="common-textarea mt-20"
                  name="message"
                  placeholder="Messege"
                  required
                />
              </div>
              <div className="col-lg-10 d-flex justify-content-end">
                <button className="primary-btn white-bg d-inline-flex align-items-center mt-20">
                  <span className="mr-10">Send Message</span>
                  <span className="lnr lnr-arrow-right" />
                </button>{" "}
                <br />
              </div>
              <div className="alert-msg" />
            </div>
          </form>
        </div>
      </div>
      <div className={classes.footer}>
        <div>
          <div className="container">
            <div className="row pt-60">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h6 className="text-uppercase mb-20">Top Product</h6>
                  <ul className="footer-nav">
                    <li>
                      <a href="#0">Managed Website</a>
                    </li>
                    <li>
                      <a href="#0">Manage Reputation</a>
                    </li>
                    <li>
                      <a href="#0">Power Tools</a>
                    </li>
                    <li>
                      <a href="#0">Marketing Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h6 className="text-uppercase mb-20">Navigation</h6>
                  <ul className="footer-nav">
                    <li>
                      <a href="#0">Home</a>
                    </li>
                    <li>
                      <a href="#0">Main Features</a>
                    </li>
                    <li>
                      <a href="#0">Offered Services</a>
                    </li>
                    <li>
                      <a href="#0">Latest Portfolio</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h6 className="text-uppercase mb-20">Compare</h6>
                  <ul className="footer-nav">
                    <li>
                      <a href="#0">Works &amp; Builders</a>
                    </li>
                    <li>
                      <a href="#0">Works &amp; Wordpress</a>
                    </li>
                    <li>
                      <a href="#0">Works &amp; Templates</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h6 className="text-uppercase mb-20">Quick About</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consecteturadipisicin gelit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p>
                    +00 012 6325 98 6542 <br />
                    support@colorlib.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-text m-0">
              Copyright ©<script>
                document.write(new Date().getFullYear());
              </script>2018 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(ContentHomePage);

import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <footer className="footer_main">
        <div className="container-fluid">
          <div className="row pt-md-5 pt-4 pb-md-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer_box">
                <a href="javscript:;">
                  <img
                    className="footer_logo"
                    src="assets/img/OfferYard-White.png"
                    alt=""
                  />
                </a>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique obcaecati libero ratione molestiae vel quidem ipsum,
                  eligendi ea sapiente esse?
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-4 mb-4 ps-lg-5">
              <div className="footer_box ps-xl-5">
                <h4>Costomer Services</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="contact-us.html">Contact us</a>
                  </li>

                  <li>
                    <a href="my-orders.html">My Orders</a>
                  </li>
                  <li>
                    <a href="my-wallet.html">My Wallet</a>
                  </li>
                  <li>
                    <a href="inbox.html">Notifications</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-4 mb-4 ps-lg-5">
              <div className="footer_box ps-xl-5">
                <h4>Help</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="supports-us.html">Supports Us</a>
                  </li>
                  <li>
                    <a href="settings.html">Settings</a>
                  </li>
                  <li>
                    <a href="faqs.html">FAQ</a>
                  </li>
                  <li>
                    <a href="help.html">Help</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-4 mb-4 ps-lg-5">
              <div className="footer_box ps-xl-5">
                <h4>Policy</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="return-policy.html">Return Policy</a>
                  </li>
                  <li>
                    <Link to="/term&condition">Terms Of Conditions</Link>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pb-md-5 pb-4">
            <div className="col-auto">
              <a className="appdownload_btn" href="javscript:;">
                <img src="assets/img/play-store.png" alt="" />
              </a>
            </div>
            <div className="col-auto">
              <a className="appdownload_btn" href="javscript:;">
                <img src="assets/img/app-store.png" alt="" />
              </a>
            </div>
          </div>
          <div className="row copy-right mx-0 py-md-3 py-3 border-top align-items-center">
            <div className="col-md-6 text-md-start text-center mb-md-0 mb-3">
              <p>Copyright 2022 OfferYard All rights reserved.</p>
            </div>
            <div className="col-md-6 social_icons text-md-end text-center">
              <a href="javascript:;">
                <img src="assets/img/facebook.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/twitter.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/snapchat.png" alt="" />
              </a>
              <a href="javascript:;">
                <img src="assets/img/instagram.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          background: "#FF3F55",
          borderRadius: "50%",
          height: "45px",
          width: "45px",
          zIndex: "999",
        }}
      />
    </>
  );
}

export default Footer;

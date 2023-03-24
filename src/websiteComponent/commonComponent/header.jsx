import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import i18next from "i18next";

function Header() {
  const [currentLangCode, setCurrentLangCode] = useState(
    Cookies.get("i18next") || "en"
  );

  console.log(currentLangCode);

  useEffect(() => {
    if (currentLangCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLangCode]);

  const showNotify = () => {
    const element = document.getElementById("show");

    if (element.className == "Inbox_drop_tab") {
      element.className = " Inbox_drop_tab show_box";
    } else {
      element.className = "Inbox_drop_tab";
    }
  };

  return (
    <>
      <header className="header_main shadow">
        <div className="container-fluid px-xl-4 px-lg-2 px-md-3">
          <div className="row flex-md-nowrap align-items-center justify-content-between">
            <div className="col-auto header_box position-relative">
              <Link className="header_logo" to="/">
                <img src="assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-lg-6 col">
              <div className="row align-items-center">
                <div className="col">
                  <div className="header_search">
                    <form className="row mx-md-0" action="">
                      <div className="form-group col pe-md-0">
                        <input
                          type="search"
                          className="form-control shadow-none border"
                          name=""
                          id=""
                          placeholder="Search for products, Brands and more"
                        />
                      </div>
                      <div className="col-auto ps-0">
                        <button className="Serch_btn">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-auto ps-0 d-md-block d-none">
                  <Link
                    className="change_language"
                    to=""
                    onClick={() => {
                      i18next.changeLanguage(
                        currentLangCode === "en" ? "ar" : "en"
                      );
                      setCurrentLangCode(
                        currentLangCode === "en" ? "ar" : "en"
                      );
                    }}
                  >
                    <img
                      src={
                        currentLangCode === "en"
                          ? "assets/img/saudi_flag1.png"
                          : "assets/img/united-kingdom.png"
                      }
                      alt=""
                    />{" "}
                    {currentLangCode === "en" ? "AR" : "EN"}
                  </Link>
                </div>
                <div className="col-auto position-relative d-md-block d-none">
                  <div className="dropdown select_city">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="assets/img/location.png" alt="" /> Yanbu
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="location.html">
                          Alsinaiyah
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="location.html">
                          ipsum
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="location.html">
                          jkahskd
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-auto col-auto">
              <div className="row w-md-100 align-items-center justify-content-end ms-md-auto">
                <div className="col-auto d-md-flex d-none a_border align-items-center pe-0">
                  <a className="anchor_links" href="offers.html">
                    <i className="fal fa-cart-arrow-down"></i>
                  </a>
                  <div className="notification_dropdown position-relative">
                    <button className="bell_drop" onClick={() => showNotify()}>
                      <i className="fal fa-bell">
                        <span>4</span>
                      </i>
                    </button>
                    <div className="Inbox_drop_tab" id="show">
                      <ul
                        className="nav nav-tabs mb-3 border-0"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Message
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Notifications
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <a
                            className="row notification_box align-items-center text-start"
                            href="chat.html"
                          >
                            <div className="time_notification">
                              <i className="far fa-clock"></i> Just Now
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img1.jpg" alt="" />
                                <span className=""></span>
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>Mohd. Afzal</h2>
                                <p>Hello How are you? </p>
                                <p>I just wanna ask you about</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product2.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="chat.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> Just Now
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>
                                  Naved{" "}
                                  <img src="assets/img/verified.png" alt="" />
                                </h2>
                                <p>Hello How are you? </p>
                                <p>I just wanna ask you about</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product1.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="chat.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> Just Now
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img3.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>Lily Joe</h2>
                                <p>Hello How are you? </p>
                                <p>I just wanna ask you about</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product3.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="chat.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> Just Now
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>
                                  Naved{" "}
                                  <img src="assets/img/verified.png" alt="" />
                                </h2>
                                <p>Hello How are you? </p>
                                <p>I just wanna ask you about</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product1.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="notification_btnss mt-2 mx-0 row"
                            href="inbox.html"
                          >
                            See All
                          </a>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <a
                            className="row notification_box align-items-center text-start"
                            href="inbox.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> Just Now
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img1.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>Mohd. Afzal</h2>
                                <p>Has sent you a purchase request.</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product2.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="inbox.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> 23 Min
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img2.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>
                                  Naved{" "}
                                  <img src="assets/img/verified.png" alt="" />
                                </h2>
                                <p>
                                  has uploded a new project, harry Up to get a
                                  great deal
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="inbox.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> 1 Hour ago
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img5.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>Mohd. Arbab</h2>
                                <strong>Congratulations..</strong>
                                <p>Your Purchase request is accepted</p>
                              </div>
                            </div>
                            <div className="col-auto info_img">
                              <img src="assets/img/product2.png" alt="" />
                            </div>
                          </a>
                          <a
                            className="row notification_box align-items-center text-start"
                            href="inbox.html"
                          >
                            <div className="time_notification">
                              <i className="fal fa-clock"></i> 2 Hour ago
                            </div>
                            <div className="col-auto pe-2">
                              <div className="notification_box_img">
                                <img src="assets/img/profile_img6.jpg" alt="" />
                              </div>
                            </div>
                            <div className="col px-1">
                              <div className="notification_box_content">
                                <h2>Mohd. Afzal</h2>
                                <p>Has sent you a purchase request.</p>
                              </div>
                            </div>
                          </a>
                          <a
                            className="notification_btnss mt-2 mx-0 row"
                            href="inbox.html"
                          >
                            See All
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto d-flex align-items-center">
                  <div className="dropdown post_offer ms-2">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fal fa-plus me-1"></i> Post an Offer
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" to="/post-offer-price">
                          <img src="assets/img/price_dropdown.svg" alt="" />
                          Price
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/post-offer-auction"
                        >
                          <img src="assets/img/auction_dropdown.svg" alt="" />
                          Auction
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/post-offer-free">
                          <img src="assets/img/free_dropdown.svg" alt="" />
                          Free
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="login_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="javscript:;"
                  >
                    <img src="assets/img/login.png" alt="" />
                  </a>
                  <a
                    className="profile_canvas"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample1"
                    aria-controls="offcanvasExample1"
                    href="javscript:;"
                  >
                    <img src="assets/img/profile_img1.jpg" alt="" />
                  </a>
                  <div
                    className="offcanvas offcanvas-end profile_main"
                    tabindex="-1"
                    id="offcanvasExample1"
                    aria-labelledby="offcanvasExampleLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        className="offcanvas-title"
                        id="offcanvasExampleLabel"
                      >
                        <img src="assets/img/logo1.png" alt="" />
                      </h5>
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <div className="row">
                        <div className="col-12 profile_main_head py-4">
                          <div className="profile_main_pic">
                            <img src="assets/img/profile_img1.jpg" alt="" />
                          </div>
                          <div className="profile_main_detailss">
                            <h2>
                              Mohd. Arbab{" "}
                              <img src="assets/img/verified.png" alt="" />
                            </h2>
                            <div className="ratee_part d-flex align-items-center justify-content-center mb-2 mt-2">
                              <div>
                                <div className="star_1" href="javasript:;">
                                  <i className="fas fa-star"></i>
                                </div>
                                <div className="star_1" href="javasript:;">
                                  <i className="fas fa-star"></i>
                                </div>
                                <div className="star_1" href="javasript:;">
                                  <i className="fas fa-star"></i>
                                </div>
                                <div className="star_1" href="javasript:;">
                                  <i className="fas fa-star"></i>
                                </div>
                                <div className="star_1" href="javasript:;">
                                  <i className="fal fa-star"></i>
                                </div>
                              </div>
                              <span>(250)</span>
                            </div>
                            <div className="profile_main_adress mb-3">
                              <span>
                                <img src="assets/img/join.png" alt="" />
                                Sep 25, 2020
                              </span>
                              <span>
                                <img src="assets/img/location.png" alt="" />
                                Yanbu Al Bahr, Medinah
                              </span>
                            </div>
                            <div className="row mx-0 followers_main my-3">
                              <div className="col-4 pe-2">
                                <a
                                  className="followers__box border"
                                  href="followers.html"
                                >
                                  <span className="d-block">6.4K</span>
                                  Followers
                                </a>
                              </div>
                              <div className="col-4 px-2">
                                <a
                                  className="followers__box border"
                                  href="following.html"
                                >
                                  <span className="d-block">786</span>
                                  Following
                                </a>
                              </div>
                              <div className="col-4 ps-2">
                                <a
                                  className="followers__box profile_qr border"
                                  href="qr-code.html"
                                >
                                  <div className="scan_icn">
                                    <img src="assets/img/qr_code.png" alt="" />
                                  </div>
                                  Scan
                                </a>
                              </div>
                            </div>
                            <div className="row mx-0 verified_main profile_other_details mt-3">
                              <div className="col-4">
                                <a href="javscript:;" className="verified_box">
                                  <div className="verified_box_img border">
                                    <img src="assets/img/Phone.png" alt="" />
                                    <div className="Verified_img">
                                      <img src="assets/img/Tick.png" alt="" />
                                    </div>
                                  </div>
                                  <span>
                                    Phone Number <br /> Verified
                                  </span>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  href="javscript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#otherdetails1"
                                  className="verified_box"
                                >
                                  <div className="verified_box_img border">
                                    <img src="assets/img/Email.png" alt="" />
                                    <div className="Verified_img">
                                      <img src="assets/img/Tick.png" alt="" />
                                    </div>
                                  </div>
                                  <span>
                                    Email Address <br /> Verified
                                  </span>
                                </a>
                              </div>
                              <div className="col-4">
                                <a
                                  href="javscript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#absher1"
                                  className="verified_box"
                                >
                                  <div className="verified_box_img border">
                                    <img src="assets/img/Absher.png" alt="" />
                                    <div className="Verified_img">
                                      <img src="assets/img/Tick.png" alt="" />
                                    </div>
                                  </div>
                                  <span>
                                    Absher <br /> Verified
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="profile_menus border">
                            <div className="profile_heads mt-2 mb-2">
                              Business Activies
                            </div>
                            <a
                              className="menus_single border-bottom"
                              href="my-wallet.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/my_wallet_icon.png"
                                  alt=""
                                />
                                <span>My Wallet</span>
                              </div>
                              <div className="menus_right">
                                <strong>12,746.98 SAR</strong>
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="offers.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/offers_icon.png" alt="" />
                                <div className="">
                                  <span>Offers</span>
                                  <div className="show_news">
                                    New Offers On 5 Items
                                  </div>
                                </div>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="bids-&-auctions.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/auction_icon.png" alt="" />
                                <div className="">
                                  <span>Bids & Auctions</span>
                                  <div className="show_news">
                                    Outbid On 2 Items
                                  </div>
                                </div>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="purchase-request.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/purchase_requests.png"
                                  alt=""
                                />
                                <div className="">
                                  <span>Purchase Request</span>
                                  <div className="show_news">3 Request</div>
                                </div>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="my-orders.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/my_orders_icon.png"
                                  alt=""
                                />
                                <span>My Orders</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="keep-me-posted-on.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/remind-later.png" alt="" />
                                <span>Keep Me Posted On</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>

                            <div className="profile_heads mt-4 mb-1">
                              My Account
                            </div>
                            <a
                              className="menus_single border-bottom"
                              href="my-profile.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/public_profile.png"
                                  alt=""
                                />
                                <span>My profile</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="favourite.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/favourite_menu.png"
                                  alt=""
                                />
                                <span>Favourite</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="settings.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/settings.png" alt="" />
                                <span>Settings</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="blocked-user.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/blocked_user_icon.png"
                                  alt=""
                                />
                                <span>Blocked Users</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="inbox.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/notifications.png"
                                  alt=""
                                />
                                <span>Notifications</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>

                            <div className="profile_heads mt-4 mb-1">
                              OfferYard Square
                            </div>
                            <a
                              className="menus_single border-bottom"
                              href="announcements.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/offerYard_announcements.png"
                                  alt=""
                                />
                                <span>OfferYard Anncuncements</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="share-your-thoughts.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/share_your_thoughts.png"
                                  alt=""
                                />
                                <span>Share Your Thoughts</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="supports-us.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/support_icon.png" alt="" />
                                <span>Support Us</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>

                            <div className="profile_heads mt-4 mb-1">
                              My Shop Center
                            </div>
                            <a
                              className="menus_single border-bottom"
                              href="my-shop-center.html"
                            >
                              <div className="menus_left d-flex align-items-start">
                                <img
                                  src="assets/img/shopcenter_icon.png"
                                  alt=""
                                />
                                <div className="">
                                  <span>My Shop Center</span>
                                  <div className="Shop_menuu">
                                    <strong>
                                      <img
                                        src="assets/img/YourShopName.png"
                                        alt=""
                                      />{" "}
                                      YourShopName
                                    </strong>
                                    <strong>
                                      <img
                                        src="assets/img/website.png"
                                        alt=""
                                      />{" "}
                                      https://offeryard.com/s/shopname
                                    </strong>
                                  </div>
                                </div>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>

                            <div className="profile_heads mt-4 mb-1">
                              Help Center
                            </div>
                            <a
                              className="menus_single border-bottom"
                              href="contact-us.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img
                                  src="assets/img/contact_us_icon.png"
                                  alt=""
                                />
                                <span>Contact Us</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="faqs.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/faq_s.png" alt="" />
                                <span>Faq's</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="help.html"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/help_icon.png" alt="" />
                                <span>Help</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                            <a
                              className="menus_single border-bottom"
                              href="javascript:;"
                            >
                              <div className="menus_left d-flex align-items-center">
                                <img src="assets/img/sign_out.png" alt="" />
                                <span>Sign Out</span>
                              </div>
                              <div className="menus_right">
                                <span>
                                  <i className="far fa-angle-right"></i>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade login_modal forms_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center">
                <div className="col-md-6 d-md-block d-none">
                  <div className="popup_commanimg border">
                    <div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img
                              src="assets/img/manage-your-orders.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>Manage your orders</strong>
                            <p>Track your orders, delivery and returns</p>
                          </div>
                        </div>
                      </div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img src="assets/img/transact-online.png" alt="" />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>
                              Transact online with buyers and sellers
                            </strong>
                            <p>
                              Check and respond to chats, replies, offers and
                              more
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img
                              src="assets/img/personalized-notifications.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>
                              Personalized notifications and alerts
                            </strong>
                            <p>
                              Get matching alerts for the products/services you
                              are looking for
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="forms_modal_content">
                    <div className="row">
                      <div className="col-md-12 heading_forms mb-4">
                        <h3>Welcome to OfferYard!</h3>
                        <span>Login to your account...</span>
                      </div>
                      <form action="" className="col-md-12">
                        <div className="form-group">
                          <label for="">Mobile Number</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Number"
                            id="number"
                            placeholder="+966 1230981239"
                          />
                        </div>
                        <div className="form-group">
                          <label for="">Password</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Password"
                            id="Password"
                            placeholder="8+ Charactors"
                          />
                        </div>
                        <div className="form-group forgot_password mb-md-3 mb-3">
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javascript:;"
                          >
                            Forgot Your Password?
                          </a>
                        </div>
                        <div className="form-group mb-4">
                          <button type="submit" className="comman_btns">
                            Sign In
                          </button>
                        </div>
                        <div className="form-group comman_text">
                          <span>
                            New to OfferYard? Create an account{" "}
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop1"
                              href="javascript:;"
                            >
                              SIGN UP
                            </a>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade login_modal forms_modal"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center">
                <div className="col-md-6 d-md-block d-none">
                  <div className="popup_commanimg border">
                    <div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img
                              src="assets/img/manage-your-orders.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>Manage your orders</strong>
                            <p>Track your orders, delivery and returns</p>
                          </div>
                        </div>
                      </div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img src="assets/img/transact-online.png" alt="" />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>
                              Transact online with buyers and sellers
                            </strong>
                            <p>
                              Check and respond to chats, replies, offers and
                              more
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row login_describe align-items-start">
                        <div className="col-auto">
                          <div className="login_describe_icon">
                            <img
                              src="assets/img/personalized-notifications.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-1">
                          <div className="login_describe_content">
                            <strong>
                              Personalized notifications and alerts
                            </strong>
                            <p>
                              Get matching alerts for the products/services you
                              are looking for
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="forms_modal_content">
                    <div className="row">
                      <div className="col-md-12 heading_forms mb-4">
                        <h3>Welcome to OfferYard!</h3>
                        <span>Register Your Account</span>
                      </div>
                      <form action="" className="col-md-12">
                        <div className="form-group">
                          <label for="">User Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ajay Sharma"
                          />
                        </div>
                        <div className="form-group">
                          <label for="">Mobile Number</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Number"
                            id="Number"
                            placeholder="+966 1230981239"
                          />
                        </div>
                        <div className="form-group">
                          <label for="">Password</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Password"
                            id="Password"
                            placeholder="8+ Charactors"
                          />
                        </div>
                        <div className="form-group custom_checkbox mb-4">
                          <input
                            type="checkbox"
                            className="d-none"
                            name="check"
                            id="check"
                          />
                          <label for="check">
                            {" "}
                            I agree to{" "}
                            <Link to="/term&condition">
                              Terms &amp; Conditions
                            </Link>
                          </label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="comman_btns">
                            Sign Up
                          </button>
                        </div>
                        <div className="form-group comman_text">
                          <span>
                            Already have an account?{" "}
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              href="javascript:;"
                            >
                              SIGN IN
                            </a>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade comman_modal_form"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-8">
                  <div className="comman_modal_heading">
                    <h2>Forgot Your Password</h2>
                    <p>
                      Reset Your Password by entring your <br /> registered
                      Mobile Number
                    </p>
                  </div>
                  <form className="forms_modal_content">
                    <div className="form-group mb-4">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="+966 1230981239"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <a
                        href="javscript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop3"
                        className="comman_btns"
                      >
                        Send OTP
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal_form"
        id="staticBackdrop3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-8">
                  <div className="comman_modal_heading">
                    <h2>OTP Verification</h2>
                    <p>
                      Please enter the OTP received on <br /> your Mobile Number
                    </p>
                  </div>
                  <form className="forms_modal_content otp_part">
                    <div className="form-group mb-3 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="time_js">
                        <span>01:34</span>
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop4"
                        href="javscript:;"
                        className="comman_btns"
                      >
                        Submit
                      </a>
                    </div>
                    <div className="form-group mb-0 comman_text">
                      <span>
                        Didn't receive the OTP?{" "}
                        <a href="javascript:;">Resend OTP</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal_form"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-8">
                  <div className="comman_modal_heading">
                    <h2>Reset Your Password</h2>
                    <p>Create a new password</p>
                  </div>
                  <form className="forms_modal_content">
                    <div className="form-group mb-3">
                      <input
                        className="form-control"
                        type="text"
                        name="newpassword"
                        id="newpassword"
                        placeholder="New Password"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        className="form-control"
                        type="text"
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder="Confirm New Password"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="comman_btns">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Email Address Modals  --> */}
      <div
        className="modal fade comman_modal_form otherdetails_modal"
        id="otherdetails1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-start">
                <div className="col-10">
                  <div className="comman_modal_heading">
                    <h2>Email Verify</h2>
                    <p>
                      A OTP will be sent to your email, please make sure to
                      write your email correctly.
                    </p>
                  </div>
                </div>
                <div className="col-10">
                  <form className="forms_modal_content">
                    <div className="form-group mb-4 text-start">
                      <label for="">Email Address</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="Email"
                        value="email@hotmail.com"
                      />
                    </div>
                    <div className="form-group mb-4">
                      <a
                        href="javscript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#otherdetails2"
                        className="comman_btns d-block"
                      >
                        Next
                      </a>
                    </div>
                    <div className="form-group mb-0 text-start">
                      <label for="">
                        Adding your email will build up trust among your
                        clients, and encourage them to do business with you.
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal_form otherdetails_modal"
        id="otherdetails2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-8">
                  <div className="comman_modal_heading">
                    <h2>OTP Verification</h2>
                    <p>
                      Please enter the OTP received on <br /> your email address
                    </p>
                  </div>
                  <form className="forms_modal_content otp_part">
                    <div className="form-group mb-3 d-flex justify-content-center">
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                      <input
                        className="form-control"
                        type="text"
                        maxlength="1"
                        name="number"
                        id="number"
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="time_js">
                        <span>01:34</span>
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#otherdetails3"
                        href="javscript:;"
                        className="comman_btns"
                      >
                        Submit
                      </a>
                    </div>
                    <div className="form-group mb-0 comman_text">
                      <span>
                        Didn't receive the OTP?{" "}
                        <a href="javascript:;">Resend OTP</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal_form otherdetails_modal"
        id="otherdetails3"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-center">
                <div className="col-10">
                  <div className="comman_modal_heading">
                    <img
                      className="congrts_img"
                      src="assets/img/congratulations_img.png"
                      alt=""
                    />
                    <h2>Congratulations!</h2>
                    <p>Your email email@hotmail.com is verified!</p>
                  </div>
                </div>
                <div className="col-12">
                  <a
                    data-bs-dismiss="modal"
                    href="javscript:;"
                    className="comman_btns"
                  >
                    Okay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Abshers Verified Modals  --> */}
      <div
        className="modal fade comman_modal_form otherdetails_modal"
        id="absher1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center justify-content-center text-start">
                <div className="col-10">
                  <div className="comman_modal_heading">
                    <h2>Absher Verify</h2>
                  </div>
                </div>
                <div className="col-10">
                  <form className="forms_modal_content">
                    <div className="form-group mb-4 text-start">
                      <label for="">Absher Name</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="Email"
                        value="Name"
                      />
                    </div>
                    <div className="form-group mb-4 text-start">
                      <label for="">ID / Iqama Number</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="Email"
                        value="983 710 93810983"
                      />
                    </div>
                    <div className="form-group mb-4 text-start">
                      <label for="">Date of Birth</label>
                      <input
                        className="form-control"
                        type="date"
                        name="date"
                        id="date"
                      />
                      <span className="important mt-2">
                        <div className="text-danger">*</div> You must be at
                        least 18 years old to use OfferYard
                      </span>
                    </div>
                    <div className="form-group mb-4">
                      <a href="javscript:;" className="comman_btns d-block">
                        Confirm Details
                      </a>
                    </div>
                    <div className="col-12 about_abshers position-relative">
                      <p>
                        OfferYard is integrated with Absher, and all the entered
                        informations will be saved to us, and wil not be
                        published or shared except by the official authrities if
                        it is officially requested.
                      </p>
                      <img src="assets/img/img_back.png" alt="" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Mobile_menus shadow">
        <a className="menus_main act active" href="index.html">
          <span className="Menu_icon">
            <img src="assets/img/Home_mobile.png" alt="" />
          </span>
          Home
        </a>
        <a className="menus_main act" href="inbox.html">
          <span className="Menu_icon">
            <img src="assets/img/Notification_mobile.png" alt="" />
          </span>
          Inbox
        </a>
        <div className="menus_main offerpost_btns">
          <span className="Menu_icon">
            <img className="cam_img" src="assets/img/Add_mobile.png" alt="" />
            <img
              className="cross_img"
              src="assets/img/Close-Square.png"
              alt=""
            />
          </span>
          Add
          <div className="post_offer_show">
            <div className="row w-100">
              <div className="col-4">
                <a className="offer_circle shadow" href="post-offer-price.html">
                  <div className="showimg_part">
                    <img src="assets/img/price.svg" alt="" />
                  </div>
                  <strong>Price</strong>
                </a>
              </div>
              <div className="col-4">
                <a
                  className="offer_circle shadow"
                  href="post-offer-auction.html"
                >
                  <div className="showimg_part">
                    <img src="assets/img/auction.svg" alt="" />
                  </div>
                  <strong>Auction</strong>
                </a>
              </div>
              <div className="col-4">
                <a className="offer_circle shadow" href="post-offer-free.html">
                  <div className="showimg_part">
                    <img src="assets/img/free.svg" alt="" />
                  </div>
                  <strong>Free</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a className="menus_main act" href="offers.html">
          <span className="Menu_icon">
            <img src="assets/img/Offers_mobile.png" alt="" />
          </span>
          Offers
        </a>
        <a
          className="menus_main act onclk"
          href="javascript:;"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample1"
          aria-controls="offcanvasExample1"
        >
          <span className="Menu_icon">
            <img src="assets/img/Profile_mobile.png" alt="" />
          </span>
          Profile
        </a>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import Header from "./commonComponent/header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./commonComponent/footer";

function Home() {
  return (
    <>
      <Header />
      <OwlCarousel
        className="banner_slider"
        autoplay={true}
        autoplayHoverPause={false}
        autoplayTimeout={4000}
        dots={false}
        autoHeight={true}
        loop={true}
        nav={true}
        items={1}
      >
        <div
          class="banner_section item"
          style={{ backgroundImage: "url(assets/img/01.jpg)" }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 banner_content">
                <h1>You can #Buy, #Sell, #Booking anything from here.</h1>
                <p>
                  Buy and sell everything from used cars to mobile phones and
                  computers, or search for property, jobs and more in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="banner_section item"
          style={{ backgroundImage: "url(assets/img/verification_bg.png)" }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 banner_content">
                <h1>You can #Buy, #Sell, #Booking anything from here.</h1>
                <p>
                  Buy and sell everything from used cars to mobile phones and
                  computers, or search for property, jobs and more in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="banner_section item"
          style={{ backgroundImage: "url(assets/img/01.jpg)" }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-9 banner_content">
                <h1>You can #Buy, #Sell, #Booking anything from here.</h1>
                <p>
                  Buy and sell everything from used cars to mobile phones and
                  computers, or search for property, jobs and more in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>

      <section className="category_product bg-light pb-md-0 pb-2 position-relative">
        <div className="row align-items-end py-lg-4 py-md-3 py-3 flex-md-nowrap mx-0 justify-content-md-between justify-content-end position-relative">
          <div className="col-lg-9 col-md-8 col-12 mb-md-0 mb-3">
            <OwlCarousel
              className="category_slider"
              autoplay={false}
              autoplayHoverPause={false}
              autoplayTimeout={2000}
              dots={false}
              autoHeight={true}
              autoWidth={true}
              loop={false}
              nav={true}
              items={8}
            >
              <a className="category-box item active" href="javscript:;">
                All
              </a>
              <a className="category-box item" href="javscript:;">
                Furnitures
              </a>
              <a className="category-box item" href="javscript:;">
                Vehicles
              </a>
              <a className="category-box item" href="javscript:;">
                General
              </a>
              <a className="category-box item" href="javscript:;">
                Electronics
              </a>
              <a className="category-box item" href="javscript:;">
                Weddings
              </a>
              <a className="category-box item" href="javscript:;">
                Boats & Jets
              </a>
              <a className="category-box item" href="javscript:;">
                Animals
              </a>
              <a className="category-box item" href="javscript:;">
                Free
              </a>
              <a className="category-box item" href="javscript:;">
                Golds & Gemstones
              </a>
              <a className="category-box item" href="javscript:;">
                Clothing & Shoes
              </a>
              <a className="category-box item" href="javscript:;">
                Motorcycles
              </a>
              <a className="category-box item" href="javscript:;">
                Bicycles
              </a>
              <a className="category-box item" href="javscript:;">
                Baby & Kids
              </a>
              <a className="category-box item" href="javscript:;">
                Care & Beauty
              </a>
              <a className="category-box item" href="javscript:;">
                Properties
              </a>
              <a className="category-box item" href="javscript:;">
                Stationery
              </a>
              <a className="category-box item" href="javscript:;">
                Services
              </a>
              <a className="category-box item" href="javscript:;">
                Construction
              </a>
              <a className="category-box item" href="javscript:;">
                Tickets
              </a>
            </OwlCarousel>
            <div
              id="sub_category"
              className="category_slider owl-carousel pt-md-3 pt-1"
            >
              <a className="category-box " href="javscript:;">
                iphone
              </a>
              <a className="category-box" href="javscript:;">
                oneplus
              </a>
              <a className="category-box" href="javscript:;">
                samsung
              </a>
              <a className="category-box" href="javscript:;">
                vivo
              </a>
              <a className="category-box" href="javscript:;">
                Oppo
              </a>
              <a className="category-box" href="javscript:;">
                Mi redmi
              </a>
              <a className="category-box" href="javscript:;">
                Nokia
              </a>
            </div>
            <div
              id="Brands_category"
              className="category_slider owl-carousel pt-md-3 pt-2"
            >
              <a className="category-box" href="javscript:;">
                iphone 14 promax
              </a>
              <a className="category-box" href="javscript:;">
                iphone 14 pro
              </a>
              <a className="category-box" href="javscript:;">
                iphone 14
              </a>
              <a className="category-box" href="javscript:;">
                iphone 13 promax
              </a>
              <a className="category-box" href="javscript:;">
                iphone 12 pro
              </a>
              <a className="category-box" href="javscript:;">
                iphone 11
              </a>
            </div>
            <div id="follow-category" className="follow-category">
              <div className="row bg-white mx-0 py-2 border rounded mt-3 shadow">
                <div className="col follow-category-left">
                  <span>
                    <img src="assets/img/Notification_bell.png" alt="" /> Follow
                    "Electronics - iPhone - iPhone 14 Pro Max"
                  </span>
                </div>
                <div className="col-auto">
                  <div className="check_toggle_new">
                    <input
                      type="checkbox"
                      name="check3"
                      id="check3"
                      className="d-none"
                    />
                    <label for="check3"></label>
                  </div>
                </div>
              </div>
            </div>

            <div className="location_mobileshow">
              <a href="location.html">
                <img src="assets/img/location.png" alt="" /> Yanbu AL Bahr, SA
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row justify-content-end flex-md-nowrap">
              <div id="years_category" className="col-auto show_years_part">
                <div className="col-auto">
                  <div className="product_short">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Years
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            2022
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2021
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2020
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2019
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2018
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            2017
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto ps-0">
                <div className="product_short">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort By
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Closest
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Newest
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price: Low To High
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Price: High To Low
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-auto ps-0">
                <a
                  className="filter_part"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                  href="javscript:;"
                >
                  <i className="fal fa-filter"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-end filter_canvas"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Filters
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <form className="product_single_left">
                <div className="accordion" id="accordionExample1">
                  <div className="accordion-item filter_design">
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Price
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body px-0 pt-3">
                        <div className="row">
                          <div className="col-12">
                            <div className="row align-items-center range_slider">
                              <div className="col form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Min"
                                />
                              </div>
                              <div className="col-auto">
                                <span className="center_text">to</span>
                              </div>
                              <div className="col form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Max"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item filter_design">
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="true"
                        aria-controls="collapse3"
                      >
                        Sort By
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body px-0 pt-3 pb-0">
                        <div className="row">
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="radio"
                              id="check5"
                              name="checkcom"
                            />
                            <label for="check5"> All</label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              checked
                              type="radio"
                              id="check6"
                              name="checkcom"
                            />
                            <label for="check6"> Price</label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="radio"
                              id="check7"
                              name="checkcom"
                            />
                            <label for="check7"> Auction</label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="radio"
                              id="check8"
                              name="checkcom"
                            />
                            <label for="check8"> Free</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item filter_design">
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="true"
                        aria-controls="collapse2"
                      >
                        Ratings
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body px-0 pt-3 pb-0">
                        <div className="row rating_box">
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="checkbox"
                              id="check1"
                              name="check1"
                            />
                            <label for="check1">
                              {" "}
                              4{" "}
                              <a href="javasript:;">
                                <i className="fas fa-star"></i>
                              </a>{" "}
                              & UP
                            </label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="checkbox"
                              id="check2"
                              name="check2"
                            />
                            <label for="check2">
                              {" "}
                              3{" "}
                              <a href="javasript:;">
                                <i className="fas fa-star"></i>
                              </a>{" "}
                              & UP
                            </label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              checked
                              type="checkbox"
                              id="check3"
                              name="check3"
                            />
                            <label for="check3">
                              {" "}
                              2{" "}
                              <a href="javasript:;">
                                <i className="fas fa-star"></i>
                              </a>{" "}
                              & UP
                            </label>
                          </div>
                          <div className="col-12 form-group checkbox_design">
                            <input
                              className="d-none"
                              type="checkbox"
                              id="check4"
                              name="check4"
                            />
                            <label for="check4">
                              {" "}
                              1{" "}
                              <a href="javasript:;">
                                <i className="fas fa-star"></i>
                              </a>{" "}
                              & UP
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row pt-4 pb-4">
                  <div className="col-6">
                    <a className="d-block comman_btns1" href="javscript:;">
                      Reset
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      className="d-block comman_btns text-center"
                      href="javscript:;"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-3 px-1">
          <div className="category_product_main pb-3">
            <div className="row product_width">
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="free-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product1.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_icon.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Freee_tag.png')",
                      }}
                    >
                      Free
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a className="comman_product_name" href="free-details.html">
                      <img src="assets/img/Gift_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="product-sold.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product2.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_done.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/sold_badge.png')",
                      }}
                    >
                      1,500 <span>SAR</span>
                    </div>
                    <a href="product-sold.html" className="sold_product">
                      <img src="assets/img/sold_logo.png" alt="" />
                    </a>
                  </div>
                  <div className="comman_product_bottom">
                    <a className="comman_product_name" href="product-sold.html">
                      <img src="assets/img/Price_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="auction-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product3.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_icon.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Priice_tag.png')",
                      }}
                    >
                      3,500 <span>SAR</span>
                    </div>
                    <div className="countdown">
                      <div className="counter_inner shadow">
                        <span className="time_main">
                          03
                          <br /> Day{" "}
                        </span>
                        <span className="time_main">
                          20
                          <br /> Hours
                        </span>
                        <span className="time_main">
                          40
                          <br /> Min
                        </span>
                        <span className="time_main">
                          23
                          <br /> Sec
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a
                      className="comman_product_name"
                      href="auction-details.html"
                    >
                      <img src="assets/img/Auction_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="free-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product1.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_icon.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Freee_tag.png')",
                      }}
                    >
                      Free
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a className="comman_product_name" href="free-details.html">
                      <img src="assets/img/Gift_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="price-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product2.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_done.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Redtag_tag.png')",
                      }}
                    >
                      1,500 <span>SAR</span>
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a
                      className="comman_product_name"
                      href="price-details.html"
                    >
                      <img src="assets/img/Price_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="auction-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product3.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_icon.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Priice_tag.png')",
                      }}
                    >
                      3,500 <span>SAR</span>
                    </div>
                    <div className="countdown">
                      <div className="counter_inner shadow">
                        <span className="time_main">
                          03
                          <br /> Day{" "}
                        </span>
                        <span className="time_main">
                          20
                          <br /> Hours
                        </span>
                        <span className="time_main">
                          40
                          <br /> Min
                        </span>
                        <span className="time_main">
                          23
                          <br /> Sec
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a
                      className="comman_product_name"
                      href="auction-details.html"
                    >
                      <img src="assets/img/Auction_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="price-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product2.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_done.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Redtag_tag.png')",
                      }}
                    >
                      1,500 <span>SAR</span>
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a
                      className="comman_product_name"
                      href="price-details.html"
                    >
                      <img src="assets/img/Price_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 product_col px-2">
                <div className="comman_product">
                  <div className="comman_product_top">
                    <div className="time_prodt">
                      <img src="assets/img/clock.png" alt="" />
                      <span>2 min ago</span>
                    </div>
                  </div>
                  <div className="comman_product_img">
                    <a href="auction-details.html">
                      <img
                        className="cmn_prd_img"
                        src="assets/img/product3.png"
                        alt=""
                      />
                    </a>
                    <a href="javscript:;" className="fav_box">
                      <img src="assets/img/fav_icon.png" alt="" />
                    </a>
                    <a className="video_play" href="javscript:;">
                      <img src="assets/img/video_play.png" alt="" />
                    </a>
                    <div
                      className="badge_new"
                      style={{
                        backgroundImage: "url('assets/img/Priice_tag.png')",
                      }}
                    >
                      3,500 <span>SAR</span>
                    </div>
                    <div className="countdown">
                      <div className="counter_inner shadow">
                        <span className="time_main">
                          03
                          <br /> Day{" "}
                        </span>
                        <span className="time_main">
                          20
                          <br /> Hours
                        </span>
                        <span className="time_main">
                          40
                          <br /> Min
                        </span>
                        <span className="time_main">
                          23
                          <br /> Sec
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="comman_product_bottom">
                    <a
                      className="comman_product_name"
                      href="auction-details.html"
                    >
                      <img src="assets/img/Auction_product.png" alt="" /> A
                      Collection of a scientific & Magazines
                    </a>
                    <div className="row mx-0 comman_product_inner pb-md-3 pb-2 pt-2">
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/location.png" alt="" />{" "}
                          <span>Yanbu Al Bahr</span>
                        </div>
                      </div>
                      <div className="col-6 py-1 px-2">
                        <div className="address_part d-flex align-items-center justify-content-center">
                          <img src="assets/img/Category_icon.png" alt="" />{" "}
                          <span>Cars & Truck</span>
                        </div>
                      </div>
                    </div>
                    <div className="row mx-0 product_bottom_main pt-3">
                      <div className="col-4 border-end">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#makeoffer"
                          href="javscript:;"
                        >
                          <img src="assets/img/make_offer.png" alt="" />
                          <span>Make Offer</span>
                        </a>
                      </div>
                      <div className="col-4 border-end">
                        <a href="javscript:;">
                          <img src="assets/img/message.png" alt="" />
                          <span>Message</span>
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="javscript:;">
                          <img src="assets/img/Share.png" alt="" />
                          <span>Share</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* <!-- Offer Modal For all --> */}
      <div
        className="modal fade offer_modal"
        id="makeoffer"
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
              <div className="row offer_modal_main">
                <div className="col-12 offer_modal_heading">
                  <h2>Your Offer</h2>
                </div>
                <div className="col-12 offer_modal_mid">
                  <div className="offer_modal_img shadow">
                    <img src="assets/img/product1.png" alt="" />
                  </div>
                  <h3>Blue Lorem Collection</h3>
                </div>
                <div className="col-12 mt-3">
                  <form className="form_design row p-0">
                    <div className="form-group col-12">
                      <input
                        className="form-control mb-3"
                        type="text"
                        value="6300 SAR"
                      />
                      <span>
                        Note: Your offer will be sent privately to this owner.
                      </span>
                    </div>
                    <div className="form-group col-12">
                      <a className="comman_btns1" href="javscript:;">
                        Confirm Offer
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

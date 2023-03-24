import React from "react";
import Footer from "../commonComponent/footer";
import Header from "../commonComponent/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

function Free() {
  return (
    <>
      <Header />
      <section
        className="innerbanner_section"
        style={{ backgroundImage: "url(assets/img/01.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9 banner_content text-center">
              <h1 className="m-0">Post An Offer : Free</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="post_offer_Section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-11 col-12 px-0">
              <form action="#" className="post_offer_inner shadow bg-white">
                <nav>
                  <div
                    className="nav nav-tabs step_tab border-0"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active step_done"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <div className="step_tab_circle"></div>
                      <span>Photo</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <div className="step_tab_circle"></div>
                      <span>Details</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <div className="step_tab_circle"></div>
                      <span>Price</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact1"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact1"
                      aria-selected="false"
                    >
                      <div className="step_tab_circle"></div>
                      <span>Done</span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content mt-md-5 mt-4" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row post_offer_data mx-0">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 form-group mb-4 pb-2">
                            <div className="row">
                              <div className="col-12 post_offer_top text-center">
                                <img src="assets/img/Free_post.png" alt="" />
                                <span>Your Item will be Offered Free</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <span className="video_heading">
                              <img src="assets/img/Video_icon.png" alt="" /> You
                              are able to add a 60 sec video (Optional)
                            </span>
                          </div>
                          <div className="col-6 mb-4">
                            <div className="row video_section">
                              <div className="col-12">
                                <div className="videoimg_part shadow">
                                  <img src="assets/img/product1.png" alt="" />
                                  <a className="delete_btn" href="javscript:;">
                                    <i className="far fa-trash-alt"></i>
                                  </a>
                                  <a className="cover_part" href="javascript:;">
                                    Cover
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 form-group mb-4">
                            <div className="row upload_pic border mx-0 h-100">
                              <span className="head1">Add Photo/Video:</span>
                              <div className="col img_box_show px-2">
                                <input
                                  className="d-none"
                                  type="file"
                                  id="file1"
                                  name="file"
                                />
                                <label className="h-100" for="file1">
                                  <div className="">
                                    <img
                                      src="assets/img/upload_file.png"
                                      alt=""
                                    />{" "}
                                    Upload File
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-4">
                            <div className="row offer_slidee">
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product1.png" alt="" />
                                </div>
                              </div>
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product2.png" alt="" />
                                </div>
                              </div>
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product3.png" alt="" />
                                </div>
                              </div>
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product1.png" alt="" />
                                </div>
                              </div>
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product2.png" alt="" />
                                </div>
                              </div>
                              <div className="col-2 px-md-3 px-1">
                                <div
                                  data-bs-toggle="modal"
                                  data-bs-target="#offer_tap"
                                  className="item_box shadow"
                                >
                                  <img src="assets/img/product2.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-4">
                            <ul className="describe_details mb-0">
                              <li>
                                <p>Tap Photo to edit</p>
                              </li>
                              <li>
                                <p>Tap & Hold photo to re-arrenge</p>
                              </li>
                            </ul>
                          </div>
                          <div className="col-12 form-group mb-4">
                            <label for="">Title</label>
                            <input
                              className="form-control"
                              type="text"
                              id="title"
                              name="title"
                              placeholder="Name, Brand, Model, etc."
                            />
                          </div>
                          <div className="col-12 form-group mb-0 text-center mt-2">
                            <button className="comman_btns">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row post_offer_data mx-0">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 form-group mb-md-4 mb-3">
                            <label for="">Category</label>
                            <select
                              className="form-select form-control"
                              aria-label="Default select example"
                            >
                              <option>Select a Category</option>
                              <option selected value="1">
                                Mobile
                              </option>
                              <option value="2">Music</option>
                              <option value="3">Decor</option>
                              <option value="4">Fashion</option>
                              <option value="5">Bikes</option>
                              <option value="6">Gaming</option>
                              <option value="7">Kitchen</option>
                              <option value="8">Furniture</option>
                              <option value="9">Computer</option>
                            </select>
                          </div>
                          <div className="col-12 form-group mb-md-4 mb-3">
                            <label for="">Brands</label>
                            <div className="row mx-0">
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="iphone"
                                  name="category"
                                  className="d-none"
                                />
                                <label for="iphone">iphone</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  checked
                                  id="Oneplus"
                                  name="category"
                                  className="d-none"
                                />
                                <label for="Oneplus">Oneplus</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Samsung"
                                  name="category"
                                  className="d-none"
                                />
                                <label for="Samsung">Samsung</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Vivo"
                                  name="category"
                                  className="d-none"
                                />
                                <label for="Vivo">Vivo</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Oppo"
                                  name="category"
                                  className="d-none"
                                />
                                <label for="Oppo">Oppo</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-md-4 mb-3">
                            <label for="">Model</label>
                            <div className="row mx-0">
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Oneplus1"
                                  name="modal"
                                  className="d-none"
                                />
                                <label for="Oneplus1">Nord</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  checked
                                  id="Oneplus2"
                                  name="modal"
                                  className="d-none"
                                />
                                <label for="Oneplus2">Oneplus 9</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Oneplus3"
                                  name="modal"
                                  className="d-none"
                                />
                                <label for="Oneplus3">Nord 2</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="Oneplus4"
                                  name="modal"
                                  className="d-none"
                                />
                                <label for="Oneplus4">Oneplus 8</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-md-4 mb-3">
                            <label for="">Years</label>
                            <div className="row mx-0">
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="2022"
                                  name="years"
                                  className="d-none"
                                />
                                <label for="2022">2022</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="2021"
                                  name="years"
                                  className="d-none"
                                />
                                <label for="2021">2021</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="2020"
                                  name="years"
                                  className="d-none"
                                />
                                <label for="2020">2020</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  checked
                                  id="2019"
                                  name="years"
                                  className="d-none"
                                />
                                <label for="2019">2019</label>
                              </div>
                              <div className="col-auto px-1 radio_category">
                                <input
                                  type="radio"
                                  id="2018"
                                  name="years"
                                  className="d-none"
                                />
                                <label for="2018">2018</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-md-4 mb-3">
                            <label for="">Description (Optional)</label>
                            <textarea
                              className="form-control"
                              name="Description"
                              id="Description"
                            ></textarea>
                          </div>
                          <div className="col-12 form-group mb-0 text-center mt-2">
                            <button className="comman_btns">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row post_offer_data mx-0">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 form-group mb-4 position-relative price_adjust">
                            <label for="">Your Price</label>
                            <input
                              className="form-control"
                              type="text"
                              id="title"
                              name="title"
                              value="Free"
                            />
                            <span>SAR</span>
                          </div>
                          <div className="col-12 form-group mb-4">
                            <div className="row adjust_align">
                              <div className="col-12 mb-4">
                                <div className="check_toggle">
                                  <input
                                    type="checkbox"
                                    name="check2"
                                    id="check2"
                                    className="d-none"
                                  />
                                  <label for="check2"></label>
                                  <span>
                                    Activate Comment Section{" "}
                                    <div
                                      className="info_btn"
                                      aria-label="Lorem ipsum, dolor sit amet"
                                      data-balloon-pos="up"
                                    >
                                      <img src="assets/img/info.png" alt="" />
                                    </div>{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="col-12 mb-4">
                                <div className="check_toggle">
                                  <input
                                    type="checkbox"
                                    checked=""
                                    name="check3"
                                    id="check3"
                                    className="d-none"
                                  />
                                  <label for="check3"></label>
                                  <span>
                                    Show Location of Product{" "}
                                    <div
                                      className="info_btn"
                                      aria-label="Lorem ipsum, dolor sit amet"
                                      data-balloon-pos="up"
                                    >
                                      <img src="assets/img/info.png" alt="" />
                                    </div>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-4">
                            <div className="row upload_pic delivery_options border mx-0 py-4">
                              <span className="head1">
                                Delivery Options Available to the Buyers
                              </span>
                              <div className="col-md-6 mb-md-0 mb-4">
                                <div className="check_toggle">
                                  <input
                                    type="checkbox"
                                    checked=""
                                    name="check4"
                                    id="check4"
                                    className="d-none"
                                  />
                                  <label for="check4"></label>
                                  <span>
                                    Hand to Hand{" "}
                                    <div
                                      className="info_btn"
                                      aria-label="Lorem ipsum, dolor sit amet"
                                      data-balloon-pos="up"
                                    >
                                      <img src="assets/img/info.png" alt="" />
                                    </div>{" "}
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 mb-0">
                                <div className="check_toggle">
                                  <input
                                    type="checkbox"
                                    name="check5"
                                    id="check5"
                                    className="d-none"
                                  />
                                  <label for="check5"></label>
                                  <span>
                                    Shipping to Buyers{" "}
                                    <div
                                      className="info_btn"
                                      aria-label="Lorem ipsum, dolor sit amet"
                                      data-balloon-pos="up"
                                    >
                                      <img src="assets/img/info.png" alt="" />
                                    </div>{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-0 text-center mt-2">
                            <button className="comman_btns">Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact1"
                    role="tabpanel"
                    aria-labelledby="nav-contact1-tab"
                  >
                    <div className="row post_offer_data mx-0">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 form-group mb-3 Location_map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14932232.046512844!2d36.03982961097538!3d23.975836665710272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1671532592109!5m2!1sen!2sin"
                              style={{ border: "0" }}
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                          <div className="col-12 form-group mb-md-5 mb-4">
                            <label for="">Your Location</label>
                            <input
                              className="form-control"
                              type="text"
                              id="title"
                              name="title"
                              placeholder="20 Boland Drive, Rous New South Wales."
                            />
                          </div>
                          <Swiper
                            className="mySwiper "
                            grabCursor={true}
                            effect={"cards"}
                            navigation={{
                              nextEl: ".swiper-button-next",
                              prevEl: ".swiper-button-prev",
                            }}
                            modules={[
                              Autoplay,
                              Pagination,
                              Navigation,
                              EffectCards,
                            ]}
                          >
                            <SwiperSlide>
                              <img src="assets/img/product_img2.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/img/product_img3.png" alt="" />
                            </SwiperSlide>{" "}
                            <SwiperSlide>
                              <img src="assets/img/product_img4.png" alt="" />
                            </SwiperSlide>{" "}
                            <SwiperSlide>
                              <img src="assets/img/product_img1.png" alt="" />
                            </SwiperSlide>{" "}
                            <SwiperSlide>
                              <img src="assets/img/product_img2.png" alt="" />
                            </SwiperSlide>{" "}
                            <SwiperSlide>
                              <img src="assets/img/product_img3.png" alt="" />
                            </SwiperSlide>{" "}
                            <SwiperSlide>
                              <img src="assets/img/product_img4.png" alt="" />
                            </SwiperSlide>
                            <div className="swiper-button-next swiper-button-white"></div>
                            <div className="swiper-button-prev swiper-button-white"></div>
                          </Swiper>

                          <div className="col-12 mb-4 mt-5 congratulation_content text-center">
                            <strong>Congratulations !</strong>
                            <p className="mb-0">
                              You are one last step to publish your item.
                            </p>
                          </div>
                          <div className="col-12 form-group mb-0 text-center mt-2">
                            <button className="comman_btns1 mx-1">
                              Post New Item
                            </button>
                            <button className="comman_btns mx-1">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div
        className="modal fade offer_tap"
        id="offer_tap"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <a
                data-bs-toggle="modal"
                data-bs-target="#editpic_modal"
                href="javascript:;"
              >
                Edit
              </a>
              <a data-bs-dismiss="modal" href="javascript:;">
                Set as Cover Photo
              </a>
              <a data-bs-dismiss="modal" href="javascript:;">
                Delete
              </a>
              <a data-bs-dismiss="modal" href="javascript:;">
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="editpic_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-0">
            <div className="modal-body p-0">
              <div className="row editpic_main">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div className="col-12">
                  <div className="editpic_top d-flex align-items-center justify-content-between">
                    <h3>Edit</h3>
                    <a data-bs-dismiss="modal" href="javascript:;">
                      Save
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="editable_part">
                    <img src="assets/img/product2.png" alt="" />
                  </div>
                  <div className="editable_btsn">
                    <a className="active" href="javascript:;">
                      <img src="assets/img/Rotate_T.png" alt="" />
                      <span>Rotate</span>
                    </a>
                    <a href="javascript:;">
                      <img src="assets/img/Shape_T.png" alt="" />
                      <span>Shape</span>
                    </a>
                    <a href="javascript:;">
                      <img src="assets/img/Text_T.png" alt="" />
                      <span>Text</span>
                    </a>
                    <a href="javascript:;">
                      <img src="assets/img/Cut_T.png" alt="" />
                      <span>Cut</span>
                    </a>
                    <a href="javascript:;">
                      <img src="assets/img/Draw_T.png" alt="" />
                      <span>Draw</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Free;

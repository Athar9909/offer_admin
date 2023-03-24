import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import {
  changeOfferStatus,
  getOfferDetails,
} from "../httpService/DashboardHttp";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import FsLightbox from "fslightbox-react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

function OfferDetails() {
  const [slides, setSlides] = useState();
  const [basicExampleOpen, setBasicExampleOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [postedTime, setPostedTime] = useState();
  const [offerDetails, setOfferDetails] = useState([]);
  const [toggler, setToggler] = useState(false);
  const [offerId, setOfferId] = useState();
  const [change, setChange] = useState();
  const [slide, setSlide] = useState();
  let id = location.state?.id;
  let nav = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  if (!id) {
    nav("/admin/offer-management");
  }
  useEffect(() => {
    getOffer();
  }, []);

  const getOffer = async () => {
    const { data } = await getOfferDetails(id);
    setOfferDetails(data?.results?.offer);
    let date = data?.results?.offer.createdAt?.slice(0, 10);
    let today = new Date().toISOString().slice(0, 10);
    let date_1 = new Date(date);
    let date_2 = new Date(today);
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    setPostedTime(TotalDays);
    setSlide();
  };

  // map
  const position = {
    lat: offerDetails?.location?.latitude
      ? offerDetails?.location?.latitude
      : 50,
    lng: offerDetails?.location?.longitude
      ? offerDetails?.location?.longitude
      : 50,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: offerDetails?.location?.latitude
      ? offerDetails?.location?.latitude
      : 50,
    lng: offerDetails?.location?.longitude
      ? offerDetails?.location?.longitude
      : 50,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA1X0VM5k6DeAGJSWM6W8KkPCVYnohdTg8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onLoadMark = (marker) => {
    console.log("marker: ", marker);
  };
  const OfferStatus = async (id) => {
    setOfferId(id);
  };

  const Yes = async (e) => {
    e.preventDefault();
    const { data } = await changeOfferStatus(offerId);
    if (!data?.error) {
      document.getElementById("modalClose").click();
      getOffer();
    }
  };

  const No = (e) => {
    e.preventDefault();
    document.getElementById("modalClose").click();
    setChange(!change);
  };

  const getSlides = () => {
    let slide = [];
    if (offerDetails?.cover_image_mime_type === "image") {
      slide?.push({ src: offerDetails?.cover_image });
    } else {
      slide?.push({
        type: "video",
        width: 1280,
        height: 720,
        poster: "",
        sources: [
          {
            src: offerDetails?.cover_image,
            width: 1200,
            height: 800,
            type: "video/mp4",
          },
        ],
      });
    }
    (offerDetails?.images || [])?.map((item) => {
      if (item?.mime_type === "image") {
        slide?.push({ src: item?.url });
      } else {
        slide?.push({
          type: "video",
          width: 1280,
          height: 720,
          poster: "",
          sources: [
            { src: item?.url, width: 1200, height: 800, type: "video/mp4" },
          ],
        });
      }
    });

    return slide;
  };

  // const slidesImages = (offerDetails?.images || [])?.map((item) => ({
  //   src:
  //     item?.mime_type === "image"
  //       ? item?.url
  //       : require("../../assets/img/upload_file.png"),
  // }));

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row offerdetails-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Offer Details</h2>
                      </div>
                    </div>
                    <div className="row p-4">
                      <div className="col-12 py-2">
                        <div className="row">
                          <div className="col-6 offerdetails_product position-relative">
                            <div
                              id="carouselExampleIndicators"
                              className="carousel slide"
                              data-interval="false"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-inner ">
                                <div className="carousel-item active">
                                  {offerDetails?.cover_image_mime_type ===
                                  "video" ? (
                                    <video
                                      id="frameOne"
                                      className="main_img"
                                      autoPlay
                                      loop
                                      muted
                                      allowfullscreen=""
                                      width="550px"
                                      height="310px"
                                      onClick={() => setOpen(true)}
                                    >
                                      <source
                                        src={
                                          offerDetails?.cover_image
                                            ? offerDetails?.cover_image
                                            : "../../assets/img/upload_file.png"
                                        }
                                      />
                                    </video>
                                  ) : (
                                    <img
                                      src={
                                        offerDetails?.cover_image
                                          ? offerDetails?.cover_image
                                          : "../../assets/img/upload_file.png"
                                      }
                                      className="d-block w-100"
                                      alt="..."
                                      onClick={() => setOpen(true)}
                                    />
                                  )}

                                  <span className="label_s">
                                    {offerDetails?.type}
                                  </span>
                                </div>
                                {offerDetails?.images?.map((item, index) => (
                                  <div className="carousel-item ">
                                    {item?.mime_type === "video" ? (
                                      <video
                                        id="frameOne"
                                        className="main_img"
                                        autoPlay
                                        loop
                                        muted
                                        width="550px"
                                        height="310px"
                                        onClick={() => setOpen(true)}
                                      >
                                        <source
                                          src={
                                            item?.url
                                              ? item?.url
                                              : "../../assets/img/upload_file.png"
                                          }
                                        />
                                      </video>
                                    ) : (
                                      <img
                                        src={
                                          item?.url
                                            ? item?.url
                                            : "../../assets/img/upload_file.png"
                                        }
                                        className="d-block w-100"
                                        alt="..."
                                        onClick={() => setOpen(true)}
                                      />
                                    )}
                                    <span className="label_s">Free</span>
                                  </div>
                                ))}
                              </div>
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#carouselExampleIndicators"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                >
                                  {offerDetails?.cover_image_mime_type ===
                                  "video" ? (
                                    <video
                                      className="main_img"
                                      allow="autoplay"
                                      width="550px"
                                      height="310px"
                                      muted
                                      src={
                                        offerDetails?.cover_image
                                          ? offerDetails?.cover_image
                                          : "../../assets/img/upload_file.png"
                                      }
                                      alt=""
                                      // onClick={() => setToggler(!toggler)}
                                    />
                                  ) : (
                                    <img
                                      src={
                                        offerDetails?.cover_image
                                          ? offerDetails?.cover_image
                                          : "../../assets/img/upload_file.png"
                                      }
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  )}
                                </button>
                                {offerDetails?.images?.map((item, ind) => (
                                  <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={ind + 1}
                                    aria-label="Slide 2"
                                  >
                                    {item?.mime_type === "video" ? (
                                      <video
                                        src={
                                          item?.url
                                            ? item?.url
                                            : "../../assets/img/upload_file.png"
                                        }
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        src={
                                          item?.url
                                            ? item?.url
                                            : "../../assets/img/upload_file.png"
                                        }
                                        className="thumnail_img"
                                        alt="..."
                                      />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="check_toggle" key={change}>
                              <input
                                type="checkbox"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                defaultChecked={offerDetails?.active_status}
                                name="check1"
                                id="check1"
                                onClick={() => {
                                  OfferStatus(offerDetails?._id);
                                }}
                                className="d-none"
                              />
                              <label for="check1"></label>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="offerdetails_info">
                              <div className="row justify-content-center">
                                <div className="col-12">
                                  <div className="user_imgg">
                                    <img
                                      src={offerDetails?.user?.cover_image}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="col-12 users_left_content text-center">
                                  <Link
                                    to="/admin/user-details"
                                    state={{ id: offerDetails?.user?._id }}
                                  >
                                    <strong>
                                      {offerDetails?.user?.username}
                                    </strong>
                                  </Link>
                                  <div className="rating_box">
                                    {(() => {
                                      switch (offerDetails?.user?.rating) {
                                        case 0:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        case 1:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        case 2:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        case 3:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        case 4:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        case 5:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="fas fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                        default:
                                          return (
                                            <a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                              <a href="">
                                                <i className="far fa-star"></i>
                                              </a>
                                            </a>
                                          );
                                      }
                                    })()}
                                  </div>
                                </div>
                              </div>
                              <div className="row mx-0">
                                <div className="col-12 offerdetails_inner border">
                                  <h2>{offerDetails?.title}</h2>
                                  <div className="category_edit d-flex align-items-center">
                                    <span>
                                      <i className="fas fa-list-ol me-2"></i>{" "}
                                      {offerDetails?.category?.name_en}
                                    </span>{" "}
                                    <a
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop1"
                                      className="edit_cate"
                                      href=""
                                    >
                                      <i className="far fa-edit"></i>
                                    </a>
                                  </div>
                                  <span>
                                    <i className="far fa-clock me-2"></i> Posted
                                    {" " + postedTime} days ago
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row">
                      <div className="col-12 px-0">
                        <nav>
                          <div
                            className="nav nav-tabs comman_tabs"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                              type="button"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                            >
                              Product Description
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
                              Product Location
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
                              Comments
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div className="row mx-0 p-4 product_description">
                              <div className="col-12">
                                {offerDetails?.description}
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <div className="row mx-0 p-4 product_location">
                              <div className="col-12">
                                <div
                                  id="map-canvas"
                                  class="mb-5 shadow rounded px-0"
                                >
                                  {isLoaded ? (
                                    <GoogleMap
                                      mapContainerStyle={containerStyle}
                                      zoom={14}
                                      center={center}
                                      onLoad={onLoad}
                                      // onUnmount={onUnmount}
                                    >
                                      <>
                                        <MarkerF
                                          onLoad={onLoadMark}
                                          position={position}
                                        />
                                      </>
                                    </GoogleMap>
                                  ) : null}
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
                            <div className="row mx-0 p-4 Comments_main">
                              <div className="col-12 py-2">
                                <div className="row mx-0 Comments_box align-items-center mb-4">
                                  <div className="col">
                                    <div className="Comments_top d-flex align-items-center">
                                      <span className="Comments_prfile">
                                        <img
                                          src="../assets/img/admin/profile_img1.jpg"
                                          alt=""
                                        />
                                      </span>
                                      <strong>Ajay Sharma</strong>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <span className="date_comment">
                                      15 days ago
                                    </span>
                                  </div>
                                  <div className="col-12 mt-3">
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Ratione ipsa, qui
                                      expedita magnam facere explicabo
                                      architecto cum soluta distinctio possimus.
                                      Natus commodi perspiciatis, fugiat dicta
                                      et pariatur. Placeat, suscipit
                                      consequatur.....
                                    </p>
                                  </div>
                                </div>
                                <div className="row mx-0 Comments_box align-items-center mb-4">
                                  <div className="col">
                                    <div className="Comments_top d-flex align-items-center">
                                      <span className="Comments_prfile">
                                        <img
                                          src="../assets/img/admin/profile_img1.jpg"
                                          alt=""
                                        />
                                      </span>
                                      <strong>Ajay Sharma</strong>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <span className="date_comment">
                                      15 days ago
                                    </span>
                                  </div>
                                  <div className="col-12 mt-3">
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Ratione ipsa, qui
                                      expedita magnam facere explicabo
                                      architecto cum soluta distinctio possimus.
                                      Natus commodi perspiciatis, fugiat dicta
                                      et pariatur. Placeat, suscipit
                                      consequatur.....
                                    </p>
                                  </div>
                                </div>
                                <div className="row mx-0 Comments_box align-items-center mb-4">
                                  <div className="col">
                                    <div className="Comments_top d-flex align-items-center">
                                      <span className="Comments_prfile">
                                        <img
                                          src="../assets/img/admin/profile_img1.jpg"
                                          alt=""
                                        />
                                      </span>
                                      <strong>Ajay Sharma</strong>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <span className="date_comment">
                                      15 days ago
                                    </span>
                                  </div>
                                  <div className="col-12 mt-3">
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Ratione ipsa, qui
                                      expedita magnam facere explicabo
                                      architecto cum soluta distinctio possimus.
                                      Natus commodi perspiciatis, fugiat dicta
                                      et pariatur. Placeat, suscipit
                                      consequatur.....
                                    </p>
                                  </div>
                                </div>
                                <div className="row mx-0 Comments_box align-items-center mb-4">
                                  <div className="col">
                                    <div className="Comments_top d-flex align-items-center">
                                      <span className="Comments_prfile">
                                        <img
                                          src="../assets/img/admin/profile_img1.jpg"
                                          alt=""
                                        />
                                      </span>
                                      <strong>Ajay Sharma</strong>
                                    </div>
                                  </div>
                                  <div className="col-auto">
                                    <span className="date_comment">
                                      15 days ago
                                    </span>
                                  </div>
                                  <div className="col-12 mt-3">
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Ratione ipsa, qui
                                      expedita magnam facere explicabo
                                      architecto cum soluta distinctio possimus.
                                      Natus commodi perspiciatis, fugiat dicta
                                      et pariatur. Placeat, suscipit
                                      consequatur.....
                                    </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade Update_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="modalClose"
              ></button>
              <div className="row">
                <div className="col-12 Update_modal_content py-4">
                  <h2>Update</h2>
                  <p>Are you sure you want to disable this user?</p>
                  <a
                    className="comman_btn mx-2"
                    href="javscript:;"
                    onClick={Yes}
                  >
                    Yes
                  </a>
                  <a
                    className="comman_btn2 mx-2 bg-red"
                    href="javscript:;"
                    onClick={No}
                  >
                    NO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade Edit_modal change_category"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Change Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <form
                className="form-design py-4 px-3 mx-0 help-support-form row align-items-end justify-content-between"
                action=""
              >
                <div className="form-group col-6">
                  <label for="">Select Category</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
                    <option selected value="1">
                      Lorem
                    </option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                    <option value="1">Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                  </select>
                </div>
                <div className="form-group col-6">
                  <label for="">Select Sub Category</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
                    <option selected value="1">
                      Lorem
                    </option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                    <option value="1">Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                  </select>
                </div>
                <div className="form-group col-4">
                  <label for="">Select Sub Sub Category</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
                    <option selected value="1">
                      Lorem
                    </option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                    <option value="1">Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                  </select>
                </div>
                <div className="form-group col-4">
                  <label for="">Select Attribute</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
                    <option selected value="1">
                      Lorem
                    </option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                    <option value="1">Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                  </select>
                </div>
                <div className="form-group col-4">
                  <label for="">Select Value</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
                    <option selected value="1">
                      Lorem
                    </option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                    <option value="1">Lorem</option>
                    <option value="2">ipsum</option>
                    <option value="3">Lorem</option>
                  </select>
                </div>
                <div className="form-group mb-0 col-12 text-center">
                  <button className="comman_btn2">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={slidesImages}
      /> */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={getSlides()}
        plugins={[Video]}
      />
      {/* {console.log(offerDetails?.cover_image)}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=3nQNiWdeH2Q",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
      /> */}
    </>
  );
}

export default OfferDetails;

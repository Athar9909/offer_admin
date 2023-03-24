import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { getOffers } from "../httpService/DashboardHttp";

function Offer() {
  const [offers, setOffers] = useState([]);
  const [offersFree, setOffersFree] = useState([]);
  const [offersPrice, setOffersPrice] = useState([]);
  const [offersAuction, setOffersAuction] = useState([]);
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  useEffect(() => {
    getAllOffers();
  }, []);

  const handleDate = (date) => {
    getAllOffers(date);
    FreeOffers(date);
    PriceOffers(date);
    AuctionOffers(date);
  };
  const getAllOffers = async (date) => {
    const { data } = await getOffers({ year: date });
    if (!data.error) {
      setOffers(data?.results?.offers);
    }
  };
  const FreeOffers = async (date) => {
    const { data } = await getOffers({ type: "Free", year: date });
    if (!data.error) {
      setOffersFree(data?.results?.offers);
    }
  };
  const PriceOffers = async (date) => {
    const { data } = await getOffers({ type: "Price", year: date });
    if (!data.error) {
      setOffersPrice(data?.results?.offers);
    }
  };
  const AuctionOffers = async (date) => {
    const { data } = await getOffers({ type: "Auction", year: date });
    if (!data.error) {
      setOffersAuction(data?.results?.offers);
    }
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row offer-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  {/* <div className="col-12 px-0 mb-4">
                    <div className="offer_map shadow">
                      <img src="../../assets/img/admin/map.png" alt="" />
                    </div>
                  </div> */}
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2 className="fw-bolder">Offers Management</h2>
                      </div>
                      <div className="col-3">
                        <form className="form-design" action="">
                          <div className="form-group mb-0 position-relative icons_set">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                              name="name"
                              id="name"
                            />
                            <i className="far fa-search"></i>
                          </div>
                        </form>
                      </div>
                      <div class="col-auto">
                        <input
                          type="date"
                          class="custom_date"
                          onChange={(e) => handleDate(e.target.value)}
                        />
                      </div>
                      <div className="col-auto">
                        <div className="dropdown calender_part">
                          <a
                            className="dropdown-toggle"
                            href=""
                            role="button"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa fa-filter"></i>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/admin/offer-management"
                              >
                                All
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/admin/offer-management-enable"
                              >
                                Enabled Only
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/admin/offer-management-disable"
                              >
                                Disabled Only
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                              {" "}
                              All{" "}
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
                              onClick={() => FreeOffers()}
                            >
                              {" "}
                              Free Offers{" "}
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
                              onClick={() => PriceOffers()}
                            >
                              {" "}
                              Fixed Price Offers{" "}
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
                              onClick={() => AuctionOffers()}
                            >
                              {" "}
                              Auctions{" "}
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
                            <div className="row py-4 pe-2 mx-0">
                              <div className="col-12">
                                <div className="row products_posted p-0">
                                  {(offers || [])?.map((item, index) => (
                                    <div className="col-4 mb-4">
                                      <Link
                                        to="/admin/offer-details"
                                        className={
                                          item?.active_status
                                            ? "products_posted_box"
                                            : "products_posted_box_disabled"
                                        }
                                        state={{ id: item?._id }}
                                      >
                                        {item?.cover_image_mime_type ===
                                        "video" ? (
                                          <video
                                            id="frameOne"
                                            className="main_img"
                                            autoPlay
                                            loop
                                            muted
                                            allowfullscreen=""
                                          >
                                            <source
                                              src={
                                                item?.cover_image
                                                  ? item?.cover_image
                                                  : "../../assets/img/upload_file.png"
                                              }
                                            />
                                          </video>
                                        ) : (
                                          <img
                                            className="main_img"
                                            src={
                                              item?.cover_image
                                                ? item?.cover_image
                                                : "../../assets/img/upload_file.png"
                                            }
                                            alt=""
                                          />
                                        )}

                                        {(() => {
                                          switch (item?.type) {
                                            case "Free":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../../assets/img/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Price":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/price.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Auction":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/auction.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );

                                            default:
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                          }
                                        })()}
                                      </Link>
                                    </div>
                                  ))}
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
                            <div className="row py-4 pe-2 mx-0">
                              <div className="col-12">
                                <div className="row products_posted p-0">
                                  {(offersFree || [])?.map((item, index) => (
                                    <div className="col-4 mb-4">
                                      <Link
                                        to="/admin/offer-details"
                                        className="products_posted_box"
                                        state={{ id: item?._id }}
                                      >
                                        {item?.cover_image_mime_type ===
                                        "video" ? (
                                          <video
                                            id="frameOne"
                                            className="main_img"
                                            autoPlay
                                            loop
                                            muted
                                            allowfullscreen=""
                                          >
                                            <source
                                              src={
                                                item?.cover_image
                                                  ? item?.cover_image
                                                  : "../../assets/img/upload_file.png"
                                              }
                                            />
                                          </video>
                                        ) : (
                                          <img
                                            className="main_img"
                                            src={
                                              item?.cover_image
                                                ? item?.cover_image
                                                : "../../assets/img/upload_file.png"
                                            }
                                            alt=""
                                          />
                                        )}

                                        {(() => {
                                          switch (item?.type) {
                                            case "Free":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../../assets/img/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Price":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/price.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Auction":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/auction.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );

                                            default:
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                          }
                                        })()}
                                      </Link>
                                    </div>
                                  ))}
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
                            <div className="row py-4 pe-2 mx-0">
                              <div className="col-12">
                                <div className="row products_posted p-0">
                                  {(offersPrice || [])?.map((item, index) => (
                                    <div className="col-4 mb-4">
                                      <Link
                                        to="/admin/offer-details"
                                        className="products_posted_box"
                                        state={{ id: item?._id }}
                                      >
                                        {item?.cover_image_mime_type ===
                                        "video" ? (
                                          <video
                                            id="frameOne"
                                            className="main_img"
                                            autoPlay
                                            loop
                                            muted
                                            allowfullscreen=""
                                          >
                                            <source
                                              src={
                                                item?.cover_image
                                                  ? item?.cover_image
                                                  : "../../assets/img/upload_file.png"
                                              }
                                            />
                                          </video>
                                        ) : (
                                          <img
                                            className="main_img"
                                            src={
                                              item?.cover_image
                                                ? item?.cover_image
                                                : "../../assets/img/upload_file.png"
                                            }
                                            alt=""
                                          />
                                        )}

                                        {(() => {
                                          switch (item?.type) {
                                            case "Free":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../../assets/img/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Price":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/price.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Auction":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/auction.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );

                                            default:
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                          }
                                        })()}
                                      </Link>
                                    </div>
                                  ))}
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
                            <div className="row py-4 pe-2 mx-0">
                              <div className="col-12">
                                <div className="row products_posted p-0">
                                  {(offersAuction || [])?.map((item, index) => (
                                    <div className="col-4 mb-4">
                                      <Link
                                        to="/admin/offer-details"
                                        className="products_posted_box"
                                        state={{ id: item?._id }}
                                      >
                                        {item?.cover_image_mime_type ===
                                        "video" ? (
                                          <video
                                            id="frameOne"
                                            className="main_img"
                                            autoPlay
                                            loop
                                            muted
                                            allowfullscreen=""
                                          >
                                            <source
                                              src={
                                                item?.cover_image
                                                  ? item?.cover_image
                                                  : "../../assets/img/upload_file.png"
                                              }
                                            />
                                          </video>
                                        ) : (
                                          <img
                                            className="main_img"
                                            src={
                                              item?.cover_image
                                                ? item?.cover_image
                                                : "../../assets/img/upload_file.png"
                                            }
                                            alt=""
                                          />
                                        )}

                                        {(() => {
                                          switch (item?.type) {
                                            case "Free":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../../assets/img/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Price":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/price.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                            case "Auction":
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/auction.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );

                                            default:
                                              return (
                                                <div className="img_bx">
                                                  <img
                                                    src="../assets/img/admin/free.svg"
                                                    alt=""
                                                  />
                                                </div>
                                              );
                                          }
                                        })()}
                                      </Link>
                                    </div>
                                  ))}
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
    </>
  );
}

export default Offer;

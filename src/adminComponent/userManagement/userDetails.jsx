import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { changeUserStatus, getUserDetails } from "../httpService/DashboardHttp";

function UserDetails() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  let id = location.state?.id;
  const [userId, setUserId] = useState();
  let nav = useNavigate();
  const [change, setChange] = useState();
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  if (!id) {
    nav("/admin/users-management");
  }

  useEffect(() => {
    getUser();
  }, [change]);

  const getUser = async () => {
    const { data } = await getUserDetails(id);
    setUser(data?.results?.user);
  };

  const MonthsAgo = (num) => {
    let date = num?.slice(0, 10);
    let today = new Date().toISOString().slice(0, 10);
    let date_1 = new Date(date);
    let date_2 = new Date(today);
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const UserStatus = async (id) => {
    setUserId(id);
  };

  const Yes = async (e) => {
    e.preventDefault();
    const { data } = await changeUserStatus(userId);
    if (!data?.error) {
      document.getElementById("modalClose").click();
      getUser();
    }
  };

  const No = (e) => {
    e.preventDefault();
    document.getElementById("modalClose").click();
    setChange(!change);
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />

        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>User's Information</h2>
                      </div>
                      <div className="col-auto">
                        <a className="download_icon" href="">
                          <i className="fas fa-download"></i>
                        </a>
                      </div>
                    </div>
                    <div className="row users-information position-relative align-items-center justify-content-center">
                      <div className="check_toggle" key={change}>
                        <input
                          type="checkbox"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          defaultChecked={user?.status}
                          name="check1"
                          id="check1"
                          className="d-none"
                          onClick={() => {
                            UserStatus(user?._id);
                          }}
                        />
                        <label for="check1"></label>
                      </div>
                      <div className="col-4">
                        <div className="users_left">
                          <div className="row">
                            <div className="col-12">
                              <div className="user_imgg">
                                <img
                                  src={
                                    user?.cover_image
                                      ? user?.cover_image
                                      : require("../../assets/img/profile.png")
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-12 users_left_content">
                              <strong>
                                {user?.username}
                                <img
                                  src="../assets/img/admin/Group 3678.png"
                                  alt=""
                                />
                              </strong>
                              <div className="rating_box">
                                {(() => {
                                  switch (user?.rating) {
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
                              <div className="socialmedia_icon mt-3">
                                {user?.instagram && (
                                  <Link
                                    to={`https://www.instagram.com/${user?.instagram}/`}
                                  >
                                    <i className="fab fa-instagram"></i>
                                  </Link>
                                )}
                                {user?.snapchat && (
                                  <Link
                                    to={`https://www.snapchat.com/add/${user?.snapchat}`}
                                  >
                                    <i className="fab fa-snapchat-ghost"></i>
                                  </Link>
                                )}

                                {user?.facebook && (
                                  <Link
                                    to={`https://www.facebook.com/${user?.facebook}`}
                                  >
                                    <i className="fab fa-facebook-f"></i>
                                  </Link>
                                )}

                                {user?.twitter && (
                                  <Link
                                    to={`http://www.twitter.com/${user?.twitter}`}
                                  >
                                    <i className="fab fa-twitter"></i>
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 pe-5">
                        <div className="users_right pe-2">
                          <form
                            action="#"
                            className="form-design row position-relative"
                          >
                            <div className="form-group col-12">
                              <label for="">Mobile Number</label>
                              <input
                                type="text"
                                className="form-control"
                                value={user?.phone_number}
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                            <div className="form-group col-12">
                              <label for="">Email Id </label>
                              <input
                                type="text"
                                className="form-control"
                                value={user?.email}
                                name="name"
                                disabled
                                id="name"
                              />
                            </div>
                            <div className="form-group col-4">
                              <label for="">Registration Date</label>
                              <input
                                type="text"
                                className="form-control"
                                value={user?.createdAt
                                  ?.slice(0, 10)
                                  .replaceAll("-", "/")}
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                            <div className="form-group col-4">
                              <label for="">Followers</label>
                              <input
                                type="text"
                                className="form-control"
                                value="500"
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                            <div className="form-group col-4">
                              <label for="">Following</label>
                              <input
                                type="text"
                                className="form-control"
                                value="200"
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-12 mt-4">
                        <div className="row user_bottom">
                          <div className="col-4">
                            <div className="user_verified_main px-4">
                              <a className="verified_icon" href="">
                                Phone Number
                                {user?.phone_number ? (
                                  <span>
                                    <i className="fas fa-check"></i>
                                  </span>
                                ) : (
                                  <span>
                                    <i
                                      class="fas fa-exclamation-circle"
                                      style={{ fontSize: "30px" }}
                                    ></i>
                                  </span>
                                )}
                              </a>
                            </div>
                          </div>
                          <div className="col-4 border-start border-end">
                            <div className="user_verified_main px-4">
                              <a className="verified_icon" href="">
                                Email Address
                                {user?.email ? (
                                  <span>
                                    <i className="fas fa-check"></i>
                                  </span>
                                ) : (
                                  <span>
                                    <i
                                      class="fas fa-exclamation-circle"
                                      style={{ fontSize: "30px" }}
                                    ></i>
                                  </span>
                                )}
                              </a>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="user_verified_main px-4">
                              <a className="verified_icon" href="">
                                OfferYard Account
                                {user?.isVerified ? (
                                  <span>
                                    <i className="fas fa-check"></i>
                                  </span>
                                ) : (
                                  <span>
                                    <i
                                      class="fas fa-exclamation-circle"
                                      style={{ fontSize: "30px" }}
                                    ></i>
                                  </span>
                                )}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row Absher_box border">
                      <h2 className="Absher_head border border-bottom-0">
                        Absher Details :
                      </h2>
                      {user?.isAbsherVerified ? (
                        <div className="col-12">
                          <form
                            className="form-design row position-relative"
                            action=""
                          >
                            <div className="form-group mb-0 col-4 border-end">
                              <label for="">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={user?.username}
                                name="Name"
                                id="name"
                                disabled
                              />
                            </div>
                            <div className="form-group mb-0 col-4 border-end">
                              <label for="">ID / Iqama Number</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={user?.iqamaNumber}
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                            <div className="form-group mb-0 col-4">
                              <label for="">Date Of Birth</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={user?.dob?.slice(0, 10)}
                                name="name"
                                id="name"
                                disabled
                              />
                            </div>
                          </form>
                        </div>
                      ) : (
                        <div>
                          <span>
                            <i
                              class="fas fa-exclamation-circle mx-2 mt-1"
                              style={{ fontSize: "16px", color: "#da3c3b" }}
                            ></i>
                            Not Verified..{" "}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Offers Posted</h2>
                      </div>
                    </div>
                    <div className="row products_posted">
                      {user?.offersPosted?.map((item, index) => (
                        <div className="col-4 mb-4">
                          <Link
                            to="/admin/offer-details"
                            className="products_posted_box"
                            state={{ id: item?._id }}
                          >
                            {item?.cover_image_mime_type === "video" ? (
                              <iframe
                                className="main_img"
                                allow="autoplay"
                                width="550px"
                                height="310px"
                                src={
                                  item?.cover_image
                                    ? item?.cover_image
                                    : "../../assets/img/upload_file.png"
                                }
                                alt=""
                              />
                            ) : (
                              <img
                                className="main_img"
                                src={
                                  item?.cover_image
                                    ? item?.cover_image
                                    : require("../../assets/img/product1.png")
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
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Offers</h2>
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
                              As a Seller
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
                              As a Buyer
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
                            <div className="row p-4 mx-0">
                              {/* <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_pending">
                                      Pending
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Highest Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Requests :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              5 Offers
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_accepted">
                                      Accepted
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Highest Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Buyer Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img3.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_Sold">
                                      Sold
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Sold For :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Buyer Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <div className="row p-4 mx-0">
                              {user?.offersAsBuyer?.map((item, index) => (
                                <div className="col-4 my-3 d-flex align-items-stretch">
                                  <div className="Offers_box w-100">
                                    <div className="Offers_box_img">
                                      <img
                                        src="../assets/img/admin/product_img1.png"
                                        alt=""
                                      />
                                      <span className="month_tag">
                                        {MonthsAgo(item?.createdAt)} days ago
                                      </span>
                                      <div className="offer_tag offer_pending">
                                        {item?.status}
                                      </div>
                                    </div>
                                    <div className="content_offer">
                                      <h2>{item?.offer?.title}</h2>
                                      <div className="row mt-2">
                                        <div className="col-12">
                                          <div className="row content_offer_inner">
                                            <div className="col-6 text-end">
                                              <strong className="box_tag_left">
                                                Actual Price :
                                              </strong>
                                            </div>
                                            <div className="col-6">
                                              <span className="box_tag_left">
                                                {item?.offer?.price} SAR
                                              </span>
                                            </div>
                                          </div>
                                          <div className="row content_offer_inner">
                                            <div className="col-6 text-end">
                                              <strong className="box_tag_left">
                                                Offer Sent :
                                              </strong>
                                            </div>
                                            <div className="col-6">
                                              <span className="box_tag_left">
                                                {item?.price} SAR
                                              </span>
                                            </div>
                                          </div>
                                          <div className="row content_offer_inner">
                                            <div className="col-6 text-end">
                                              <strong className="box_tag_left">
                                                Seller Name :
                                              </strong>
                                            </div>
                                            <div className="col-6">
                                              <span className="box_tag_left">
                                                <Link to="/admin/user-details">
                                                  {item?.user?.username}
                                                </Link>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}

                              {/* <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_accepted">
                                      Accepted
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Offer Sent :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img3.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_declained">
                                      Offer Declined
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Offer Sent :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <del>1500 SAR</del>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Trials Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              5 Offers
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_Sold">
                                      Sold
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Sold For :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag deleted">
                                      Deleted
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Offer Sent :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                              {/* <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_new">
                                      New Offer
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Offer Sent :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag deleted">
                                      New Offer Expired
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              New Offer :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <del>1500 SAR</del>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Expires In:
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              EXPIRED
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Trials Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              5 Offers
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Auctions & Bids</h2>
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
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              Auctions
                            </button>
                            <button
                              className="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              Bids
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home1-tab"
                          >
                            <div className="row p-4 mx-0">
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_pending">
                                      Pending
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Highest Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Time Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              3d 20h / 5 Bids
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_accepted">
                                      Approved
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Highest Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Time Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              Open Auction / 5 Bids
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Buyer Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img3.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_pending">
                                      Pending
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Actual Price :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Highest Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Time Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              3d 20h / 5 Bids
                                            </span>
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
                            className="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div className="row p-4 mx-0">
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_declained">
                                      Outbid
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Your Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Current Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Time Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              3d 20h / 5 Bids
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_Sold">
                                      Sold
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Your Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Sold For :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              1500 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img3.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_pending">
                                      Highest
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Your Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Time Left :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              3d 20h / 5 Bids
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img1.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag deleted">
                                      Deleted
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Your Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-4 my-3 d-flex align-items-stretch">
                                <div className="Offers_box w-100">
                                  <div className="Offers_box_img">
                                    <img
                                      src="../assets/img/admin/product_img2.png"
                                      alt=""
                                    />
                                    <span className="month_tag">
                                      1 Month Ago
                                    </span>
                                    <div className="offer_tag offer_accepted">
                                      Won
                                    </div>
                                  </div>
                                  <div className="content_offer">
                                    <h2>Product Name</h2>
                                    <div className="row mt-2">
                                      <div className="col-12">
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Your Bid :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              2000 SAR
                                            </span>
                                          </div>
                                        </div>
                                        <div className="row content_offer_inner">
                                          <div className="col-6 text-end">
                                            <strong className="box_tag_left">
                                              Seller Name :
                                            </strong>
                                          </div>
                                          <div className="col-6">
                                            <span className="box_tag_left">
                                              <Link to="/admin/user-details">
                                                Ajay Sharma
                                              </Link>
                                            </span>
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
                  <a className="comman_btn mx-2" onClick={Yes}>
                    Yes
                  </a>
                  <a className="comman_btn2 mx-2 bg-red" onClick={No}>
                    NO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;

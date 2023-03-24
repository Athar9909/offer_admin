import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import i18next from "i18next";
import Swal from "sweetalert2";

function AdminSidebar({ getBarClick }) {
  const [sideBar, setSideBar] = useState(true);
  const [currentLangCode, setCurrentLangCode] = useState(
    Cookies.get("i18next") || "en"
  );

  const navigate = useNavigate();
  console.log(currentLangCode);
  let token = localStorage?.getItem("admin-log-token");
  let AdminDetails = JSON.parse(localStorage?.getItem("admin-data"));

  console.log(AdminDetails);

  if (!token) {
    Swal.fire({
      title: "Login Expired!",
      text: "Please Login to Continue.",
      icon: "warning",
      confirmButtonColor: "#da3c3b",
      confirmButtonText: "Okay",
    }).then((res) => {
      navigate("/admin/login");
    });
  }
  useEffect(() => {
    if (currentLangCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLangCode]);

  const handleLogout = () => {
    localStorage.removeItem("admin-log-token");
    localStorage.removeItem("admin-data");
  };
  return (
    <>
      <div className={sideBar ? "siderbar_section" : " d-none"}>
        <div className="siderbar_inner">
          <div className="sidebar_logo">
            <Link to="">
              <img src="../assets/img/admin/logo.png" alt="Logo" />{" "}
            </Link>
          </div>
          <diV className="sidebar_menus">
            <ul className="list-unstyled ps-1 m-0">
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/dashboard") ||
                    window.location.href.includes(
                      "/admin/recent-orders-details"
                    )
                      ? "active"
                      : ""
                  }
                  to="/admin/dashboard"
                >
                  <i className="fal fa-home"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/user") ? "active" : ""
                  }
                  to="/admin/users-management"
                >
                  <i className="fal fa-user"></i>Users Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/category")
                      ? "active"
                      : ""
                  }
                  to="/admin/category-management"
                >
                  <i className="fas fa-list-ol"></i>Category Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/offer")
                      ? "active"
                      : ""
                  }
                  to="/admin/offer-management"
                >
                  <i className="fad fa-gift-card"></i>Offers Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/order")
                      ? "active"
                      : ""
                  }
                  to="/admin/order-management"
                >
                  <i className="fal fa-box-full"></i>Order Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/staff")
                      ? "active"
                      : ""
                  }
                  to="/admin/staff-management"
                >
                  <i className="fal fa-clipboard-user"></i>Staff Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/transaction")
                      ? "active"
                      : ""
                  }
                  to="/admin/transaction-management"
                >
                  <i className="fal fa-repeat-1"></i>Transaction Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/report")
                      ? "active"
                      : ""
                  }
                  to="/admin/report-management"
                >
                  <i className="fal fa-file-spreadsheet"></i>Reports Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes(
                      "/admin/home-screen-banner-management"
                    )
                      ? "active"
                      : ""
                  }
                  to="/admin/home-screen-banner-management"
                >
                  <i className="fal fa-sign-in-alt"></i>Home Screen Banners
                  Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/notification")
                      ? "active"
                      : ""
                  }
                  to="/admin/notification-management"
                >
                  <i className="far fa-bell"></i>Notification Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/announcement")
                      ? "active"
                      : ""
                  }
                  to="/admin/announcement-management"
                >
                  <i className="fal fa-bullhorn"></i> Announcement Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/thoughts")
                      ? "active"
                      : ""
                  }
                  to="/admin/thoughts-management"
                >
                  <i className="fal fa-lightbulb-on"></i> Thoughts Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/content")
                      ? "active"
                      : ""
                  }
                  to="/admin/content-management"
                >
                  <i className="fal fa-edit"></i>Content Management
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/informations")
                      ? "active"
                      : ""
                  }
                  to="/admin/informations"
                >
                  <i className="fal fa-info-circle"></i>informations
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/contact-us")
                      ? "active"
                      : ""
                  }
                  to="/admin/contact-us"
                >
                  <i className="fal fa-user-edit"></i>Contact us
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/help-support")
                      ? "active"
                      : ""
                  }
                  to="/admin/help-support-management"
                >
                  <i className="fal fa-hands-heart"></i>Help & Support
                </Link>
              </li>
            </ul>
          </diV>
        </div>
      </div>
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col-auto ">
            {sideBar ? (
              <a
                className="sidebar_btn"
                onClick={() => {
                  setSideBar(!sideBar);
                  getBarClick("click");
                }}
              >
                <i class="fal fa-bars "></i>
              </a>
            ) : (
              <a
                className="sidebar_btn border rounded-circle px-2 "
                style={{ backgroundColor: "#dc3545" }}
                onClick={() => {
                  setSideBar(!sideBar);
                  getBarClick("close");
                }}
              >
                x
              </a>
            )}
          </div>
          <div className="col-auto d-flex align-items-center">
            <Link
              className="change_language"
              to=""
              onClick={() => {
                i18next.changeLanguage(currentLangCode === "en" ? "ar" : "en");
                setCurrentLangCode(currentLangCode === "en" ? "ar" : "en");
              }}
            >
              <img
                className="mx-2"
                src={
                  currentLangCode === "en"
                    ? "../assets/img/admin/saudi_flag1.png"
                    : "../assets/img/admin/united-kingdom.png"
                }
                alt=""
              />
              {currentLangCode === "en" ? "عربى" : "English"}
            </Link>
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={
                    AdminDetails?.image
                      ? AdminDetails?.image
                      : "../assets/img/admin/profile_img1.jpg"
                  }
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/admin/edit-profile">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/change-password">
                    Change Password
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    onClick={handleLogout}
                    to="/admin/login"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;

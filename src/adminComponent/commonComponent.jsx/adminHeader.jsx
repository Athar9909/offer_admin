import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import i18next from "i18next";
import Swal from "sweetalert2";

function AdminHeader({ getBarClick }) {
  const [currentLangCode, setCurrentLangCode] = useState(
    Cookies.get("i18next") || "en"
  );
  const [sideBar, setSideBar] = useState(true);

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
                className="sidebar_btn"
                onClick={() => {
                  setSideBar(!sideBar);
                  getBarClick("close");
                }}
              >
                <i class="fa fa-close "></i>
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

export default AdminHeader;

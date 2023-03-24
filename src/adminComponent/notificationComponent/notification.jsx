import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import CustomNotification from "./customNotification";
import ReportNotification from "./reportNotification";

function Notification() {
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row transaction-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Notifications</h2>
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
                              Report Notification
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
                              Custom Notification
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
                            <ReportNotification />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <CustomNotification />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>
                          Notification <span>(10)</span>
                        </h2>
                      </div>
                      <div className="col-3 Searchbox">
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
                            <i className="fas fa-calendar-alt"></i>
                          </a>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="">
                                2001
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2002
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2003
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2004
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2005
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2006
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2007
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2008
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2009
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2010
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="">
                                2011
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row p-4">
                      <div className="col-12">
                        <div className="category_btns_main">
                          <div className="row mb-5">
                            <div className="col">
                              <a
                                className="category_btns active"
                                href="javscript:;"
                              >
                                All <span>(100)</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="category_btns" href="javscript:;">
                                Category <span>1</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="category_btns" href="javscript:;">
                                Category <span>2</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="category_btns" href="javscript:;">
                                Category <span>3</span>
                              </a>
                            </div>
                            <div className="col">
                              <a className="category_btns" href="javscript:;">
                                Category <span>4</span>
                              </a>
                            </div>
                          </div>
                          <div className="row mx-0 notification-box shadow mb-4">
                            <div className="col-2">
                              <div className="notification_icon">
                                <i className="far fa-bell"></i>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Order Received</h2>
                                <span className="">13-08-2022 13:35</span>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Sequi laboriosam minima
                                  pariatur quod illo a enim ut officia porro
                                  ipsa? Quod,
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mx-0 notification-box shadow mb-4">
                            <div className="col-2">
                              <div className="notification_icon">
                                <i className="far fa-bell"></i>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Order Received</h2>
                                <span className="">13-08-2022 13:35</span>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Sequi laboriosam minima
                                  pariatur quod illo a enim ut officia porro
                                  ipsa? Quod,
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mx-0 notification-box shadow mb-4">
                            <div className="col-2">
                              <div className="notification_icon">
                                <i className="far fa-bell"></i>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Order Received</h2>
                                <span className="">13-08-2022 13:35</span>
                                <p>
                                  Lorem ipsum, dolor sit amet consectetur
                                  adipisicing elit. Sequi laboriosam minima
                                  pariatur quod illo a enim ut officia porro
                                  ipsa? Quod,
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
    </>
  );
}

export default Notification;

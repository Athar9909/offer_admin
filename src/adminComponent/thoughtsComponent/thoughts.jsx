import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Thoughts() {
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  return (
    <>
      {" "}
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row transaction-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>
                          Thoughts Management <span>(33)</span>
                        </h2>
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
                        <input type="date" class="custom_date" />
                      </div>
                    </div>
                    <div className="row p-4">
                      <div className="col-12">
                        <div className="category_btns_main">
                          <div className="row mx-0 notification-box shadow mb-4">
                            <div className="col-2">
                              <div className="notification_icon notification-imgg">
                                <div>
                                  <img
                                    src="../assets/img/admin/profile_img1.jpg"
                                    alt=""
                                  />
                                  <strong>
                                    <Link to="/admin/user-details">
                                      Ajay Sharma
                                    </Link>
                                  </strong>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Thought</h2>
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
                              <div className="notification_icon notification-imgg">
                                <div>
                                  <img
                                    src="../assets/img/admin/profile_img1.jpg"
                                    alt=""
                                  />
                                  <strong>
                                    <Link to="/admin/user-details">
                                      Ajay Sharma
                                    </Link>
                                  </strong>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Thought</h2>
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
                              <div className="notification_icon notification-imgg">
                                <div>
                                  <img
                                    src="../assets/img/admin/profile_img1.jpg"
                                    alt=""
                                  />
                                  <strong>
                                    <Link to="/admin/user-details">
                                      Ajay Sharma
                                    </Link>
                                  </strong>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>New Thought</h2>
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
      </div>{" "}
    </>
  );
}

export default Thoughts;

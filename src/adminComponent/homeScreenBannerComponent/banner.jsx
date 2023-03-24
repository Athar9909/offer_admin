import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Banner() {
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
            <div className="row signup_management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Home Screen Banners</h2>
                      </div>

                      <div className="col-auto">
                        <button
                          className="comman_btn2 mx-2"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop4"
                        >
                          Preview
                        </button>

                        <button className="comman_btn2">Save</button>
                      </div>
                    </div>

                    <form
                      className="form-design py-5 px-1 row mx-0 align-items-end justify-content-between"
                      action=""
                    >
                      <div className="col-md-4">
                        <div className="row Onboarding_box mb-4 mx-0">
                          <span className="head_spann">Home Screen 1</span>
                          <div className="form-group mb-0 col-12">
                            <div className="banner-profile position-relative">
                              <div className="banner-Box bg-dark">
                                <img
                                  className="home-banner"
                                  src="../assets/img/admin/Group 3994.png"
                                />
                              </div>
                              <div className="p-image">
                                <i className="upload-button fas fa-camera"></i>
                                <input
                                  className="file-upload"
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-0 col-12">
                            <label for="">Upload Url</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row Onboarding_box mb-4 mx-0">
                          <span className="head_spann">Home Screen 2</span>
                          <div className="form-group mb-0 col-12">
                            <div className="banner-profile position-relative">
                              <div className="banner-Box bg-dark">
                                <img
                                  className="home-banner"
                                  src="../assets/img/admin/Group 3994.png"
                                />
                              </div>
                              <div className="p-image">
                                <i className="upload-button fas fa-camera"></i>
                                <input
                                  className="file-upload"
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-0 col-12">
                            <label for="">Upload Url</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row Onboarding_box mb-4 mx-0">
                          <span className="head_spann">Home Screen 3</span>
                          <div className="form-group mb-0 col-12">
                            <div className="banner-profile position-relative">
                              <div className="banner-Box bg-dark">
                                <img
                                  className="home-banner"
                                  src="../assets/img/admin/Group 3994.png"
                                />
                              </div>
                              <div className="p-image">
                                <i className="upload-button fas fa-camera"></i>
                                <input
                                  className="file-upload"
                                  type="file"
                                  accept="image/*"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-0 col-12">
                            <label for="">Upload Url</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal  fade Edit_modal"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6 p-3 text-center">
                  <img
                    className="demo_img"
                    src="../assets/img/admin/Picsart_22-12-09_13-51-53-094.png"
                    alt=""
                  />
                </div>
                <div className="col-6 p-3 text-center ">
                  <img
                    className="demo_img2"
                    src="../assets/img/admin/Picsart_22-12-09_13-49-54-977.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 p-3 text-center">
                  <h1>Android</h1>
                </div>
                <div className="col-6 p-3 text-center ">
                  <h1>IPhone</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

const ContactUs = () => {
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
            <div className="row help&support-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Contact Us</h2>
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
                            <i className="far fa-search" />
                          </div>
                        </form>
                      </div>
                      <div class="col-auto">
                        <input type="date" class="custom_date" />
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group mb-0 col-5">
                        <label htmlFor="">From</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label htmlFor="">To</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <button className="comman_btn2">Search</button>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>User Name</th>
                                <th>E-mail</th>
                                <th>Subject</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Ajay Sharma</td>
                                <td>xyz@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>March 28,2022</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      <input
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2"
                                        defaultChecked=""
                                        type="checkbox"
                                        name="check1"
                                        id="check1"
                                        className="d-none"
                                      />{" "}
                                      <label htmlFor="check1" />
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn table_viewbtn"
                                    href="javscript:;"
                                  >
                                    View
                                  </a>
                                  <a
                                    className="comman_btn2 table_viewbtn"
                                    href="javscript:;"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Ajay Sharma</td>
                                <td>xyz@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>March 28,2022</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      <input
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2"
                                        defaultChecked=""
                                        type="checkbox"
                                        name="check2"
                                        id="check2"
                                        className="d-none"
                                      />{" "}
                                      <label htmlFor="check2" />
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn table_viewbtn"
                                    href="javscript:;"
                                  >
                                    View
                                  </a>
                                  <a
                                    className="comman_btn2 table_viewbtn"
                                    href="javscript:;"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Ajay Sharma</td>
                                <td>xyz@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>March 28,2022</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      <input
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2"
                                        defaultChecked=""
                                        type="checkbox"
                                        name="check3"
                                        id="check3"
                                        className="d-none"
                                      />{" "}
                                      <label htmlFor="check3" />
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn table_viewbtn"
                                    href="javscript:;"
                                  >
                                    View
                                  </a>
                                  <a
                                    className="comman_btn2 table_viewbtn"
                                    href="javscript:;"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Ajay Sharma</td>
                                <td>xyz@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td>March 28,2022</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      <input
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop2"
                                        defaultChecked=""
                                        type="checkbox"
                                        name="check4"
                                        id="check4"
                                        className="d-none"
                                      />{" "}
                                      <label htmlFor="check4" />
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn table_viewbtn"
                                    href="javscript:;"
                                  >
                                    View
                                  </a>
                                  <a
                                    className="comman_btn2 table_viewbtn"
                                    href="javscript:;"
                                  >
                                    Delete
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
        class="modal fade reply_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                DESCRIPTION
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body py-4">
              <div class="chatpart_main">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  ut soluta, debitis provident reiciendis architecto.
                  Reprehenderit et labore saepe, dolor ullam commodi fugiat
                  dolorum tempora voluptatem explicabo delectus ducimus
                  quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade Update_modal"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body p-4">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="row">
                <div class="col-12 Update_modal_content py-4">
                  <h2>Update</h2>
                  <p>Are you sure, Want to update this?</p>
                  <a
                    class="comman_btn mx-2"
                    data-bs-dismiss="modal"
                    href="javscript:;"
                  >
                    Yes
                  </a>
                  <a
                    class="comman_btn2 mx-2 bg-red"
                    data-bs-dismiss="modal"
                    href="javscript:;"
                  >
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
};

export default ContactUs;

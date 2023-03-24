import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Report() {
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
              <div className="col-12 design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col">
                    <h2>Reports Management</h2>
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
                          User{" "}
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
                          {" "}
                          Products{" "}
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
                        <div className="row mx-0">
                          <div className="col-12">
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
                                        <th>Reporter</th>
                                        <th>Reported Against</th>
                                        <th>Reason</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Inappropriate</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Spam</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Inappropriate</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Spam</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
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
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div className="row mx-0">
                          <div className="col-12">
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
                                        <th>Reporter</th>
                                        <th>Product Name</th>
                                        <th>Reported Against</th>
                                        <th>Reason</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Ajay Sharma</td>
                                        <td>Lorem</td>
                                        <td>Ram Jain</td>
                                        <td>Inappropriate</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="offer-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Ajay Sharma</td>
                                        <td>Lorem</td>
                                        <td>Ram Jain</td>
                                        <td>Spam</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="offer-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Ajay Sharma</td>
                                        <td>Lorem</td>
                                        <td>Ram Jain</td>
                                        <td>Inappropriate</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="offer-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Ajay Sharma</td>
                                        <td>Lorem</td>
                                        <td>Ram Jain</td>
                                        <td>Spam</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="offer-details.html"
                                          >
                                            View
                                          </a>
                                          <a
                                            className="comman_btn ms-1 table_viewbtn"
                                            href="javascript:;"
                                          >
                                            Notify
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
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade Edit_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit Staff Member
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                class="form-design p-3 help-support-form row align-items-start justify-content-center"
                action=""
              >
                <div class="form-group col-6">
                  <label for="">Staff Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Ajay Sharma"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    value="user@gmail.com"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="form-group col-12">
                  <label for="">Select Module</label>
                  <select class="select form-control" multiple name="" id="">
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
                <div class="form-group col-6">
                  <label for="">Password</label>
                  <input
                    type="text"
                    class="form-control"
                    value="asdasd123123"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="">Confirm Password</label>
                  <input
                    type="text"
                    class="form-control"
                    value="asdasd123123"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="form-group mb-0 col-auto">
                  {" "}
                  <button class="comman_btn2">Save</button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;

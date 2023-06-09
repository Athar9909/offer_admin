import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Transaction() {
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
                    <h2>Transaction Management</h2>
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
                  <div className="col-auto Searchbox">
                    <button className="comman_btn2">
                      <i className="fal fa-download me-2" />
                      Excel
                    </button>
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
                          Orders{" "}
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
                          Donations{" "}
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
                              <div className="form-group mb-0 col position-relative percent_mark">
                                <label htmlFor="">Commission</label>
                                <input type="text" className="form-control" />
                                <span>%</span>
                              </div>
                              <div className="form-group mb-0 col-auto">
                                <button className="comman_btn2">Save</button>
                              </div>
                            </form>
                            <div className="row">
                              <div className="col-12 comman_table_design px-0">
                                <div className="table-responsive">
                                  <table className="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Date</th>
                                        <th>Order ID</th>
                                        <th>Seller Name</th>
                                        <th>Buyer Name</th>
                                        <th>Offer Type</th>
                                        <th>Price</th>
                                        <th>Commission</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>01/07/2022</td>
                                        <td>#12345</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Free</td>
                                        <td>--</td>
                                        <td>10%</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="transaction-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>01/07/2022</td>
                                        <td>#12345</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Fixed</td>
                                        <td>500 SAR</td>
                                        <td>10%</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="transaction-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>01/07/2022</td>
                                        <td>#12345</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Auction</td>
                                        <td>1000 SAR</td>
                                        <td>10%</td>
                                        <td>
                                          <Link
                                            className="comman_btn2 table_viewbtn"
                                            to="/admin/transaction-details"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>01/07/2022</td>
                                        <td>#12345</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Fixed</td>
                                        <td>500 SAR</td>
                                        <td>10%</td>
                                        <td>
                                          <Link
                                            className="comman_btn2 table_viewbtn"
                                            to="/admin/transaction-details"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>01/07/2022</td>
                                        <td>#12345</td>
                                        <td>Ajay Sharma</td>
                                        <td>Ram Jain</td>
                                        <td>Free</td>
                                        <td>--</td>
                                        <td>10%</td>
                                        <td>
                                          <Link
                                            className="comman_btn2 table_viewbtn"
                                            to="/admin/transaction-details"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="row Total_amt mx-0 my-3 py-3">
                              <div className="col-6 text-end">
                                <strong>Total Revenue : </strong>
                              </div>
                              <div className="col-6 text-start">
                                <span className="fw-bold fs-6 text-white table_viewbtn bg-dark ">
                                  2000 SAR
                                </span>
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
                            <div className="row">
                              <div className="col-12 comman_table_design px-0">
                                <div className="table-responsive">
                                  <table className="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>Date</th>
                                        <th>User Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>01/07/2022</td>
                                        <td>Ajay Sharma</td>
                                        <td>100 SAR</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>01/07/2022</td>
                                        <td>Ajay Sharma</td>
                                        <td>100 SAR</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>01/07/2022</td>
                                        <td>Ajay Sharma</td>
                                        <td>100 SAR</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>01/07/2022</td>
                                        <td>Ajay Sharma</td>
                                        <td>100 SAR</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>01/07/2022</td>
                                        <td>Ajay Sharma</td>
                                        <td>100 SAR</td>
                                        <td>
                                          <a
                                            className="comman_btn2 table_viewbtn"
                                            href="user-details.html"
                                          >
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="row Total_amt mx-0 my-3 py-3">
                              <div className="col-6 text-end">
                                <strong>Total Donations : </strong>
                              </div>
                              <div className="col-6 text-start">
                                <span className="fw-bold fs-6 text-white table_viewbtn bg-dark ">
                                  500 SAR
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
    </>
  );
}

export default Transaction;

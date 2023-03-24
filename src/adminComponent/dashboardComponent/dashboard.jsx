import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { dashboardCount } from "../httpService/DashboardHttp";
import AnimatedNumber from "react-animated-number/build/AnimatedNumber";
import { useState } from "react";

function Dashboard() {
  const initialValue = 0.0;
  const [state, setState] = useState(false);
  const [sideBar, setSideBar] = useState(true);

  useEffect(() => {
    getTotalData();
  }, []);

  const getTotalData = async () => {
    const data = await dashboardCount();
    localStorage.setItem("dashOffer", data?.data?.results.offers);
    localStorage.setItem("dashUser", data?.data?.results.users);
    setState(true);
  };

  let offersCount = localStorage.getItem("dashOffer");
  let usersCount = localStorage.getItem("dashUser");

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
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row ms-3 mb-5 justify-content-center">
                  <div className="col d-flex align-items-stretch">
                    <Link
                      to="/admin/users-management"
                      className="row dashboard_box box_design me-3 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Users</h2>
                          <span key={state}>
                            <AnimatedNumber
                              component="text"
                              style={{
                                transition: "1s ease-out",
                                fontSize: 17,
                                transitionProperty:
                                  "background-color, color, opacity",
                              }}
                              initialValue={initialValue}
                              value={usersCount}
                              stepPrecision={0}
                              duration={500}
                              formatValue={(n) =>
                                Intl.NumberFormat("en-US").format(n)
                              }
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <Link
                      to="/admin/order-management"
                      className="row dashboard_box box_design me-3 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fal fa-box-full"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Orders</h2>
                          <span>2000</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <Link
                      to="/admin/offer-management"
                      className="row dashboard_box box_design me-3 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fal fa-gift-card"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Offers</h2>
                          <span key={state}>
                            <AnimatedNumber
                              component="text"
                              style={{
                                transition: "1s ease-out",
                                fontSize: 17,
                                transitionProperty:
                                  "background-color, color, opacity",
                              }}
                              initialValue={initialValue}
                              value={offersCount}
                              stepPrecision={0}
                              duration={500}
                              formatValue={(n) =>
                                Intl.NumberFormat("en-US").format(n)
                              }
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col d-flex align-items-stretch pe-0">
                    <Link
                      to="/admin/transaction-management"
                      className="row dashboard_box box_design me-0 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="far fa-dollar-sign"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Total Revenue</h2>
                          <span>SAR 20000</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Recent Orders</h2>
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

                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group mb-0 col-5">
                        <label for="">From</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label for="">To</label>
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
                                <th>Seller Name</th>
                                <th>Buyer Name</th>
                                <th>Mobile Number</th>
                                <th>Order Date</th>
                                <th>Offer Type</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Ajay Sharma</td>
                                <td>Ram Jain</td>
                                <td>+966 9876543210</td>
                                <td>01/07/2022</td>
                                <td>Free</td>
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/recent-orders-details"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Ajay Sharma</td>
                                <td>Ram Jain</td>
                                <td>+966 9876543210</td>
                                <td>01/07/2022</td>
                                <td>Fixed</td>
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/recent-orders-details"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Ajay Sharma</td>
                                <td>Ram Jain</td>
                                <td>+966 9876543210</td>
                                <td>01/07/2022</td>
                                <td>Auction</td>
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/recent-orders-details"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Ajay Sharma</td>
                                <td>Ram Jain</td>
                                <td>+966 9876543210</td>
                                <td>01/07/2022</td>
                                <td>Fixed</td>
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/recent-orders-details"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Ajay Sharma</td>
                                <td>Ram Jain</td>
                                <td>+966 9876543210</td>
                                <td>01/07/2022</td>
                                <td>Free</td>
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/recent-orders-details"
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

export default Dashboard;

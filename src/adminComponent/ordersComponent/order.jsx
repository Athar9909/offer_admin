import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Order() {
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
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Order Management</h2>
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
                      <div className="col-auto">
                        <button className="comman_btn2">
                          <i className="fal fa-download me-2"></i>Excel
                        </button>
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
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Seller Name</th>
                                <th>Buyer Name</th>
                                <th>Offer Type</th>
                                <th>Price</th>
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
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/order-details"
                                  >
                                    View
                                  </Link>
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
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/order-details"
                                  >
                                    View
                                  </Link>
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
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/order-details"
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
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/order-details"
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
                                <td>
                                  <Link
                                    className="comman_btn2 table_viewbtn"
                                    to="/admin/order-details"
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

export default Order;

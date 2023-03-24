import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Staff() {
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
            <div className="row staff-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Add New Staff Member</h2>
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group col-4">
                        <label for="">Staff Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value=""
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group col-4">
                        <label for="">Select Module</label>
                        <select
                          className="select form-control"
                          multiple
                          name=""
                          id=""
                        >
                          <option value="1">Lorem</option>
                          <option value="2">ipsum</option>
                          <option value="3">Lorem</option>
                          <option value="1">Lorem</option>
                          <option value="2">ipsum</option>
                          <option value="3">Lorem</option>
                        </select>
                      </div>
                      <div className="form-group col-4">
                        <label for="">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value=""
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group mb-0 col">
                        <label for="">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          value=""
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group mb-0 col">
                        <label for="">Confirm Password</label>
                        <input
                          type="text"
                          className="form-control"
                          value=""
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <button className="comman_btn2">Save</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Staff Management</h2>
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
                                <th>Date</th>
                                <th>Staff Name</th>
                                <th>Email</th>
                                <th>Modules</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>01/07/2022</td>
                                <td>Ajay Sharma</td>
                                <td>user@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      {" "}
                                      <input
                                        checked
                                        type="checkbox"
                                        name="check1"
                                        id="check1"
                                        className="d-none"
                                      />{" "}
                                      <label for="check1"></label>{" "}
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn2 table_viewbtn"
                                    href=""
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>01/07/2022</td>
                                <td>Ajay Sharma</td>
                                <td>user@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      {" "}
                                      <input
                                        checked
                                        type="checkbox"
                                        name="check2"
                                        id="check2"
                                        className="d-none"
                                      />{" "}
                                      <label for="check2"></label>{" "}
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn2 table_viewbtn"
                                    href=""
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>01/07/2022</td>
                                <td>Ajay Sharma</td>
                                <td>user@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      {" "}
                                      <input
                                        checked
                                        type="checkbox"
                                        name="check3"
                                        id="check3"
                                        className="d-none"
                                      />{" "}
                                      <label for="check3"></label>{" "}
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn2 table_viewbtn"
                                    href=""
                                  >
                                    Edit
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>01/07/2022</td>
                                <td>Ajay Sharma</td>
                                <td>user@gmail.com</td>
                                <td>Lorem ipsum</td>
                                <td>
                                  <form className="table_btns d-flex align-items-center">
                                    <div className="check_toggle">
                                      {" "}
                                      <input
                                        checked
                                        type="checkbox"
                                        name="check4"
                                        id="check4"
                                        className="d-none"
                                      />{" "}
                                      <label for="check4"></label>{" "}
                                    </div>
                                  </form>
                                </td>
                                <td>
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    className="comman_btn2 table_viewbtn"
                                    href=""
                                  >
                                    Edit
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
        className="modal fade Edit_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Staff Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-design p-3 help-support-form row align-items-start justify-content-center"
                action=""
              >
                <div className="form-group col-6">
                  <label for="">Staff Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value="Ajay Sharma"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group col-6">
                  <label for="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value="user@gmail.com"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group col-12">
                  <label for="">Select Module</label>
                  <select
                    className="select form-control"
                    multiple
                    name=""
                    id=""
                  >
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
                <div className="form-group col-6">
                  <label for="">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value="asdasd123123"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group col-6">
                  <label for="">Confirm Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value="asdasd123123"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group mb-0 col-auto">
                  {" "}
                  <button className="comman_btn2">Save</button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;

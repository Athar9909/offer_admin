import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

function Support() {
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
            <div className="row help&support-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Add New Help Category</h2>
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group col-6">
                        <label htmlFor="">Category (En)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="">Category (Ar)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col">
                        <label htmlFor="">Sub Category (En)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col">
                        <label htmlFor="">Sub Category (Ar)</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <button className="comman_btn2">Add</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Help</h2>
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
                                <th>Category (En)</th>
                                <th>Category (Ar)</th>
                                <th>Sub Category (En)</th>
                                <th>Sub Category (Ar)</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Electronic</td>
                                <td>إلكتروني</td>
                                <td>Iphone</td>
                                <td>ايفون</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="help-view.html"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Electronic</td>
                                <td>إلكتروني</td>
                                <td>Iphone</td>
                                <td>ايفون</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="help-view.html"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Electronic</td>
                                <td>إلكتروني</td>
                                <td>Iphone</td>
                                <td>ايفون</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="help-view.html"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Electronic</td>
                                <td>إلكتروني</td>
                                <td>Iphone</td>
                                <td>ايفون</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="help-view.html"
                                  >
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Electronic</td>
                                <td>إلكتروني</td>
                                <td>Iphone</td>
                                <td>ايفون</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="help-view.html"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade reply_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                DESCRIPTION
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-4">
              <div className="chatpart_main">
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
        className="modal fade Update_modal"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-4">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row">
                <div className="col-12 Update_modal_content py-4">
                  <h2>Update</h2>
                  <p>Are you sure, Want to update this?</p>
                  <a className="comman_btn mx-2" href="javscript:;">
                    Yes
                  </a>
                  <a className="comman_btn2 mx-2 bg-red" href="javscript:;">
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
}

export default Support;

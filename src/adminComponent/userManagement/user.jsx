import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { useState } from "react";
import { useEffect } from "react";
import {
  AllUsers,
  changeUserStatus,
  exportUser,
} from "../httpService/DashboardHttp";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const User = () => {
  const [values, setValues] = useState({ from: "", to: "" });
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA1X0VM5k6DeAGJSWM6W8KkPCVYnohdTg8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [change, setChange] = useState();
  const [user, setUser] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 100,
      },
      {
        label: "User Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Mobile Number",
        field: "mobile_number",
        sort: "asc",
        width: 100,
      },
      {
        label: "Registration Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total Offers",
        field: "total_offer",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getAllUsers();
  }, [change]);

  const getAllUsers = async (date) => {
    await AllUsers({ year: date, from: values.from, to: values.to }).then(
      (res) => {
        const newRows = [];
        if (res) {
          let data = res?.data?.results?.users;
          data?.map((list, index) => {
            const returnData = {};
            returnData.sn = index + 1;
            returnData.name = list?.username;
            returnData.mobile_number = list?.phone_number;
            returnData.date = moment(list?.createdAt).format("L");
            returnData.total_offer = list?.offer;

            returnData.status = (
              <div className="check_toggle" key={list?._id}>
                <input
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  type="checkbox"
                  defaultChecked={list?.status}
                  name="check1"
                  id={list?._id}
                  className="d-none"
                  onClick={() => {
                    UserStatus(list?._id);
                  }}
                />
                <label for={list?._id}></label>
              </div>
            );

            returnData.action = (
              <>
                <Link
                  className="comman_btn2 table_viewbtn"
                  to="/admin/user-details"
                  state={{ id: list?._id }}
                >
                  View
                </Link>
              </>
            );
            newRows.push(returnData);
          });

          setUser({ ...user, rows: newRows });
        }
      }
    );
  };

  const handleDate = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const UserStatus = async (id) => {
    setUserId(id);
  };
  const Yes = async (e) => {
    e.preventDefault();
    const { data } = await changeUserStatus(userId);
    if (!data?.error) {
      document.getElementById("modalClose").click();
      getAllUsers();
    }
  };

  const Export = async () => {
    const { data } = await exportUser();
  };
  const No = (e) => {
    e.preventDefault();
    document.getElementById("modalClose").click();
    setChange(!change);
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="mb-3 shadow rounded"></div>
                  <div id="map-canvas" class="mb-5 shadow rounded px-0">
                    {isLoaded ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5}
                        onLoad={onLoad}
                        // onUnmount={onUnmount}
                      >
                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                      </GoogleMap>
                    ) : null}
                  </div>

                  <div></div>

                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>Users Management</h2>
                      </div>
                      {/* <div className="col-3">
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
                      </div> */}
                      <div className="col-auto">
                        <button className="comman_btn" onClick={Export}>
                          <i className="fal fa-download me-2"></i>Excel
                        </button>
                      </div>
                      <div class="col-auto">
                        <input
                          type="date"
                          class="custom_date"
                          onChange={(e) => getAllUsers(e.target.value)}
                        />
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group mb-0 col-5">
                        <label for="">From</label>
                        <input
                          type="date"
                          className="form-control"
                          name="from"
                          value={values.from}
                          onChange={handleDate}
                        />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label for="">To</label>
                        <input
                          type="date"
                          className="form-control"
                          name="to"
                          value={values.to}
                          onChange={handleDate}
                        />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <a
                          className="comman_btn2"
                          onClick={() => getAllUsers()}
                        >
                          Search
                        </a>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive p-1">
                          <MDBDataTable
                            bordered
                            displayEntries={false}
                            className="userDatable"
                            hover
                            data={user}
                            noBottomColumns
                            sortable
                          />
                        
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
        className="modal fade Update_modal"
        id="staticBackdrop"
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
                id="modalClose"
              ></button>
              <div className="row">
                <div className="col-12 Update_modal_content py-4">
                  <h2>Update</h2>
                  <p>Are you sure you want to disable this user?</p>
                  <a
                    className="comman_btn mx-2"
                    href="javscript:;"
                    onClick={Yes}
                  >
                    Yes
                  </a>
                  <a
                    className="comman_btn2 mx-2 bg-red"
                    href="javscript:;"
                    onClick={No}
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

export default User;

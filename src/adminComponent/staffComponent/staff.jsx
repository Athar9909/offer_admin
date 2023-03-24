import React, { useState } from "react";
import { default as ReactSelect } from "react-select";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Swal from "sweetalert2";
import { AddStaff, getAllStaff } from "../httpService/DashboardHttp";
import { Link } from "react-router-dom";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import { useEffect } from "react";
// const Option = (props) => {
//   return (
//     <div>
//       <components.Option {...props} className="d-flex ">
//         <input
//           type="checkbox"
//           className="border border-secondary"
//           checked={props.isSelected}
//           onChange={() => null}
//         />{" "}
//         <label className="mx-2 mt-1">{props.label}</label>
//       </components.Option>
//     </div>
//   );
// };
function Staff() {
  const [sideBar, setSideBar] = useState(true);
  const options = [
    { value: "dashboard", label: "Dashboard" },
    { value: "user", label: "User Management" },
    {
      value: "category",
      label: "Categories Management",
    },
    { value: "offer", label: "Offers Management" },
    { value: "order", label: "Orders Management" },
    { value: "staff", label: "Staff Management" },
    { value: "transaction", label: "Transaction Management" },
    { value: "report", label: "Reports Management" },
    { value: "notification", label: "Notifications Management" },
    { value: "announcement", label: "Announcements Management" },
    { value: "thoughts", label: "Thoughts Management" },
    { value: "content", label: "Content Management" },
    { value: "information", label: "Information Management" },
    { value: "contactus", label: "Contact-Us" },
    { value: "help", label: "Help&Support Management" },
  ];
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectEditOptions, setSelectEditOptions] = useState([]);
  const [staffId, setStaffId] = useState();
  const [staff, setStaff] = useState({
    columns: [
      {
        label: "S.NO",
        field: "sn",
        sort: "asc",
        width: 100,
      },
      {
        label: "DATE",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "STAFF NAME",
        field: "name",
        sort: "asc",
        width: 150,
      },

      {
        label: "EMAIL",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "MODULES",
        field: "module",
        sort: "asc",
        width: 150,
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
    getStaff();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (selected) => {
    setSelectOptions({
      optionSelected: selected,
    });
  };

  function togglePassword() {
    var x = document.getElementById("password-Input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function togglePassword2() {
    var x = document.getElementById("password-Input2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const onSubmit = async (data) => {
    if (
      data?.ConfirmPassword !== data?.NewPassword &&
      data?.NewPassword !== data?.ConfirmPassword
    ) {
      Swal.fire({
        title: "Error",
        text: "Confirm password should be same as New password",
        icon: "warning",
        button: "okay",
        confirmButtonColor: "#e25829",
      });
    }
    console.log(data, selectOptions);

    const { response } = await AddStaff({
      name: data?.name?.trim(),
      email: data?.email?.trim(),
      access: (selectOptions.optionSelected || [])?.map((item) => item?.value),
      password: data?.ConfirmPassword,
      type: "subAdmin",
    });
    if (!response.error) {
      setSelectOptions({ optionSelected: [] });
    }
  };

  const getStaff = async (date) => {
    await getAllStaff({ year: date }).then((res) => {
      const newRows = [];
      if (res) {
        let data = res?.data?.results?.staff;
        data?.map((list, index) => {
          const returnData = {};
          returnData.sn = index + 1;
          returnData.name = list?.name;
          returnData.email = list?.email;
          returnData.date = moment(list?.createdAt).format("L");
          returnData.module = (
            <ol>
              {list?.access?.map((li, ind) => (
                <li key={ind}>{li}</li>
              ))}
            </ol>
          );

          returnData.status = (
            <div className="check_toggle" key={list?._id}>
              <input
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
              <a
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="comman_btn2 table_viewbtn"
              >
                Edit
              </a>
            </>
          );
          newRows.push(returnData);
        });

        setStaff({ ...staff, rows: newRows });
      }
    });
  };

  const UserStatus = async (id) => {
    setStaffId(id);
  };

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
                  <div className="col-12 design_outter_comman_admin shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Add New Staff Member</h2>
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row  justify-content-between"
                      action=""
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-4">
                        <label for="">Staff Name</label>
                        <input
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.name,
                          })}
                          name="name"
                          {...register("name", {
                            required: "Name is required!",
                            pattern: {
                              value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                              message: "Special Character not allowed!",
                            },
                            maxLength: {
                              value: 20,
                              message: "Max length is 15 characters!",
                            },
                          })}
                        />
                        {errors.name && (
                          <small className="errorText mx-1">
                            *{errors.name?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4 module">
                        <label for="">Select Module</label>
                        <ReactSelect
                          options={options}
                          isMulti
                          closeMenuOnSelect={false}
                          hideSelectedOptions={false}
                          // components={{
                          //   Option,
                          // }}
                          onChange={handleChange}
                          allowSelectAll={true}
                          value={selectOptions?.optionSelected}
                        />
                      </div>

                      <div className="form-group col-4">
                        <label for="">Email</label>
                        <input
                          type="email"
                          className={classNames("form-control", {
                            "is-invalid": errors.email,
                          })}
                          id="Email"
                          placeholder="user@gmail.com"
                          name="email"
                          {...register("email", {
                            required: "Please Enter Your Email",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <small className="errorText">
                            {errors.email?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group mb-0 col">
                        <label for="">Password</label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.NewPassword,
                          })}
                          id="password-Input"
                          placeholder="*********"
                          name="NewPassword"
                          {...register("NewPassword", {
                            required: "Please Enter New Password",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters (example:anasa123@)",
                            },
                          })}
                        />
                        <input
                          type="checkbox"
                          onClick={togglePassword}
                          className="showPassCheck"
                        />
                        <small className=" showPass">Show Password</small>
                        <br />
                        {errors.NewPassword && (
                          <small className="errorText ">
                            {errors.NewPassword?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group mb-0 col">
                        <label for="">Confirm Password</label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.ConfirmPassword,
                          })}
                          id="password-Input2"
                          placeholder="*********"
                          name="ConfirmPassword"
                          {...register("ConfirmPassword", {
                            required: "Please Enter Confirm Password",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters (example:anasa123@)",
                            },
                          })}
                        />
                        <input
                          type="checkbox"
                          onClick={togglePassword2}
                          className="showPassCheck"
                        />
                        <small className=" showPass">Show Password</small>
                        <br />
                        {errors.ConfirmPassword && (
                          <small className="errorText ">
                            {errors.ConfirmPassword?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group  col-auto mt-4">
                        <button className="comman_btn2 mt-1" type="submit">
                          Save
                        </button>
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
                          <MDBDataTable
                            bordered
                            displayEntries={false}
                            className="userDatable"
                            hover
                            data={staff}
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

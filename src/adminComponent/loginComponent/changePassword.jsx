import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { adminUpdatePassword } from "../httpService/LoginHttp";
import Swal from "sweetalert2";

function ChangePassword() {
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data?.newPassword !== data?.newPasswordConfirm) {
      Swal.fire({
        title: "Confirm password should be same as new password!",
        icon: "warning",
        confirmButtonColor: "#da3c3b",
        confirmButtonText: "Okay",
      });
    } else {
      const { res } = await adminUpdatePassword(data);
      if (!res.error) {
      }
    }
  };

  function togglePassword() {
    var x = document.getElementById("old-pass");
    var y = document.getElementById("new-pass");
    var z = document.getElementById("new-pass-confirm");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
      z.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
      z.type = "password";
    }
  }
  return (
    <>
      {" "}
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />

        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row">
              <div className="col-12 editprofile design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Change Password</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form
                      className="row form-design justify-content-center position-relative mx-0 p-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-12">
                        <label htmlFor="">
                          Old Password (ex:OfferUser123@)
                        </label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.password,
                          })}
                          name="password"
                          id="old-pass"
                          placeholder="**********"
                          {...register("password", {
                            required: "*Please Enter Your Old Password!",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message: "Invalid Password",
                            },
                          })}
                        />
                        {errors.password && (
                          <small className="errorText ">
                            {errors.password?.message}
                          </small>
                        )}
                      </div>
                      <Link className="showPass" to="/admin/login">
                        Forgot Password?
                      </Link>
                      <div className="form-group col-12">
                        <label htmlFor="">New Password</label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.newPasswordConfirm,
                          })}
                          name="newPasswordConfirm"
                          id="new-pass-confirm"
                          placeholder="**********"
                          {...register("newPasswordConfirm", {
                            required: "*Please Enter New Password!",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message: "Invalid Password",
                            },
                          })}
                        />
                        {errors.newPasswordConfirm && (
                          <small className="errorText ">
                            {errors.newPasswordConfirm?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label htmlFor="">Confirm New Password</label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.newPassword,
                          })}
                          name="newPassword"
                          id="new-pass"
                          placeholder="**********"
                          {...register("newPassword", {
                            required: "*Please Enter Confirm Password!",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message: "Invalid Password",
                            },
                          })}
                        />
                        {errors.newPassword && (
                          <small className="errorText ">
                            {errors.newPassword?.message}
                          </small>
                        )}
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          onClick={togglePassword}
                          className="showPassCheck"
                        />
                        <small className=" showPass">Show Passwords</small>
                      </div>
                      <div className="form-group col-12 text-center">
                        <button className="comman_btn" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
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

export default ChangePassword;

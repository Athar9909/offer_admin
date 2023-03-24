import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { adminEditProfile } from "../httpService/LoginHttp";

function EditProfile() {
  let AdminDetails = JSON.parse(localStorage?.getItem("admin-data"));
  const [files, setFiles] = useState();
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset({ email: AdminDetails?.email, name: AdminDetails?.name });
  }, []);

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("email", data?.email);
    formData.append("name", data?.name);
    formData.append("image", files?.image);
    const res = await adminEditProfile(formData);
    if (!res.data.error) {
      console.log(res);
    }
  };

  document.getElementById("new_img")?.addEventListener("change", function () {
    if (this.files[0]) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener("load", function (event) {
        document
          .getElementById("main_img")
          .setAttribute("src", event.target.result);
      });
    }
  });

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />

        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row">
              <div className="col-12 editprofile design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Edit Profile</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="row form-design justify-content-center position-relative mx-0 p-4"
                    >
                      <div className="form-group col-auto">
                        <div className="account_profile position-relative">
                          <div className="circle">
                            <img
                              className="profile-pic"
                              id="main_img"
                              src={
                                AdminDetails?.image
                                  ? AdminDetails?.image
                                  : "../assets/img/admin/profile_img1.jpg"
                              }
                            />
                          </div>
                          <div className="p-image">
                            <i className="upload-button fas fa-camera"></i>
                            <input
                              className="file-upload"
                              type="file"
                              id="new_img"
                              accept="image/*"
                              name="image"
                              onChange={(e) => onFileSelection(e, "image")}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-12">
                        <label for="">Full Name</label>
                        <input
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.name,
                          })}
                          placeholder="user@gmail.com"
                          name="name"
                          {...register("name", {
                            required: "Please Enter Your Name",
                            pattern: {
                              value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                              message: "Special Character not allowed!",
                            },
                          })}
                        />
                        {errors.name && (
                          <small className="errorText">
                            {errors.name?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label for="">Email Address</label>
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
                      <div className="form-group col-12 mt-2 text-center">
                        <button type="submit" className="comman_btn">
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

export default EditProfile;

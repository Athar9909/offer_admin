import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import Attributes from "./Attributes";
import SubCategory from "./subCategory";
import SubSubCategory from "./subSubCategory";
import Values from "./Values";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  AddCategory,
  AllCategory,
  changeCategoryStatus,
  changeCateShipStatus,
  editCategiry,
  getCategories,
} from "../httpService/DashboardHttp";
import Swal from "sweetalert2";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

function Category() {
  const [files, setFiles] = useState();
  const [id, setId] = useState();
  const [sideBar, setSideBar] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
  } = useForm();
  const [category, setCategory] = useState({
    columns: [
      {
        label: "S.NO.",
        field: "sn",
        sort: "asc",
        width: 150,
      },

      {
        label: "CATEGORY NAME (EN)",
        field: "name_en",
        sort: "asc",
        width: 150,
      },

      {
        label: "CATEGORY NAME (AR)",
        field: "name_ar",
        sort: "asc",
        width: 100,
      },
      {
        label: "MEDIA",
        field: "image",
        sort: "asc",
        width: 150,
      },
      {
        label: "SHIPMENT SERVICE",
        field: "shipment",
        sort: "asc",
        width: 100,
      },
      {
        label: "STATUS",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "ACTION",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const EditCate = async (i) => {
    setId(i);
    const { data } = await getCategories(i);
    if (!data?.error) {
      let info = data?.results?.category;
      // document.getElementById("image").value = info?.image;
      reset2({
        editCatename_en: info?.name_en,
        editCatename_ar: info?.name_ar,
      });
      setFiles({ editImage: info?.image });
    }
  };
  useEffect(() => {
    getAllCat();
  }, []);

  const getAllCat = async (date) => {
    const { data } = await AllCategory({ year: date });
    const newRows = [];
    if (!data.error) {
      let values = data?.results?.categories;
      console.log(values);
      values?.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1 + ".";
        returnData.image = (
          <img
            src={
              list?.image
                ? list?.image
                : require("../../assets/img/upload_file.png")
            }
            alt="image"
            className="table_img"
          />
        );
        returnData.name_en = list?.name_en;
        returnData.name_ar = list?.name_ar;
        returnData.shipment = (
          <form className="table_btns d-flex align-items-center">
            <div className="check_toggle">
              <input
                type="checkbox"
                name="s1"
                id={index}
                defaultChecked={list?.shipment_service}
                className="d-none"
                onClick={() => {
                  ShipmentStatus(list?._id);
                }}
              />
              <label for={index}></label>
            </div>
          </form>
        );
        returnData.status = (
          <form className="table_btns d-flex align-items-center">
            <div className="check_toggle">
              <input
                type="checkbox"
                defaultChecked={list?.status}
                name="check1"
                id={index + "s1"}
                className="d-none"
                onClick={() => {
                  CategoryStatus(list?._id);
                }}
              />
              <label for={index + "s1"}></label>
            </div>
          </form>
        );
        returnData.action = (
          <>
            <a
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="comman_btn2 table_viewbtn"
              onClick={() => EditCate(list?._id)}
            >
              Edit
            </a>
          </>
        );
        newRows.push(returnData);
      });
      setCategory({ ...category, rows: newRows });
    }
  };
  const CategoryStatus = async (id) => {
    const { data } = await changeCategoryStatus(id);
    if (!data?.error) {
      getAllCat();
      Swal.fire({
        title: "Category Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };
  const ShipmentStatus = async (id) => {
    const { data } = await changeCateShipStatus(id);
    if (!data?.error) {
      getAllCat();
      Swal.fire({
        title: "Shipment Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name_en", data?.Category_name?.trim());
    formData.append("name_ar", data?.Category_name_ar?.trim());
    formData.append("image", files?.upload_video);
    const res = await AddCategory(formData);
    console.log(res);
    if (!res.data.error) {
      getAllCat();
      setFiles([]);
      document?.getElementById("Reset").click();
      Swal.fire({
        title: "New Category Added!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const onSubmit2 = async (data) => {
    const formData = new FormData();
    formData.append("name_en", data?.editCatename_en?.trim());
    formData.append("name_ar", data?.editCatename_ar?.trim());
    formData.append("image", files?.editImage);
    const res = await editCategiry(id, formData);
    if (!res.data.error) {
      document?.getElementById("closeModal").click();
      getAllCat();
      Swal.fire({
        title: res.data?.message + "!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
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
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  return (
    <>
      {" "}
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row category-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Category Management</h2>
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
                              Categories
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
                              Sub Categories
                            </button>
                            <button
                              className="nav-link"
                              id="nav-contact-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact"
                              aria-selected="false"
                            >
                              Sub Sub Categories
                            </button>
                            <button
                              className="nav-link"
                              id="nav-contact1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact1"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact1"
                              aria-selected="false"
                            >
                              Attributes
                            </button>
                            <button
                              className="nav-link"
                              id="nav-contact2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-contact2"
                              type="button"
                              role="tab"
                              aria-controls="nav-contact2"
                              aria-selected="false"
                            >
                              Values
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
                            <div className="row p-4 mx-0">
                              <div className="col-12 mb-4 inner_design_comman border">
                                <div className="row comman_header justify-content-between">
                                  <div className="col-auto">
                                    <h2>Add New Category</h2>
                                  </div>
                                </div>
                                <form
                                  className="form-design py-4 px-3 help-support-form row  justify-content-between"
                                  action=""
                                  onSubmit={handleSubmit(onSubmit)}
                                >
                                  <div className="form-group mb-0 col">
                                    <label for="">
                                      Enter Category Name (En)
                                    </label>
                                    <input
                                      type="text"
                                      className={classNames("form-control", {
                                        "is-invalid": errors.Category_name,
                                      })}
                                      name="Category_name"
                                      {...register("Category_name", {
                                        required: "Category Name is required!",
                                        pattern: {
                                          value:
                                            /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                                          message:
                                            "Special Character not allowed!",
                                        },
                                        maxLength: {
                                          value: 15,
                                          message:
                                            "Max length is 15 characters!",
                                        },
                                      })}
                                    />
                                    {errors.Category_name && (
                                      <small className="errorText mx-1">
                                        *{errors.Category_name?.message}
                                      </small>
                                    )}
                                  </div>
                                  <div className="form-group mb-0 col">
                                    <label for="">
                                      Enter Category Name (Ar)
                                    </label>
                                    <input
                                      type="text"
                                      lang="ar"
                                      dir="rtl"
                                      className={classNames("form-control", {
                                        "is-invalid": errors.Category_name_ar,
                                      })}
                                      name="Category_name_ar"
                                      {...register("Category_name_ar", {
                                        required: "Category Name is required!",
                                        // pattern: {
                                        //   value: /^[\u0621-\u064A\u0660-\u0669 ]+$/,
                                        //   message: "Only Arabic Characters are allowed!",
                                        // },
                                        maxLength: {
                                          value: 15,
                                          message:
                                            "Max length is 15 characters!",
                                        },
                                      })}
                                    />

                                    {errors.Category_name_ar && (
                                      <small className="errorText mx-1">
                                        *{errors.Category_name_ar?.message}
                                      </small>
                                    )}
                                  </div>

                                  <div className="form-group mb-0 col choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i className="fal fa-camera me-1"></i>
                                      Choose File{" "}
                                    </label>
                                    <input
                                      type="file"
                                      className="form-control"
                                      accept="image/*"
                                      name="upload_video"
                                      id="upload_video"
                                      onChange={(e) =>
                                        onFileSelection(e, "upload_video")
                                      }
                                    />
                                  </div>
                                  <div className="form-group mb-0 col-auto mt-1">
                                    <button
                                      className="comman_btn2 mt-4"
                                      type="submit"
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="comman_btn2 mt-4 d-none"
                                      type="reset"
                                      id="Reset"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </form>
                              </div>
                              <div className="col-12 mb-4 inner_design_comman border">
                                <div className="row comman_header justify-content-between">
                                  <div className="col">
                                    <h2>Category List</h2>
                                  </div>
                                  <div class="col-auto">
                                    <input
                                      type="date"
                                      class="custom_date"
                                      onChange={(e) =>
                                        getAllCat(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12 comman_table_design px-0">
                                    <div className="table-responsive mb-0">
                                      <MDBDataTable
                                        bordered
                                        displayEntries={false}
                                        // searching={false}
                                        className="mt-0"
                                        hover
                                        data={category}
                                        noBottomColumns
                                        sortable
                                      />
                                      {/* <table className="table mb-0">
                                        <thead>
                                          <tr>
                                            <th>S.No.</th>
                                            <th>Category Name (En)</th>
                                            <th>Category Name (Ar)</th>
                                            <th>Media</th>
                                            <th>SHIPMENT SERVICE</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {categories?.map((item, index) => (
                                            <tr key={index}>
                                              <td>{index + 1}</td>
                                              <td>{item?.name_en}</td>
                                              <td>{item?.name_ar}</td>
                                              <td>
                                                <img
                                                  className="table_img"
                                                  src="../assets/img/admin/product_img1.png"
                                                  alt=""
                                                />
                                              </td>
                                              <td>
                                                <form className="table_btns d-flex align-items-center">
                                                  <div className="check_toggle">
                                                    <input
                                                      type="checkbox"
                                                      name="s1"
                                                      id={index}
                                                      defaultChecked={
                                                        item?.shipment_service
                                                      }
                                                      className="d-none"
                                                    />
                                                    <label for={index}></label>
                                                  </div>
                                                </form>
                                              </td>
                                              <td>
                                                <form className="table_btns d-flex align-items-center">
                                                  <div className="check_toggle">
                                                    <input
                                                      type="checkbox"
                                                      defaultChecked={
                                                        item?.status
                                                      }
                                                      name="check1"
                                                      id={index + "s1"}
                                                      className="d-none"
                                                    />
                                                    <label
                                                      for={index + "s1"}
                                                    ></label>
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
                                          ))}
                                        </tbody>
                                      </table> */}
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
                            <SubCategory />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-contact"
                            role="tabpanel"
                            aria-labelledby="nav-contact-tab"
                          >
                            <SubSubCategory />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-contact1"
                            role="tabpanel"
                            aria-labelledby="nav-contact1-tab"
                          >
                            <Attributes />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-contact2"
                            role="tabpanel"
                            aria-labelledby="nav-contact2-tab"
                          >
                            <Values />
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
                Edit Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModal"
                onClick={() => {
                  document?.getElementById("resetModals").click();
                }}
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-design p-3 help-support-form row align-items-end justify-content-center"
                action=""
                onSubmit={handleSubmit2(onSubmit2)}
              >
                <div className="form-group col-7">
                  <div className="row Onboarding_box mb-4 mx-0">
                    <span className="head_spann">Category Image</span>
                    <div className="form-group mb-0 col-12">
                      <div className="banner-profile position-relative">
                        <div className="banner-Box bg-dark">
                          <img
                            className="home-banner"
                            id="main_img"
                            src={files?.editImage}
                          />
                        </div>
                        <div className="p-image">
                          <i className="upload-button fas fa-camera"></i>
                          <input
                            className="file-upload"
                            type="file"
                            id="new_img"
                            accept="image/*"
                            name="editImage"
                            onChange={(e) => onFileSelection(e, "editImage")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group col-6">
                  <label for="">Enter Category Name (En)</label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors2.editCatename_en,
                    })}
                    name="editCatename_en"
                    {...register2("editCatename_en", {
                      required: "Category Name is required!",
                      pattern: {
                        value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                        message: "Special Character not allowed!",
                      },
                      maxLength: {
                        value: 20,
                        message: "Max length is 20 characters!",
                      },
                    })}
                  />
                  {errors2.editCatename_en && (
                    <small className="errorText mx-1">
                      *{errors2.editCatename_en?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Enter Category Name (Ar)</label>
                  <input
                    type="text"
                    lang="ar"
                    dir="rtl"
                    className={classNames("form-control", {
                      "is-invalid": errors2.editCatename_ar,
                    })}
                    name="editCatename_ar"
                    {...register2("editCatename_ar", {
                      required: "Category Name is required!",
                      // pattern: {
                      //   value: /^[\u0621-\u064A\u0660-\u0669 ]+$/,
                      //   message: "Only Arabic Characters are allowed!",
                      // },
                      maxLength: {
                        value: 20,
                        message: "Max length is 20 characters!",
                      },
                    })}
                  />
                  {errors2.editCatename_ar && (
                    <small className="errorText mx-1">
                      *{errors2.editCatename_ar?.message}
                    </small>
                  )}
                </div>

                <div className="form-group mb-0 col-auto">
                  <button className="comman_btn2" type="submit">
                    Save
                  </button>
                </div>
                <div className="form-group mb-0 col-auto">
                  <button
                    className="comman_btn2 d-none"
                    id="resetModals"
                    type="reset"
                  >
                    reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

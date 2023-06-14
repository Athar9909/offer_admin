import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  AddSubCategory,
  AllCategory,
  AllSubCategory,
  editSubCategory,
  getSubCategory,
  subCateShipStatus,
  subCateStatus,
} from "../httpService/DashboardHttp";
import Swal from "sweetalert2";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

const SubCategory = () => {
  const [files, setFiles] = useState();
  const [selectedCat, setSelectedCat] = useState();
  const [categories, setCategories] = useState();
  const [id, setId] = useState();
  const [formValues, setFormValues] = useState([
    {
      name_en: [],
      name_ar: [],
    },
  ]);
  const [category, setCategory] = useState({
    columns: [
      {
        label: "S.NO.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "CATEGORY",
        field: "name_cate",
        sort: "asc",
        width: 150,
      },
      {
        label: "SUB-CATEGORY NAME (EN)",
        field: "name_en",
        sort: "asc",
        width: 150,
      },

      {
        label: "SUB-CATEGORY NAME (AR)",
        field: "name_ar",
        sort: "asc",
        width: 100,
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

  const EditCate = async (i) => {
    setId(i);
    const { data } = await getSubCategory(i);
    if (!data?.error) {
      let info = data?.results.subCategory;
      console.log(info);
      setSelectedCat(info?.category);
      reset2({
        edSub_Catename: info?.name_en,
        edSub_Catename_ar: info?.name_ar,
        edit_filterName_ar: info?.filter_name_ar,
        edit_filterName_en: info?.filter_name_en,
      });
    }
  };

  useEffect(() => {
    getAllSubCat();
    getAllCat();
  }, []);

  const getAllCat = async () => {
    const { data } = await AllCategory();
    if (!data.error) {
      setCategories(data?.results?.categories);
    }
  };

  const getAllSubCat = async (date) => {
    const { data } = await AllSubCategory({ year: date });
    const newRows = [];
    if (!data.error) {
      let values = data?.results?.subCategories;
      values?.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1 + ".";
        returnData.name_cate = list?.category?.name_en;
        returnData.name_en = list?.name_en;
        returnData.name_ar = list?.name_ar;
        returnData.shipment = (
          <form className="table_btns d-flex align-items-center">
            <div className="check_toggle">
              <input
                type="checkbox"
                name="s1"
                id={list?._id}
                defaultChecked={list?.shipment_service}
                className="d-none"
                onClick={() => {
                  ShipmentStatus(list?._id);
                }}
              />
              <label for={list?._id}></label>
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
                id={list?._id + "s1"}
                className="d-none"
                onClick={() => {
                  SubCategoryStatus(list?._id);
                }}
              />
              <label for={list?._id + "s1"}></label>
            </div>
          </form>
        );
        returnData.action = (
          <>
            <a
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
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

  const SubCategoryStatus = async (id) => {
    const { data } = await subCateStatus(id);
    if (!data?.error) {
      getAllSubCat();
      Swal.fire({
        title: "Sub-Category Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };
  const ShipmentStatus = async (id) => {
    const { data } = await subCateShipStatus(id);
    if (!data?.error) {
      getAllSubCat();
      Swal.fire({
        title: "Shipment Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const onSubmit = async (data) => {
    const res = await AddSubCategory({
      subCategories: formValues,
      filter_name_en: data?.filter_name?.trim(),
      filter_name_ar: data?.filter_name_ar?.trim(),
      categoryId: data?.category,
    });

    console.log(res);
    if (!res.data.error) {
      getAllSubCat();
      setFormValues([
        {
          name_en: [],
          name_ar: [],
        },
      ]);
      document.getElementById("reset2").click();
      Swal.fire({
        title: "New Sub-Category Added!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const onSubmit2 = async (data) => {
    await editSubCategory(id, {
      filter_name_en: data?.edit_filterName_en?.trim(),
      filter_name_ar: data?.edit_filterName_ar?.trim(),
      categoryId: data?.edCategory,
      name_en: data?.edSub_Catename?.trim(),
      name_ar: data?.edSub_Catename_ar?.trim(),
    }).then((res) => {
      if (!res.data?.error) {
        getAllSubCat();
        document?.getElementById("onClose1").click();
        Swal.fire({
          title: "Sub-Category Modified!",
          icon: "success",
          confirmButtonText: "Okay",
          confirmButtonColor: "#da3c3b",
        });
      }
    });
  };

  let handleChange = (e, i) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = (e) => {
    setFormValues([
      ...formValues,
      {
        name_en: [],
        name_ar: [],
      },
    ]);
  };

  const removeFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues?.splice(index, 1);
    setFormValues(newFormValues);
  };

  return (
    <div>
      <div className="row p-4 mx-0">
        <div className="col-12 mb-4 inner_design_comman border">
          <div className="row comman_header justify-content-between">
            <div className="col-auto">
              <h2>Add New Sub Category</h2>
            </div>
          </div>
          <form
            className="form-design py-4 px-3 help-support-form row  justify-content-between"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group mb-3 col-4">
              <label for="">Select Category</label>
              <select
                className={classNames("form-control form-select", {
                  "is-invalid": errors.category,
                })}
                {...register("category", {
                  required: "Category is required!",
                })}
                name="category"
                id=""
              >
                <option selected="">Select Category</option>
                {(categories || [])?.map((item, ind) => (
                  <option value={item?._id}>{item?.name_en}</option>
                ))}
              </select>
              {errors.category && (
                <small className="errorText mx-1">
                  *{errors.category?.message}
                </small>
              )}
            </div>
            <div className="form-group col-4">
              <label for="">Enter Filter Name (En)</label>
              <input
                type="text"
                className={classNames("form-control", {
                  "is-invalid": errors.filter_name,
                })}
                name="filter_name"
                {...register("filter_name", {
                  required: "Filter Name is required!",
                  pattern: {
                    value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                    message: "Special Character not allowed!",
                  },
                  maxLength: {
                    value: 100,
                    message: "Max length is 100 characters!",
                  },
                })}
              />
              {errors.filter_name && (
                <small className="errorText mx-1">
                  *{errors.filter_name?.message}
                </small>
              )}
            </div>
            <div className="form-group  col-4">
              <label for="">Enter Filter Name (Ar)</label>
              <input
                type="text"
                lang="ar"
                dir="rtl"
                className={classNames("form-control", {
                  "is-invalid": errors.filter_name_ar,
                })}
                name="filter_name_ar"
                {...register("filter_name_ar", {
                  required: "Filter Name is required!",
                  pattern: {
                    value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                    message: "Special Character not allowed!",
                  },
                  maxLength: {
                    value: 100,
                    message: "Max length is 100 characters!",
                  },
                })}
              />

              {errors.filter_name_ar && (
                <small className="errorText mx-1">
                  *{errors.filter_name_ar?.message}
                </small>
              )}
            </div>
            <br className="" />
            <div className="form-group  col-12">
              {(formValues || [])?.map((item, index) => (
                <div className="form-group mb-0 row  rounded p-3 mb-2">
                  <div className="form-group mb-3 col-6">
                    <label for="">Enter Sub Category Name (En)</label>
                    <input
                      type="text"
                      name="name_en"
                      className="form-control"
                      value={item?.name_en || ""}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3 col-5">
                    <label for="">Enter Sub Category Name (ar)</label>
                    <input
                      type="text"
                      name="name_ar"
                      lang="ar"
                      dir="rtl"
                      className="form-control"
                      value={item?.name_ar || ""}
                      onChange={(e) => handleChange(e, index)}
                      required
                    />
                  </div>
                  <div className="form-group col-1 mt-4  rmv_btn">
                    <button
                      className="comman_btn mt-1"
                      type="button"
                      disabled={formValues?.length <= 1 ? true : false}
                      onClick={() => removeFormFields(index)}
                    >
                      <i className="fa fa-minus mt-1 mx-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-group mb-0 col-12 d-flex justify-content-center">
              <div className="form-group mb-3">
                <button
                  className="comman_btn "
                  type="button"
                  onClick={() => addFormFields()}
                >
                  Add More Row
                </button>
                <button className="comman_btn2 mx-2" type="submit">
                  Save
                </button>
              </div>

              <button className="comman_btn2 d-none" type="reset" id="reset2">
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 mb-4 inner_design_comman border">
          <div className="row comman_header justify-content-between">
            <div className="col">
              <h2>Sub Category List</h2>
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
            <div class="col-auto">
              <input
                type="date"
                class="custom_date"
                onChange={(e) => getAllSubCat(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 comman_table_design px-0">
              <div className="table-responsive p-1">
                <MDBDataTable
                  bordered
                  displayEntries={false}
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
                      <th>Category Name</th>
                      <th>Sub Category Name (En)</th>
                      <th>Sub Category Name (Ar)</th>
                      <th>SHIPMENT SERVICE</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(subCategories || [])?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item?.category?.name_en}</td>
                        <td>{item?.name_en}</td>
                        <td>{item?.name_ar}</td>
                        <td>
                          <form className="table_btns d-flex align-items-center">
                            <div className="check_toggle">
                              <input
                                defaultChecked={item?.shipment_service}
                                type="checkbox"
                                name="s5"
                                id="s5"
                                className="d-none"
                              />
                              <label for="s5"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <form className="table_btns d-flex align-items-center">
                            <div className="check_toggle">
                              <input
                                defaultChecked={item?.status}
                                type="checkbox"
                                name="t1"
                                id="t1"
                                className="d-none"
                              />
                              <label for="t1"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop1"
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
      <div
        className="modal fade Edit_modal"
        id="staticBackdrop1"
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
                Edit Sub Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="onClose1"
                onClick={() => document?.getElementById("reset2").click()}
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-design p-3 help-support-form row align-items-end justify-content-center"
                action=""
                onSubmit={handleSubmit2(onSubmit2)}
              >
                <div className="form-group col-12">
                  <label for="">Select Category</label>
                  <select
                    className={classNames("form-control form-select", {
                      "is-invalid": errors2.edCategory,
                    })}
                    {...register2("edCategory", {
                      required: "Category is required!",
                    })}
                    name="edCategory"
                    id=""
                  >
                    <option
                      value={selectedCat?._id}
                      id="cateSelect"
                      selected=""
                    >
                      {selectedCat?.name_en}
                    </option>
                    {(categories || [])?.map((item, ind) => (
                      <option value={item?._id}>
                        {item?.name_en + "--" + item?.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors2.edCategory && (
                    <small className="errorText mx-1">
                      *{errors2.edCategory?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Filter Name (En)</label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_filterName_en,
                    })}
                    name="edit_filterName_en"
                    {...register2("edit_filterName_en", {
                      required: "Filter Name is required!",
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

                  {errors2.edit_filterName_en && (
                    <small className="errorText mx-1">
                      *{errors2.edit_filterName_en?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Filter Name (Ar)</label>
                  <input
                    type="text"
                    lang="ar"
                    dir="rtl"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_filterName_ar,
                    })}
                    name="edit_filterName_ar"
                    {...register2("edit_filterName_ar", {
                      required: "Filter Name is required!",
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
                  {errors2.edit_filterName_ar && (
                    <small className="errorText mx-1">
                      *{errors2.edit_filterName_ar?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Enter Sub Category Name (En)</label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edSub_Catename,
                    })}
                    name="edSub_Catename"
                    {...register2("edSub_Catename", {
                      required: "Sub Category Name is required!",
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

                  {errors2.edSub_Catename && (
                    <small className="errorText mx-1">
                      *{errors2.edSub_Catename?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Enter Sub Category Name (Ar)</label>
                  <input
                    type="text"
                    lang="ar"
                    dir="rtl"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edSub_Catename_ar,
                    })}
                    name="edSub_Catename_ar"
                    {...register2("edSub_Catename_ar", {
                      required: "Sub Category Name is required!",
                      // pattern: {
                      //   value: /^[\u0621-\u064A\u0660-\u0669 ]+$/,
                      //   message: "Only Arabic Characters are allowed!",
                      // },
                      maxLength: {
                        value: 15,
                        message: "Max length is 15 characters!",
                      },
                    })}
                  />

                  {errors2.edSub_Catename_ar && (
                    <small className="errorText mx-1">
                      *{errors2.edSub_Catename_ar?.message}
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
                    type="reset"
                    id="reset2"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;

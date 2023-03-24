import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  AddSubSubCategory,
  AllCategory,
  AllSubSubCategory,
  editSubSubCategory,
  getSubSubCategory,
  SubCategorybyCate,
  subSubCateShipStatus,
  subSubCateStatus,
} from "../httpService/DashboardHttp";
import Swal from "sweetalert2";
import { MDBDataTable } from "mdbreact";

const SubSubCategory = () => {
  const [categories, setCategories] = useState();
  const [subCategories, setSubCategories] = useState();
  const [selected, setSelected] = useState([]);
  const [id, setId] = useState();
  const [formValues, setFormValues] = useState([
    {
      name_en: [],
      name_ar: [],
    },
  ]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllCat();
    getAllSubCat();
  }, []);

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
        label: "CATEGORY",
        field: "name_cate",
        sort: "asc",
        width: 150,
      },
      {
        label: "SUB-CATEGORY NAME",
        field: "name_subCate",
        sort: "asc",
        width: 150,
      },
      {
        label: "SUB-SUB-CATEGORY NAME (EN)",
        field: "name_en",
        sort: "asc",
        width: 100,
      },
      {
        label: "SUB-SUB-CATEGORY NAME (AR)",
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

  const EditCate = async (i) => {
    setId(i);
    const { data } = await getSubSubCategory(i);
    if (!data?.error) {
      let info = data?.results.subSubCategory;
      console.log(info, "jasjjs");
      setSelected({
        category: info?.category?.name_en,
        cateId: info?.category?._id,
        subCategory: info?.subCategory?.name_en,
        subCateId: info?.subCategory?._id,
      });
      reset2({
        edit_filterName_en: info?.filter_name_en,
        edit_filterName_ar: info?.filter_name_ar,
        edit_subSubCategory: info?.name_en,
        edit_subSubCategory_ar: info?.name_ar,
      });
    }
  };

  const getAllSubCat = async (date) => {
    const { data } = await AllSubSubCategory({ year: date });
    const newRows = [];
    if (!data.error) {
      let values = data?.results?.subSubCategories;
      values?.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1 + ".";
        returnData.name_cate = list?.category?.name_en;
        returnData.name_subCate = list?.subCategory?.name_en;
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
              data-bs-target="#staticBackdrop2"
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
    const { data } = await subSubCateStatus(id);
    if (!data?.error) {
      getAllSubCat();
      Swal.fire({
        title: "Sub-Sub-Category Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const ShipmentStatus = async (id) => {
    const { data } = await subSubCateShipStatus(id);
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

  const SubCategory = async (id) => {
    const { data } = await SubCategorybyCate({ categoryId: id });
    if (!data.error) {
      setSubCategories(data?.results?.subCategories);
    }
  };

  const getAllCat = async () => {
    const { data } = await AllCategory();
    if (!data.error) {
      setCategories(data?.results?.categories);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const res = await AddSubSubCategory({
      subSubCategories: formValues,
      filter_name_en: data?.filter_name?.trim(),
      filter_name_ar: data?.filter_name_ar?.trim(),
      categoryId: data?.category,
      subCategoryId: data?.SubCategory,
    });
    console.log(res);
    if (!res.data.error) {
      setFormValues([
        {
          name_en: [],
          name_ar: [],
        },
      ]);
      getAllSubCat();
      document.getElementById("resets4").click();
      Swal.fire({
        title: "New Sub-Sub-Category Added!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const onSubmit2 = async (data) => {
    await editSubSubCategory(id, {
      filter_name_en: data?.edit_filterName_en?.trim(),
      filter_name_ar: data?.edit_filterName_ar?.trim(),
      categoryId: data?.edit_category,
      subCategoryId: data?.edit_subCategory,
      name_en: data?.edit_subSubCategory?.trim(),
      name_ar: data?.edit_subSubCategory_ar?.trim(),
    }).then((res) => {
      if (!res.data?.error) {
        document.getElementById("onClose2").click();
        getAllSubCat();
        Swal.fire({
          title: "Sub-Sub-Category Modified!",
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
              <h2>Add New Sub Sub Category</h2>
            </div>
          </div>
          <form
            className="form-design py-4 px-3 help-support-form row  justify-content-between"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group mb-3 col-lg-3">
              <label for="">Select Category</label>
              <select
                className={classNames("form-control form-select", {
                  "is-invalid": errors.category,
                })}
                {...register("category", {
                  required: "Category is required!",
                  onChange: (e) => {
                    SubCategory(e.target.value);
                  },
                })}
                name="category"
              >
                <option value="" selected="">
                  Select Category
                </option>
                {(categories || [])?.map((item, ind) => (
                  <option value={item?._id}>
                    {item?.name_en + "--" + item?.name_ar}
                  </option>
                ))}
              </select>
              {errors.category && (
                <small className="errorText mx-1">
                  *{errors.category?.message}
                </small>
              )}
            </div>
            <div className="form-group mb-3 col-lg-3">
              <label for="">Select Sub-Category</label>
              <select
                className={classNames("select form-control form-select", {
                  "is-invalid": errors.SubCategory,
                })}
                {...register("SubCategory", {
                  required: "Sub-Category is required!",
                })}
                name="SubCategory"
              >
                <option value="" selected="">
                  Select Sub Category
                </option>
                {(subCategories || [])?.map((item, ind) => (
                  <option value={item?._id}>
                    {item?.name_en + "--" + item?.name_ar}
                  </option>
                ))}
              </select>
              {errors.SubCategory && (
                <small className="errorText mx-1">
                  *{errors.SubCategory?.message}
                </small>
              )}
            </div>
            <div className="form-group col-lg-3">
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
                    value: 15,
                    message: "Max length is 15 characters!",
                  },
                })}
              />
              {errors.filter_name && (
                <small className="errorText mx-1">
                  *{errors.filter_name?.message}
                </small>
              )}
            </div>
            <div className="form-group  col-3">
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
                    value: 15,
                    message: "Max length is 15 characters!",
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

              <button className="comman_btn2 d-none" type="reset" id="resets4">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 mb-4 inner_design_comman border">
          <div className="row comman_header justify-content-between">
            <div className="col">
              <h2>Sub Sub Categories List</h2>
            </div>

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
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Sub Sub Category Name (En)</th>
                      <th>Sub Sub Category Name (Ar)</th>
                      <th>SHIPMENT SERVICE</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(allSubCategories || [])?.map((item, ind) => (
                      <tr>
                        <td>{ind + 1}</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>{item?.name_en}</td>
                        <td>{item?.name_ar}</td>
                        <td>
                          <form className="table_btns d-flex align-items-center">
                            <div className="check_toggle">
                              <input
                                defaultChecked={item?.shipment_service}
                                type="checkbox"
                                name="s9"
                                id="s9"
                                className="d-none"
                              />
                              <label for="s9"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <form className="table_btns d-flex align-items-center">
                            <div className="check_toggle">
                              <input
                                defaultChecked={item?.status}
                                type="checkbox"
                                name="nav1"
                                id="nav1"
                                className="d-none"
                              />
                              <label for="nav1"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
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
        id="staticBackdrop2"
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
                Edit Sub Sub Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="onClose2"
                onClick={() => document?.getElementById("reset2").click()}
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-design p-3 help-support-form row align-items-end justify-content-center"
                action=""
                onSubmit={handleSubmit2(onSubmit2)}
              >
                <div className="form-group col-6">
                  <label for="">Select Category</label>
                  <select
                    className={classNames("form-control form-select", {
                      "is-invalid": errors2.edit_category,
                    })}
                    {...register2("edit_category", {
                      required: "Category is required!",
                      onChange: (e) => {
                        SubCategory(e.target.value);
                      },
                    })}
                    name="edit_category"
                  >
                    <option value={selected?.cateId} selected="">
                      {selected?.category}
                    </option>
                    {(categories || [])?.map((item, ind) => (
                      <option value={item?._id}>
                        {item?.name_en + "--" + item?.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors2.edit_category && (
                    <small className="errorText mx-1">
                      *{errors2.edit_category?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Select Sub Category</label>
                  <select
                    className={classNames("select form-control form-select", {
                      "is-invalid": errors2.edit_subCategory,
                    })}
                    {...register2("edit_subCategory", {
                      required: "Sub-Category is required!",
                    })}
                    name="edit_subCategory"
                  >
                    <option value={selected?.subCateId} selected="">
                      {selected?.subCategory}
                    </option>
                    {(subCategories || [])?.map((item, ind) => (
                      <option value={item?._id}>
                        {item?.name_en + "--" + item?.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors2.edit_subCategory && (
                    <small className="errorText mx-1">
                      *{errors2.edit_subCategory?.message}
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
                  <label for="">Enter Sub Sub Category Name (En)</label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_subSubCategory,
                    })}
                    name="edit_subSubCategory"
                    {...register2("edit_subSubCategory", {
                      required: "Sub-Sub Category Name is required!",
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

                  {errors2.edit_subSubCategory && (
                    <small className="errorText mx-1">
                      *{errors2.edit_subSubCategory?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Enter Sub Sub Category Name (Ar)</label>
                  <input
                    type="text"
                    lang="ar"
                    dir="rtl"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_subSubCategory_ar,
                    })}
                    name="edit_subSubCategory_ar"
                    {...register2("edit_subSubCategory_ar", {
                      required: "Sub-Sub Category Name is required!",
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
                  {errors2.edit_subSubCategory_ar && (
                    <small className="errorText mx-1">
                      *{errors2.edit_subSubCategory_ar?.message}
                    </small>
                  )}
                </div>
                <div className="form-group mb-0 col-auto">
                  <button className="comman_btn2" type="submit">
                    Save
                  </button>
                </div>
                <div className="form-group mb-0 col-auto">
                  <button className="comman_btn2 " type="reset" id="reset2">
                    reset
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

export default SubSubCategory;
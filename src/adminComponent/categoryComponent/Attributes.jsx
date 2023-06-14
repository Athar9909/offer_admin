import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  AddAttributes,
  AllAttributes,
  AllCategory,
  AllSubSubCategory,
  AttributeShipStatus,
  AttributeStatus,
  editAttributes,
  getAttribute,
  SubCategorybyCate,
  SubSubCategorybySubCate,
} from "../httpService/DashboardHttp";
import Swal from "sweetalert2";
import { MDBDataTable } from "mdbreact";

const Attributes = () => {
  const [categories, setCategories] = useState();
  const [subCategories, setSubCategories] = useState();
  const [subSubCategories, setSubSubCategories] = useState();
  const [selected, setSelected] = useState([]);
  const [state, setState] = useState(false);
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
    getAllAttributes();
  }, [state]);

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
        label: "SUB-SUB-CATEGORY NAME",
        field: "name_subSubCate",
        sort: "asc",
        width: 100,
      },
      {
        label: "ATTRIBUTES NAME (EN)",
        field: "name_en",
        sort: "asc",
        width: 100,
      },
      {
        label: "ATTRIBUTES NAME (AR)",
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
    const { data } = await getAttribute(i);
    if (!data?.error) {
      let info = data?.results.attribute;
      setSelected({
        category: info?.category?.name_en,
        cateId: info?.category?._id,
        subCategory: info?.subCategory?.name_en,
        subCateId: info?.subCategory?._id,
        subSubCategory: info?.subSubCategory?.name_en,
        subSubCateId: info?.subSubCategory?._id,
      });
      reset2({
        edit_filterName_en: info?.filter_name_en,
        edit_filterName_ar: info?.filter_name_ar,
        edit_attribute_en: info?.name_en,
        edit_attribute_ar: info?.name_ar,
      });
    }
  };

  const getAllAttributes = async (date) => {
    const { data } = await AllAttributes({ year: date });
    const newRows = [];
    if (!data.error) {
      let values = data?.results?.attributes;
      values?.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1 + ".";
        returnData.name_cate = list?.category?.name_en;
        returnData.name_subCate = list?.subCategory?.name_en;
        returnData.name_subSubCate = list?.subSubCategory?.name_en;
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
                  AttributesStatus(list?._id);
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
              data-bs-target="#staticBackdrop3"
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

  const getAllSubCat = async () => {
    const { data } = await AllSubSubCategory();
  };

  const AttributesStatus = async (id) => {
    const { data } = await AttributeStatus(id);
    if (!data?.error) {
      getAllSubCat();
      Swal.fire({
        title: "Attribute Status Changed!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const ShipmentStatus = async (id) => {
    const { data } = await AttributeShipStatus(id);
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
  const SubSubCategory = async (id) => {
    const { data } = await SubSubCategorybySubCate({ subCategoryId: id });
    if (!data.error) {
      setSubSubCategories(data?.results?.subSubCategories);
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
    const res = await AddAttributes({
      attributes: formValues,
      filter_name_en: data?.filter_name?.trim(),
      filter_name_ar: data?.filter_name_ar?.trim(),
      categoryId: data?.category,
      subCategoryId: data?.SubCategory,
      subSubCategoryId: data?.subSubCategory,
    });
    console.log(res);
    if (!res.data.error) {
      getAllAttributes();
      setFormValues([
        {
          name_en: [],
          name_ar: [],
        },
      ]);
      document.getElementById("resets5").click();
      Swal.fire({
        title: "New Attribute Added!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
  };

  const onSubmit2 = async (data) => {
    await editAttributes(id, {
      filter_name_en: data?.edit_filterName_en?.trim(),
      filter_name_ar: data?.edit_filterName_ar?.trim(),
      categoryId: data?.edit_category,
      subCategoryId: data?.edit_subCategory,
      subSubCategoryId: data?.edit_subSubCategory,
      name_en: data?.edit_attribute_en?.trim(),
      name_ar: data?.edit_attribute_ar?.trim(),
    }).then((res) => {
      if (!res.data?.error) {
        document.getElementById("onClose3").click();
        getAllAttributes();
        Swal.fire({
          title: "Attributes Modified!",
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
              <h2>Add New Attribute</h2>
            </div>
          </div>
          <form
            className="form-design py-4 px-3 help-support-form row  justify-content-between"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group mb-3 col-lg-4">
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
            <div className="form-group mb-3 col-lg-4">
              <label for="">Select Sub-Category</label>
              <select
                className={classNames("select form-control form-select", {
                  "is-invalid": errors.SubCategory,
                })}
                {...register("SubCategory", {
                  required: "Sub-Category is required!",
                  onChange: (e) => {
                    SubSubCategory(e.target.value);
                  },
                })}
                name="SubCategory"
              >
                <option selected="">Select Category</option>
                {(subCategories || [])?.map((item, ind) => (
                  <option value={item?._id}>{item?.name_en}</option>
                ))}
              </select>
              {errors.SubCategory && (
                <small className="errorText mx-1">
                  *{errors.SubCategory?.message}
                </small>
              )}
            </div>
            <div className="form-group mb-3 col-lg-4">
              <label for="">Select Sub-Sub-Category</label>
              <select
                className={classNames("select form-control form-select", {
                  "is-invalid": errors.subSubCategory,
                })}
                {...register("subSubCategory", {
                  required: "Sub-Sub-Category is required!",
                })}
                name="subSubCategory"
              >
                <option selected="">Select</option>
                {(subSubCategories || [])?.map((item, ind) => (
                  <option value={item?._id}>{item?.name_en}</option>
                ))}
              </select>
              {errors.subSubCategory && (
                <small className="errorText mx-1">
                  *{errors.subSubCategory?.message}
                </small>
              )}
            </div>
            <div className="form-group col-lg-6">
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
            <div className="form-group  col-6">
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
                    <label for="">Enter Attribute Name (En)</label>
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
                    <label for="">Enter Attribute Name (ar)</label>
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

              <button className="comman_btn2 d-none" type="reset" id="resets5">
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 mb-4 inner_design_comman border">
          <div className="row comman_header justify-content-between">
            <div className="col">
              <h2>Attribute List</h2>
            </div>

            <div class="col-auto">
              <input
                type="date"
                class="custom_date"
                onChange={(e) => getAllAttributes(e.target.value)}
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
                      <th>Sub Sub Category Name</th>
                      <th>Attribute Name (En)</th>
                      <th>Attribute Name (Ar)</th>
                      <th>SHIPMENT SERVICE</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(allAttributes || [])?.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>Lorem</td>
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
                                name="s13"
                                id="s13"
                                className="d-none"
                              />
                              <label for="s13"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <form className="table_btns d-flex align-items-center">
                            <div className="check_toggle">
                              <input
                                defaultChecked={item?.status}
                                type="checkbox"
                                name="v1"
                                id="v1"
                                className="d-none"
                              />
                              <label for="v1"></label>
                            </div>
                          </form>
                        </td>
                        <td>
                          <a
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop3"
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
        id="staticBackdrop3"
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
                Edit Attribute
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="onClose3"
                onClick={() => document?.getElementById("reset3").click()}
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

                <div className="form-group col-12">
                  <label for="">Select Sub Sub Category</label>
                  <select
                    className={classNames("select form-control form-select", {
                      "is-invalid": errors2.edit_subSubCategory,
                    })}
                    {...register2("edit_subSubCategory", {
                      required: "Sub-Sub-Category is required!",
                    })}
                    name="edit_subSubCategory"
                  >
                    <option value={selected?.subSubCateId} selected="">
                      {selected?.subSubCategory}
                    </option>
                    {(subSubCategories || [])?.map((item, ind) => (
                      <option value={item?._id}>
                        {item?.name_en + "--" + item?.name_ar}
                      </option>
                    ))}
                  </select>
                  {errors2.edit_subSubCategory && (
                    <small className="errorText mx-1">
                      *{errors2.edit_subSubCategory?.message}
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
                        value: 15,
                        message: "Max length is 15 characters!",
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
                  <label for="">Attribute Name (En)</label>
                  <input
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_attribute_en,
                    })}
                    name="edit_attribute_en"
                    {...register2("edit_attribute_en", {
                      required: "Attribute Name is required!",
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

                  {errors2.edit_attribute_en && (
                    <small className="errorText mx-1">
                      *{errors2.edit_attribute_en?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-6">
                  <label for="">Attribute Name (Ar)</label>
                  <input
                    type="text"
                    lang="ar"
                    dir="rtl"
                    className={classNames("form-control", {
                      "is-invalid": errors2.edit_attribute_ar,
                    })}
                    name="edit_attribute_ar"
                    {...register2("edit_attribute_ar", {
                      required: "Attribute Name is required!",
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
                  {errors2.edit_attribute_ar && (
                    <small className="errorText mx-1">
                      *{errors2.edit_attribute_ar?.message}
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
                    id="reset3"
                    type="reset"
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

export default Attributes;

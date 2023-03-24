import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import AboutUs from "./aboutUs";
import Condition from "./condition";
import PrivacyPolicy from "./privacyPolicy";
import Safety from "./safety";
import { useForm } from "react-hook-form";
import { editContent, getContent } from "../httpService/DashboardHttp";
import classNames from "classnames";

function Content() {
  const [content, setContent] = useState([]);
  const [id, setId] = useState();
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
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
  } = useForm();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getContent();
    if (!data.error) {
      setContent(data?.results?.content);
    }
  };

  const EditEn = (i) => {
    setId(i);
    reset({
      title_en: content[i]?.title_en,
      content_en: content[i]?.content_en,
    });
  };

  const EditAr = (i) => {
    setId(i);
    reset2({
      title_ar: content[i]?.title_ar,
      content_ar: content[i]?.content_ar,
    });
  };
  const onSubmit = async (data) => {
    console.log(data, "jiiiiiiiiiiii");
    await editContent(
      {
        type: id,
        title_en: data?.title_en,
        content_en: data?.content_en,
      },
      content[id]?._id
    ).then((res) => {
      if (!res.data.error) {
        getData();
        document.getElementById("modal1").click();
      }
    });
  };

  const onSubmit2 = async (data) => {
    console.log(data);
    await editContent(
      {
        type: id,
        title_ar: data?.title_ar,
        content_ar: data?.content_ar,
      },
      content[id]?._id
    ).then((res) => {
      if (!res.data.error) {
        getData();
        document.getElementById("modal2").click();
      }
    });
  };

  return (
    <>
      {" "}
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_panel_data height_adjust">
          <div className="row content_management justify-content-center">
            <div className="col-12 mb-5">
              {(content || [])?.map((item, index) => (
                <div className="row mb-5">
                  <div className="col-md-6 col-sm-12 d-flex align-items-">
                    <div className="content_management_box me-0">
                      <h2>{item?.title_en}</h2>
                      <a
                        className="edit_content_btn comman_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        href="javscript:;"
                        onClick={() => EditEn(index)}
                      >
                        <i className="far fa-edit me-2" />
                        Edit
                      </a>
                      <p>{item?.content_en}</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 d-flex align-items-stretch">
                    <div className="row content_management_box ms-0 text-end right_sidebox">
                      <h2>{item?.title_ar}</h2>
                      <a
                        className="edit_content_btn comman_btn"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop1"
                        href="javscript:;"
                        onClick={() => EditAr(index)}
                      >
                        <i className="far fa-edit me-2" />
                        Edit
                      </a>
                      <p>{item?.content_ar}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          class="modal fade Edit_help Edit_modal"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Edit
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="modal1"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  class="form-design row mx-0 py-2"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="form-group col-12">
                    <label for={content[id]?._id}>Title</label>
                    <input
                      id={content[id]?._id}
                      type="text"
                      className={classNames("form-control ", {
                        "is-invalid": errors.title_en,
                      })}
                      name="title_en"
                      {...register("title_en", {
                        required: "Title Name is required!",
                        pattern: {
                          value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                          message: "Special Character not allowed!",
                        },
                        maxLength: {
                          value: 30,
                          message: "Max length is 30 characters!",
                        },
                      })}
                    />
                    {errors.title_en && (
                      <small className="errorText mx-1">
                        *{errors.title_en?.message}
                      </small>
                    )}
                  </div>
                  <div class="form-group col-12">
                    <label for="quesstioon">Description</label>
                    <textarea
                      style={{ height: "150px" }}
                      type="text"
                      className={classNames("form-control", {
                        "is-invalid": errors.content_en,
                      })}
                      name="content_en"
                      {...register("content_en", {
                        required: "Content is required!",
                        maxLength: {
                          value: 500,
                          message: "Max length is 500 characters!",
                        },
                      })}
                    />
                    {errors.content_en && (
                      <small className="errorText mx-1">
                        *{errors.content_en?.message}
                      </small>
                    )}
                  </div>
                  <div class="form-group col-12 text-center mb-0">
                    <button type="submit" className="comman_btn2">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade Edit_help Edit_modal"
          id="staticBackdrop1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Edit
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="modal2"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  class="form-design row mx-0 py-2"
                  onSubmit={handleSubmit2(onSubmit2)}
                >
                  <div class="form-group col-12 text-end">
                    <label class="text-end" for={content[id]?._id}>
                      Title
                    </label>
                    <input
                      id={content[id]?._id}
                      type="text"
                      className={classNames("form-control text-end", {
                        "is-invalid": errors2.title_ar,
                      })}
                      name="title_ar"
                      {...register2("title_ar", {
                        required: "Title Name is required!",
                        pattern: {
                          value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                          message: "Special Character not allowed!",
                        },
                        maxLength: {
                          value: 30,
                          message: "Max length is 30 characters!",
                        },
                      })}
                    />
                    {errors2.title_ar && (
                      <small className="errorText mx-1">
                        *{errors2.title_ar?.message}
                      </small>
                    )}
                  </div>
                  <div class="form-group col-12 text-end">
                    <label class="text-end" for="quesstioon">
                      Description
                    </label>
                    <textarea
                      style={{ height: "150px" }}
                      type="text"
                      className={classNames("form-control text-end", {
                        "is-invalid": errors2.content_ar,
                      })}
                      name="content_ar"
                      {...register2("content_ar", {
                        required: "Content is required!",

                        maxLength: {
                          value: 500,
                          message: "Max length is 500 characters!",
                        },
                      })}
                    />
                    {errors2.content_ar && (
                      <small className="errorText mx-1">
                        *{errors2.content_ar?.message}
                      </small>
                    )}
                  </div>
                  <div class="form-group col-12 text-center mb-0">
                    <button type="submit" class="comman_btn2">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

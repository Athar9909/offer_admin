import React, { useState } from "react";
import { useEffect } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import {
  AddAnnouncements,
  bannerStatus,
  getAnnouncements,
} from "../httpService/DashboardHttp";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";

function Announcement() {
  const [sideBar, setSideBar] = useState(true);
  const [allAnnounce, setAllAnounce] = useState([]);
  const [files, setFiles] = useState();
  const [isBanner, setIsBanner] = useState(false);
  const [editorTitleState, setTitleEditorState] = useState(null);
  const [editorTitleStateAr, setTitleEditorStateAr] = useState(null);
  const [editorDescState, setDescEditorState] = useState(null);
  const [editorDescStateAr, setDescEditorStateAr] = useState(null);

  const onEditorTitleStateChange = async (editorTitleState) => {
    await setTitleEditorState(editorTitleState);
  };
  const onEditorTitleStateChangeAr = async (editorTitleStateAr) => {
    await setTitleEditorStateAr(editorTitleStateAr);
  };
  const onEditorDescStateChangeAr = async (editorDescStateAr) => {
    await setDescEditorStateAr(editorDescStateAr);
  };
  const onEditorDescStateChange = async (editorDescState) => {
    await setDescEditorState(editorDescState);
  };

  useEffect(() => {
    getAnnounce();
  }, []);
  console.log(allAnnounce);

  const getAnnounce = async (date) => {
    const { data } = await getAnnouncements({ year: date });
    if (!data.error) {
      setAllAnounce(data?.results.announcements);
    }
  };
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };
  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const onSubmit = async () => {
    let title = await stateToHTML(editorTitleState?.getCurrentContent());
    let titleAr = await stateToHTML(editorTitleStateAr?.getCurrentContent());
    let Desc = await stateToHTML(editorDescState?.getCurrentContent());
    let DescAr = await stateToHTML(editorDescStateAr?.getCurrentContent());

    if (!title) {
      Swal.fire({
        title: "All Fields are Mandatory!",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    let formData = new FormData();
    formData.append("title_en", title?.trim());
    formData.append("title_ar", titleAr?.trim());
    formData.append("message_en", Desc?.trim());
    formData.append("message_ar", DescAr?.trim());
    formData.append("isBanner", isBanner);
    formData.append("image", files?.upload_video);

    const { data } = await AddAnnouncements(formData);
    if (!data?.error) {
      Swal.fire({
        title: "Announcement Added!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
      getAnnounce();
      setTitleEditorStateAr(null);
      setTitleEditorState(null);
      setDescEditorState(null);
      setDescEditorStateAr(null);
      setFiles(null);
    }
  };

  const AnnounceStatus = async (id) => {
    const { data } = await bannerStatus(id);
    if (!data?.error) {
      getAnnounce();
    }
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row transaction-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Announcement Management</h2>
                      </div>
                      {/* <div className="col-auto text-white fw-bold d-flex align-items-center">
                        <strong className="me-2 d-inline">Edit :</strong>
                        <button className="edit_buton" onclick="markUp('bold')">
                          <strong>B</strong>
                        </button>
                        <button
                          className="edit_buton"
                          onclick="markUp('italic')"
                        >
                          <em>I</em>
                        </button>
                        <button
                          className="edit_buton"
                          onclick="markUp('italic')"
                        >
                          <em>A</em>
                        </button>
                        <button
                          className="edit_buton"
                          onclick="markUp('italic')"
                        >
                          <em>a</em>
                        </button>
                        <button className="edit_buton" id="underline">
                          <u>U</u>
                        </button>
                      </div> */}
                    </div>
                    <form
                      className="form-design help-support-form py-4 px-3 row align-items-start justify-content-center"
                      action=""
                    >
                      <small className="text-danger mb-2">
                        *All field are mandatory!
                      </small>
                      <div className="form-group col-4 choose_file position-relative announce_Upload">
                        <span>Upload Image*</span>
                        <label for="upload_video">
                          <i className="fal fa-camera me-1"></i>Choose File{" "}
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="upload_video"
                          id="upload_video"
                          onChange={(e) => onFileSelection(e, "upload_video")}
                        />
                      </div>
                      <div className="form-group mb-3 col-4">
                        <label for="">Enter Announcement Heading (En)*</label>
                        <Editor
                          editorState={editorTitleState}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class border rounded px-1"
                          toolbarClassName="toolbar-class border rounded"
                          className=""
                          onEditorStateChange={onEditorTitleStateChange}
                          wrapperStyle={{}}
                          editorStyle={{}}
                          toolbarStyle={{}}
                          toolbar={{
                            options: [
                              "inline",
                              // "blockType",
                              // "fontSize",
                              // "fontFamily",
                              // "colorPicker",
                            ],
                          }}
                        />
                      </div>
                      <div className="form-group mb-0 col-4">
                        <label for="">Enter Announcement Heading (Ar)*</label>
                        <Editor
                          editorState={editorTitleStateAr}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class border rounded px-1"
                          toolbarClassName="toolbar-class border rounded"
                          className=""
                          onEditorStateChange={onEditorTitleStateChangeAr}
                          wrapperStyle={{}}
                          editorStyle={{}}
                          toolbarStyle={{}}
                          toolbar={{
                            options: [
                              "inline",
                              // "blockType",
                              // "fontSize",
                              // "fontFamily",
                              // "colorPicker",
                            ],
                          }}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label for="">Enter Text Here (En)*</label>
                        <Editor
                          editorState={editorDescState}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class border rounded p-2"
                          toolbarClassName="toolbar-class border "
                          onEditorStateChange={onEditorDescStateChange}
                          wrapperStyle={{}}
                          editorStyle={{}}
                          toolbarStyle={{}}
                          toolbar={{
                            options: [
                              "inline",
                              // "blockType",
                              // "fontSize",
                              // "fontFamily",
                              // "colorPicker",
                            ],
                          }}
                        />
                      </div>
                      <div className="form-group col-6">
                        <label for="">Enter Text Here (Ar)*</label>
                        <Editor
                          editorState={editorDescStateAr}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class border rounded p-2"
                          toolbarClassName="toolbar-class border "
                          onEditorStateChange={onEditorDescStateChangeAr}
                          wrapperStyle={{}}
                          editorStyle={{}}
                          toolbarStyle={{}}
                          toolbar={{
                            options: [
                              "inline",
                              // "blockType",
                              // "fontSize",
                              // "fontFamily",
                              // "colorPicker",
                            ],
                          }}
                        />
                      </div>
                      <div className="form-group col-auto mt-2 text-center">
                        <div className="check_radio">
                          <input
                            type="checkbox"
                            name="table1"
                            id="table1"
                            className="d-none"
                            onChange={() => setIsBanner(!isBanner)}
                          />
                          <label for="table1">Set as home screen banner</label>
                        </div>
                      </div>
                      <div className="form-group col-12 text-center">
                        <a className="comman_btn2 mt-4" onClick={onSubmit}>
                          Send
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col">
                        <h2>
                          Announcement <span>({allAnnounce?.length})</span>
                        </h2>
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
                            <i className="far fa-search"></i>
                          </div>
                        </form>
                      </div>
                      <div class="col-auto">
                        <input
                          type="date"
                          class="custom_date"
                          onChange={(e) => getAnnounce(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row p-4">
                      <div className="col-12">
                        <div className="category_btns_main">
                          {(allAnnounce || [])?.map((item, index) => (
                            <div className="row mx-0 notification-box shadow mb-4">
                              <div className="col-2">
                                <div className="py-2">
                                  <img
                                    src={item?.image}
                                    className="announceImg"
                                  ></img>
                                </div>
                              </div>
                              <div className="col">
                                <div className="notification-box-content announcement-contnt position-relative">
                                  <h2>
                                    <i className="fal fa-bullhorn fs-5"></i> New
                                    Announcement Received
                                  </h2>
                                  <div className="check_toggle home_toggle d-flex align-items-center'">
                                    <div className="text_home">
                                      Home Screen Banner
                                    </div>
                                    <input
                                      data-bs-toggle="modal"
                                      data-bs-target="#staticBackdrop"
                                      type="checkbox"
                                      name="check1"
                                      defaultChecked={item?.isBanner}
                                      id={item?._id}
                                      className="d-none"
                                      onChange={() => AnnounceStatus(item?._id)}
                                    />
                                    <label for={item?._id}></label>
                                  </div>

                                  <p className="d-flex justify-content-between">
                                    <h1
                                      dangerouslySetInnerHTML={createMarkup(
                                        item?.title_en
                                      )}
                                    ></h1>
                                    <h1
                                      dangerouslySetInnerHTML={createMarkup(
                                        item?.title_ar
                                      )}
                                    ></h1>
                                  </p>
                                  <span className="">
                                    {item?.updatedAt?.slice(0, 10) +
                                      " " +
                                      item?.updatedAt?.slice(11, 16)}
                                  </span>
                                  <p className="d-flex justify-content-between">
                                    <small
                                      dangerouslySetInnerHTML={createMarkup(
                                        item?.message_en
                                      )}
                                    ></small>
                                    <small
                                      dangerouslySetInnerHTML={createMarkup(
                                        item?.message_ar
                                      )}
                                    ></small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
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
    </>
  );
}

export default Announcement;

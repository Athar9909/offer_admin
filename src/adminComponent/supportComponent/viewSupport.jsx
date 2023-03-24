import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";

const viewSupport = () => {
  const [sideBar, setSideBar] = useState(true);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  return (
    <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
      <AdminSidebar getBarClick={getBarClick} />
      <div className="admin_main_inner">
        <div className="admin_panel_data height_adjust">
          <div className="row help_view justify-content-center">
            <div className="col-12 design_outter_comman shadow mb-4">
              <div className="row comman_header justify-content-between">
                <div className="col">
                  <h2>Help Category Listing</h2>
                </div>
                <div className="col-auto">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1"
                    className="comman_btn2"
                  >
                    <i className="fas fa-plus me-1" /> Add Question
                  </button>
                </div>
              </div>
              <div className="row mx-0 py-4">
                <div className="col-12 mb-4">
                  <div className="row">
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col">
                          <div className="qa_box_head">
                            <span className="border">01</span>
                            <h2 className="ms-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quidem est numquam explicabo
                              autem incidunt laudantium quis quam a illo
                              accusantium saepe, voluptate sint blanditiis
                              dolore, eius animi exercitationem inventore.
                              Vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col">
                          <div className="qa_box_head align-items-center text-end">
                            <h2 className="me-2">
                              أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                              النشوة وتمجيد{" "}
                            </h2>
                            <span className="border">01</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول
                              استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية،
                              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                              ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن
                              السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                              ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر
                              بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ
                              بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="row">
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col">
                          <div className="qa_box_head">
                            <span className="border">02</span>
                            <h2 className="ms-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quidem est numquam explicabo
                              autem incidunt laudantium quis quam a illo
                              accusantium saepe, voluptate sint blanditiis
                              dolore, eius animi exercitationem inventore.
                              Vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col">
                          <div className="qa_box_head align-items-center text-end">
                            <h2 className="me-2">
                              أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                              النشوة وتمجيد{" "}
                            </h2>
                            <span className="border">02</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول
                              استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية،
                              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                              ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن
                              السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                              ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر
                              بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ
                              بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="row">
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col">
                          <div className="qa_box_head">
                            <span className="border">03</span>
                            <h2 className="ms-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quidem est numquam explicabo
                              autem incidunt laudantium quis quam a illo
                              accusantium saepe, voluptate sint blanditiis
                              dolore, eius animi exercitationem inventore.
                              Vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col">
                          <div className="qa_box_head align-items-center text-end">
                            <h2 className="me-2">
                              أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                              النشوة وتمجيد{" "}
                            </h2>
                            <span className="border">03</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول
                              استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية،
                              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                              ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن
                              السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                              ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر
                              بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ
                              بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="row">
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col">
                          <div className="qa_box_head">
                            <span className="border">04</span>
                            <h2 className="ms-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quidem est numquam explicabo
                              autem incidunt laudantium quis quam a illo
                              accusantium saepe, voluptate sint blanditiis
                              dolore, eius animi exercitationem inventore.
                              Vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col">
                          <div className="qa_box_head align-items-center text-end">
                            <h2 className="me-2">
                              أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                              النشوة وتمجيد{" "}
                            </h2>
                            <span className="border">04</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول
                              استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية،
                              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                              ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن
                              السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                              ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر
                              بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ
                              بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="row">
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col">
                          <div className="qa_box_head">
                            <span className="border">05</span>
                            <h2 className="ms-2">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Quidem est numquam explicabo
                              autem incidunt laudantium quis quam a illo
                              accusantium saepe, voluptate sint blanditiis
                              dolore, eius animi exercitationem inventore.
                              Vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-stretch">
                      <div className="qa_box row position-relative border align-items-start">
                        <div className="col-auto">
                          <a
                            className="comman_btn2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop2"
                            href="javscript:;"
                          >
                            <i className="far fa-edit me-1" /> Edit
                          </a>
                        </div>
                        <div className="col">
                          <div className="qa_box_head align-items-center text-end">
                            <h2 className="me-2">
                              أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                              النشوة وتمجيد{" "}
                            </h2>
                            <span className="border">05</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="qa_box_content border">
                            <p>
                              كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول
                              استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك
                              التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية،
                              فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                              ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن
                              السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                              ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر
                              بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ
                              بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد{" "}
                            </p>
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
        class="modal fade Edit_help Edit_modal"
        id="staticBackdrop2"
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
              ></button>
            </div>
            <div class="modal-body">
              <form class="form-design row mx-0 py-2" action="">
                <div class="form-group col-12 text-end">
                  <label class="text-end" for="quesstioon">
                    Question
                  </label>
                  <input
                    class="form-control text-end"
                    type="text"
                    id="quesstioon"
                    name="quesstioon"
                    value="كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول"
                  />
                </div>
                <div class="form-group col-12 text-end">
                  <label class="text-end" for="quesstioon">
                    Answer
                  </label>
                  <textarea
                    class="form-control text-end"
                    name="message"
                    id="message"
                    style="height:150px;"
                  >
                    كن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار
                    النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف
                    حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو
                    يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا
                    يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية
                    ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
                    يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو
                    الألم ولكن نتيجة لظروف ما قد{" "}
                  </textarea>
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
                Add Question
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="form-design row mx-0 py-2" action="">
                <div class="form-group text-center col-6 top_head">
                  <label class="text-center" for="">
                    - English -
                  </label>
                </div>
                <div class="form-group text-center col-6 top_head">
                  <label class="text-center" for="">
                    - Arabic -
                  </label>
                </div>
                <div class="form-group col-6">
                  <label for="quesstioon">Question</label>
                  <input
                    class="form-control"
                    type="text"
                    id="quesstioon"
                    name="quesstioon"
                    placeholder="Please Enter Your Question"
                  />
                </div>
                <div class="form-group col-6 text-end">
                  <label class="text-end" for="quesstioon">
                    Question
                  </label>
                  <input
                    class="form-control text-end"
                    type="text"
                    id="quesstioon"
                    name="quesstioon"
                    placeholder="الرجاء إدخال سؤالك"
                  />
                </div>
                <div class="form-group col-6">
                  <label for="quesstioon">Answer</label>
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    style="height:150px;"
                  >
                    Please Enter Your Answer
                  </textarea>
                </div>
                <div class="form-group col-6 text-end">
                  <label class="text-end" for="quesstioon">
                    Answer
                  </label>
                  <textarea
                    class="form-control text-end"
                    name="message"
                    id="message"
                    style="height:150px;"
                  >
                    من فضلك أدخل إجابتك
                  </textarea>
                </div>
                <div class="form-group col-12 text-center mb-0">
                  <button type="submit" class="comman_btn">
                    Add
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

export default viewSupport;

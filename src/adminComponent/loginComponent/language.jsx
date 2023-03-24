import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Language() {
  const [langAr, setLangAr] = useState(false);
  return (
    <>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-start">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4 text-center">
                    <img src="../assets/img/admin/logo.png" alt="" />
                    <h1>Choose Your Language</h1>
                  </div>
                  <div className="col-12">
                    <form className="row form-design" action="">
                      <div className="language">
                        <div id="google_translate_element"></div>
                        <div className="language_bax">
                          <div className="flag-lists translation-links d-flex justify-content-center p-0 w-100">
                            <div
                              className={
                                langAr
                                  ? "flag-lists_in"
                                  : "flag-lists_in active"
                              }
                            >
                              <a
                                className="english shadow"
                                data-lang="English"
                                href="#"
                                onClick={() => setLangAr(false)}
                              >
                                <img
                                  className="mr-md-2 ml-md-0 ml-1 flag_img"
                                  src="../assets/img/admin/united-kingdom.png"
                                />
                                <span>English</span>
                              </a>
                            </div>
                            <div
                              className={
                                langAr
                                  ? "flag-lists_in active"
                                  : "flag-lists_in "
                              }
                            >
                              <a
                                className="arabic shadow"
                                data-lang="Arabic"
                                href="#"
                                onClick={() => setLangAr(true)}
                              >
                                <img
                                  className="mr-md-2 ml-md-0 ml-1 flag_img"
                                  src="../assets/img/admin/saudi_flag1.png"
                                />
                                <span>Arabic</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="google_translate_element"></div>
                      </div>
                      <div className="form-group col-12 text-center mt-4 pt-3">
                        <Link className="comman_btn" to="/admin/dashboard">
                          Continue
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Language;

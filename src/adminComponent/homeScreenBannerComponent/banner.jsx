import React, { useState } from "react";
import AdminHeader from "../commonComponent.jsx/adminHeader";
import AdminSidebar from "../commonComponent.jsx/adminSidebar";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getAllBanners } from "../httpService/DashboardHttp";
import { useEffect } from "react";
function Banner() {
  const [sideBar, setSideBar] = useState(true);
  const [banners, setBanners] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    GETBANNERS();
  }, []);
  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  const GETBANNERS = async () => {
    const { data } = await getAllBanners();
    if (!data.error) {
      setBanners(data?.results?.banner);
    }
  };
  const onFileSelection = (e, key, id, ind) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    if (e.target.files[0]) {
      var picture = new FileReader();
      picture.readAsDataURL(e.target.files[0]);
      picture.addEventListener("load", function (event) {
        document.getElementById(ind).setAttribute("src", event.target.result);
      });
    }
  };
  const BannerStatus = () => {};
  const onSave = async () => {
    let formdata = new FormData();
    formdata.append();
  };

  return (
    <>
      <div className={sideBar === "click" ? "expanded_main" : "admin_main"}>
        <AdminSidebar getBarClick={getBarClick} />
        <div className="admin_main_inner">
          <div className="admin_panel_data height_adjust">
            <div className="row signup_management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Home Screen Banners</h2>
                      </div>

                      <div className="col-auto">
                        <button
                          className="comman_btn mx-2 bg-white"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop4"
                        >
                          Preview
                        </button>

                        <button className="comman_btn bg-white mx-2">
                          Save
                        </button>
                        <button className="comman_btn bg-white">
                          Add Banner
                        </button>
                      </div>
                    </div>

                    <form
                      className="form-design py-5  row  align-items-end justify-content-between"
                      action=""
                    >
                      <OwlCarousel
                        className="banner_slider "
                        autoplay={true}
                        autoplayHoverPause={true}
                        autoplayTimeout={8000}
                        rewind={true}
                        // loop={true}
                        dots={false}
                        nav={true}
                        video={true}
                        lazyLoad={true}
                        items={3}
                      >
                        {banners?.map((item, ind) => (
                          <div className="">
                            <div class="banner_sliders_box ">
                              <div class="row Onboarding_box mb-4 mx-0">
                                <span class="head_spann">
                                  Home Screen {ind + 1}
                                </span>
                                <div class="check_toggle">
                                  <input
                                    type="checkbox"
                                    defaultChecked={item?.status}
                                    name={item?._id}
                                    id={ind + "df"}
                                    className=""
                                    onChange={() => BannerStatus()}
                                    style={{
                                      opacity: "0%",
                                      width: "2rem",
                                      height: "2rem",
                                      position: "relative",
                                      left: "1.2rem",
                                      top: "1rem",
                                      zIndex: "9999",
                                    }}
                                  />
                                  <label for={item?._id}></label>
                                </div>
                                <div class="form-group mb-0 col-12">
                                  <div class="banner-profile position-relative">
                                    <div class="banner-Box bg-dark">
                                      <img
                                        class="home-banner"
                                        id={ind}
                                        src={
                                          item?.image
                                            ? item?.image
                                            : require("../../assets/img/upload_file.png")
                                        }
                                      />
                                    </div>
                                    <div class="p-image">
                                      <i class="upload-button fas fa-camera"></i>
                                      <input
                                        class="file-upload"
                                        type="file"
                                        id={item?._id}
                                        accept="image/*"
                                        onChange={(e) =>
                                          onFileSelection(
                                            e,
                                            `banner${ind}`,
                                            item?._id,
                                            ind
                                          )
                                        }
                                        style={{
                                          opacity: "0%",
                                          width: "2rem",
                                          height: "2rem",
                                          position: "relative",
                                          zIndex: "9999",

                                          left: "-10px",
                                          top: "2px",
                                          cursor: "pointer",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="form-group mb-0 col-12">
                                  <label for="">Upload Url</label>
                                  <input
                                    class="form-control"
                                    defaultValue={item?.url}
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </OwlCarousel>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal  fade Edit_modal"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Preview
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6 p-3 text-center">
                  <img
                    className="demo_img"
                    src="../assets/img/admin/Picsart_22-12-09_13-51-53-094.png"
                    alt=""
                  />
                </div>
                <div className="col-6 p-3 text-center ">
                  <img
                    className="demo_img2"
                    src="../assets/img/admin/Picsart_22-12-09_13-49-54-977.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 p-3 text-center">
                  <h1>Android</h1>
                </div>
                <div className="col-6 p-3 text-center ">
                  <h1>IPhone</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

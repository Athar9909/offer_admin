import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../httpService/LoginHttp";
import classNames from "classnames";
import { useForm } from "react-hook-form";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function togglePassword() {
    var x = document.getElementById("password-Input");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const onSubmit = async (data) => {
    console.log(data);
    const res = await adminLogin(data);

    if (!res?.data.error) {
      navigate("/admin/select-language");
    }
  };
  return (
    <>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-start">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4">
                    <div className="text-center">
                      <img
                        // src="../assets/img/admin/logo.png"
                        src={require("./../../assets/img/logo1.PNG")}
                        alt=""
                      />
                    </div>
                    <h1>Login for Admin Panel</h1>
                    <p>Please enter your email and password</p>
                  </div>
                  <div className="col-12">
                    <form
                      className="row form-design "
                      onSubmit={handleSubmit(onSubmit)}
                      action=""
                    >
                      <div className="form-group col-12 text-start">
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
                      <div className="form-group col-12 text-start">
                        <label for="">Password</label>
                        <input
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.password,
                          })}
                          id="password-Input"
                          placeholder="Password"
                          name="password"
                          {...register("password", {
                            required: "Please Enter Your Password",
                          })}
                        />
                        <input
                          type="checkbox"
                          onClick={togglePassword}
                          className="showPassCheck"
                        />
                        <small className="showPass">Show Password</small>
                        <br />
                        {errors.password && (
                          <small className="errorText ">
                            {errors.password?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <Link className="for_got" to="/admin/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="form-group col-12">
                        <button className="comman_btn" type="submit">
                          Submit
                        </button>
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

export default Login;

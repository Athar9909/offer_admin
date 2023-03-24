import appHttpService from "../adminHttpServices";
import Swal from "sweetalert2";

export async function adminLogin(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/login`,
      formData
    );
    console.log(data);

    if (!data.error) {
      await localStorage.removeItem("admin-log-token");
      await localStorage.setItem("admin-log-token", data.results.token);
      await localStorage.setItem(
        "admin-data",
        JSON.stringify(data.results.verify)
      );
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonColor: "#da3c3b",

        confirmButtonText: "Okay",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function adminEditProfile(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/updateProfile`,
      formData
    );
    console.log(data);
    await localStorage.setItem(
      "admin-data",
      JSON.stringify(data.results.admin)
    );
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonColor: "#da3c3b",
        confirmButtonText: "Okay",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function adminUpdatePassword(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/changePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonColor: "#da3c3b",
        confirmButtonText: "Okay",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function adminForgotPass(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/forgetPassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function adminVerifyOtp(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/verifyOtp`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function adminResetPassword(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/updatePassword`,
      formData
    );
    console.log(data);
    if (!data.error) {
      Swal.fire({
        title: data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    } else {
      Swal.fire({
        title: data?.message,
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

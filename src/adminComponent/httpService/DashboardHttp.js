import appHttpService from "../adminHttpServices";
import Swal from "sweetalert2";

export async function AllCategory(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getCategories`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AllSubCategory() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getSubCategories`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function SubCategorybyCate(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getByCategory`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AddCategory(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addCategory`,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function editCategiry(id, formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/editCategory` + "/" + id,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function changeCategoryStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/categoryStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function changeCateShipStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/categoryShipmentStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function editSubCategory(id, formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/modifySubCategory` +
        "/" +
        id,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function editSubSubCategory(id, formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/modifySubSubCategory` +
        "/" +
        id,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function editAttributes(id, formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/modifyAttribute` +
        "/" +
        id,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function editValues(id, formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/modifyValue` + "/" + id,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getCategories(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewCategory` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function getSubCategory(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewSubCategory` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getAttribute(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewAttribute` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getValues(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewValue` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getSubSubCategory(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewSubSubCategory` +
        "/" +
        id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AddSubCategory(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addSubCategory`,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function subCateStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/subCategoryStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function subSubCateStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/subSubCatStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AttributeStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/attributeStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function ValuesStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/valueStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function subCateShipStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/subCategoryShipmentStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function subSubCateShipStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/subSubCatShipmentStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AttributeShipStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/attributeShipmentStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function ValuesShipStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/valueShipmentStatus` +
        "/" +
        id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AddSubSubCategory(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addSubSubCategory`,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function SubSubCategorybySubCate(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBySubCategory`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AddAttributes(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addAttribute`,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AttributesBySubSubCate(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getBySubSubCategory`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AddValues(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addValues`,
      formData
    );

    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AllSubSubCategory() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getSubSubCategories`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AllAttributes() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getAttributes`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AllNewValues() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getValues`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function AllUsers(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/allUsers`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function changeUserStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/userStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function getUserDetails(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getUser` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function getOffers(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/allOffers`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function changeOfferStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/offerStatus` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function getOfferDetails(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/viewOffer` + "/" + id
    );
    console.log(data);

    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function getInformation(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getInformations`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function editInformation(formData, id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/editInformation` +
        "/" +
        id,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getContent(formData) {
  try {
    const { data } = await appHttpService.get(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getContent`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function editContent(formData, id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/editContent` + "/" + id,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function exportUser() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/exportExcel`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

export async function dashboardCount() {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/dashboardCount`
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function AddAnnouncements(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addAnnouncement`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function getAnnouncements(formData) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/getAnncouncements`,
      formData
    );
    console.log(data);
    if (data?.error) {
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
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}
export async function bannerStatus(id) {
  try {
    const { data } = await appHttpService.post(
      `${process.env.REACT_APP_APIENDPOINT}api/admin/addtoBanner` + "/" + id
    );
    console.log(data);
    return { data };
  } catch (error) {
    if (error.response) {
      console.log(error?.response);
      Swal.fire({
        title: "401 Error!",
        text: "",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#da3c3b",
      });
    }
    return { error };
  }
}

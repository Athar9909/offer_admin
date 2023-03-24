import React from "react";

function CustomNotification() {
  return (
    <>
      <div className="row p-4 mx-0">
        <form
          className="form-design help-support-form row align-items-end justify-content-between"
          action=""
        >
          <div className="form-group mb-0 col">
            <label for="">Enter Text Here (En)</label>
            <textarea
              className="form-control"
              name=""
              id=""
              style={{ height: "120px" }}
            ></textarea>
          </div>
          <div className="form-group mb-0 col">
            <label for="">Enter Text Here (Ar)</label>
            <textarea
              className="form-control"
              name=""
              id=""
              style={{ height: "120px" }}
            ></textarea>
          </div>
          <div className="form-group mb-0 col-auto">
            <button className="comman_btn2">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomNotification;

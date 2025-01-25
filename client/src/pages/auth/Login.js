import React from "react";
import Form from "../../component/Shared/Form/InputType";
import banner1 from "../../assests/banner1.jpg";
const Login = () => {
  return (
    <div className="row g-0">
      <div className="col-md-8 form-banner">
        <img src={banner1} alt="loginImage" />
      </div>
      <div className="col-md-4 form-container">
        <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"Login"} />
      </div>
    </div>
  );
};

export default Login;

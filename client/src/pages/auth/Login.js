import React from "react";
import Form from "../../component/Shared/Form/InputType";

const Login = () => {
  return (
    <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
          <Form formTitle={'Login Page'} submitBtn={'Login'} formType={'Login'}/>
            
          </div>
        </div>
  );
};

export default Login;

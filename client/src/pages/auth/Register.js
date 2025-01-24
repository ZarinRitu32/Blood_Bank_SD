import React from "react";
import Form from "../../component/Shared/Form/Form";

const Register = () => {
  return (
    <div className="row g-0">
      <div className="col-md-8">
        <image src = "./assets/images/banner2.jpg" alt ="registerImage" />
      </div>
      <div className="col-md-4 form-container">
        <Form formTitle={'Register Page'} submitBtn={'Register'}/>
        
      </div>

      
    </div>
  );
};

export default Register;

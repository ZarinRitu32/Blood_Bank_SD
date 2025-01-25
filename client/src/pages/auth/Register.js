import React from "react";
import Form from "../../component/Shared/Form/Form";
import banner2 from "../../assests/banner2.jpg";

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row g-0" style={{ height: "100vh" }}>
        {/* Left Column - Image */}
        <div className="col-md-8 form-banner">
          <img
            src={banner2}
            alt="registerImage"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // Ensures the image scales properly
            }}
          />
        </div>
        {/* Right Column - Form */}
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"Register"}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

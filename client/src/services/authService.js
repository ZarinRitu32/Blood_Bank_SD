
//import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if(!role|| !email || !password){
      return alert("please provide all fields!")
    }
    
    console.log("login",e,email, password, role)
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    
    console.log("register",e,
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website)
      }
  catch (error) {
    console.log(error);
  }
};

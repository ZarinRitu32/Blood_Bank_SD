import React,{useStates} from 'react'
import InputType from './InputType'

    const Form = ({ formType, submitBtn, formTitle }) => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [role, setRole] = useState("donar");
        const [name, setName] = useState("");
        const [organisationName, setOrganisationName] = useState("");
        const [hospitalName, setHospitalName] = useState("");
        const [website, setWebsite] = useState("");
        const [address, setAddress] = useState("");
        const [phone, setPhone] = useState("");

  return (
    <div>
        <form>
            <h1 classNmae='text-center'>{formTitle}</h1>
            <hr />
                <InputType
                labelText {"email"} 
                labelFor={'forEmail'}
                inputType={'email'}
                name={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /> 
                <InputType
                labelText {"Password"} 
                labelFor={'forPassword'}
                inputType={'Password'}
                name={'Password'}
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                /> 
                <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                />
                <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                 <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                />
                <InputType
                    labelText={"website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
            
<div className = "d-fle">
    <button className='btn btn-primary' type="submit">
        {SubmitBtn}
    </button>

</div>

        </form>
    </div>
  )
}

export default Form

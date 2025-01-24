import React from 'react'

const InputType = ({labelText,labelFor,inputType,value,onChange,name}) => {
  return (
    <>
        <div className="form-group">
    <label htmlFor={labelFor}>{labelText}</label>
    <input type={inputType} 
     className="form-control"
     name={name}
     value={value} 
     onChange={onChange}
     />
    
  </div>
  </>  
  );
};

export default InputType

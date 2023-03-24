import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const InputTag = ({
  type,
  id,
  value,
  name,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <div className='form-outline w-100 mb-4'>
        <input
          type={type}
          id={id}
          autoComplete='off'
          value={value}
          name={name}
          onChange={onChange}
          className={`form-control fs-5 form-control-lg maininp`}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  );
};

export default InputTag;

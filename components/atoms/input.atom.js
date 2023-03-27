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
      <div className="form-outline w-100">
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          className={`form-control fs-5 form-control-lg ${
            id !== "password" && id !== "conpassword" && "maininp"
          } `}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  );
};

export default InputTag;

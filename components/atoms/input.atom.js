import React from "react";

const Input = (props) => {

  const {type, id, value, name, onChange, placeholder, ...rest } = props;

  return (
    <>
      <div className="form-outline w-100 mb-4">
        <input
          type={type}
          id={id}
          autoComplete="off"
          value={value}
          name={name}
          onChange={onChange}
          className="form-control form-control-lg"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;

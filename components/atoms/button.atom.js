import React from "react";

const Button = (props) => {
    const { value, className, ...rest } = props;
  return (
    <>
      <button
        type="submit"
        className={className}
        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        {...rest}
      >
        {value}
      </button>
    </>
  );
};

export default Button;

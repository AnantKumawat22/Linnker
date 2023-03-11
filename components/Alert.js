import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    console.log(word);
    if (word === "danger") word = "Error";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div
      style={{
        height: "50px",
        position: "fixed",
        width: "100%",
        zIndex: "9999",
      }}
    >
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;

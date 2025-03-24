import React from "react";

const Input = ({ type = "text", ...props }) => {
  return <input type={type} className="border p-2 rounded" {...props} />;
};

export default Input;

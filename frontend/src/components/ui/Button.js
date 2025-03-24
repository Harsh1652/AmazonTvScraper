import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded" {...props}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`bg-blue-gradient px-6 py-4 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;

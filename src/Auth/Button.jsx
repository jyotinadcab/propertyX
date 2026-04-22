import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition"
    >
      {text}
    </button>
  );
};

export default Button;
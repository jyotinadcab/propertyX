import React from "react";

const InputField = ({ label, type = "text", ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  );
};

export default InputField;
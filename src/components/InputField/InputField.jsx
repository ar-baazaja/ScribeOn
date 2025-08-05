import React from "react";
import "./InputField.css";

function InputField({ type, placeholder, value, onChange, icon }) {
  return (
    <div className="input-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon && <div className="icon">{icon}</div>}
    </div>
  );
}

export default InputField;

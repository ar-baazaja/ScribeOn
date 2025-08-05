import React from "react";
import "./RoleSelect.css";

function RoleSelect({ value, onChange }) {
  return (
    <select className="role-select" value={value} onChange={onChange}>
      <option value="">Select your role</option>
      <option value="admin">Admin</option>
      <option value="employee">Employee</option>
    </select>
  );
}

export default RoleSelect;

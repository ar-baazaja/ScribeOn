import React, { useState } from "react";
import "./Login.css";
import bgImage from "../../assets/login-bg.png";
import logo from "../../assets/logo-white 1.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import InputField from "../../components/InputField/InputField";
import RoleSelect from "../../components/RoleSelect/RoleSelect";
import Button from "../../components/Button/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (role === "admin") {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", email.split('@')[0]); // Use email prefix as name
      window.location.reload();
    } else {
      alert("Only admin can access the dashboard in this demo.");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="logo">
        <img src={logo} alt="Scribe9n Logo" className="scribeon-logo" />
      </div>
      <div className="login-card">
        <h2>Sign in to Dashboard</h2>
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          }
        />
        <RoleSelect value={role} onChange={(e) => setRole(e.target.value)} />
        <Button text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const userRole = localStorage.getItem("userRole");
  return (
    <div className="app-container">
      {userRole === "employee" ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;

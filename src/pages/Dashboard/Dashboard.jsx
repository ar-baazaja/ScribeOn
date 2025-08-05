import React from "react";
import "./Dashboard.css";
import logo from "../../assets/logo-white 1.png";
import dashboardIcon from "../../assets/Dashboard Layout.png";
import rewardIcon from "../../assets/Reward.png";
import graphsIcon from "../../assets/Graphs.png";
import leaderboardIcon from "../../assets/Leaderboard.png";
import bellIcon from "../../assets/Bell.png";
import logoutIcon from "../../assets/Logout.png";
import userAvatar from "../../assets/Ellipse 1.png";

const Sidebar = () => {
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const firstLetter = userName.charAt(0).toUpperCase();
  
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    window.location.reload();
  };
  
  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <div className="user-avatar">
          {firstLetter}
        </div>
        <div className="user-info">
          <div className="user-name">{userName}</div>
          <div className="user-email">{userEmail}</div>
        </div>
      </div>
      <nav className="sidebar-menu">
        <div className="menu-title">Main Menu</div>
        <ul>
          <li><img src={dashboardIcon} alt="Dashboard" className="menu-icon" /> Dashboard</li>
          <li><img src={rewardIcon} alt="Rewards" className="menu-icon" /> Rewards</li>
          <li><img src={graphsIcon} alt="Graphs" className="menu-icon" /> Graphs</li>
          <li><img src={leaderboardIcon} alt="Leaderboard" className="menu-icon" /> Leaderboard</li>
        </ul>
      </nav>
      <button className="sidebar-logout" onClick={handleLogout}>
        <img src={logoutIcon} alt="Logout" className="logout-icon" /> Log Out
      </button>
    </aside>
  );
};

const TopBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    window.location.reload();
  };
  
  return (
    <header className="topbar">
      <div className="topbar-logo">
        <img src={logo} alt="Scribe9n Logo" />
      </div>
      <div className="topbar-actions">
        <button className="topbar-bell">
          <img src={bellIcon} alt="Notifications" className="bell-icon" />
        </button>
        <button className="topbar-logout" onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" className="logout-icon" /> Log Out
        </button>
      </div>
    </header>
  );
};

const Dashboard = () => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="dashboard-main">
      <TopBar />
      {/* Placeholder for dashboard content */}
      <div className="dashboard-content-placeholder"></div>
    </div>
  </div>
);

export default Dashboard;
import React from "react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user")) || {};
    console.log("Fetched user from localStorage:", user);


    return (
        <div className="settingsPage">
            <h1><i className="fa-solid fa-gear"></i> Settings</h1>
            <p className="subtitle">Manage your account and preferences below.</p>

            
            {/* Profile Section */}
            <div className="settingsSection">
                <h2> Profile Settings</h2>
                <p>Name: <strong>{user.name}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
            </div>

            {/* Preferences Section */}
            <div className="settingsSection">
                <h2>Preferences</h2>
                <p>Theme: <strong>Dark</strong></p>
                <p>Notifications: <strong>Enabled</strong></p>
            </div>

            {/* Go Back */}
            <button onClick={() => navigate(-1)} className="backBtn">
                Go Back
            </button>
        </div>
    );
}

export default Settings;

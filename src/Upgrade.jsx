import React from "react";
import "./Upgrade.css";
import { useNavigate } from "react-router-dom";

function Upgrade() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    return (
        <div className="upgradePage">
            <h1 className="upgradeTitle">Upgrade Your Plan</h1>
            <p className="upgradeSubtitle">Choose a plan that fits your needs and unlock premium features!</p>

            <div className="planContainer">
                <div className="planCard highlight">
                    <h2>Basic</h2>
                    <p>Perfect for individuals</p>
                    <h3>Free</h3>
                    <ul>
                        <li>Access to chat</li>
                        <li>Limited chat history</li>
                        <li>Community support</li>
                    </ul>
                    <button disabled>Current Plan</button>
                </div>

                <div className="planCard">
                    <h2>Pro</h2>
                    <p>Best for power users</p>
                    <h3>₹199/month</h3>
                    <ul>
                        <li>Unlimited chat history</li>
                        <li>Priority support</li>
                        <li>Advanced customization</li>
                    </ul>
                    <button>Upgrade Now</button>
                </div>

                <div className="planCard">
                    <h2>Enterprise</h2>
                    <p>For teams & organizations</p>
                    <h3>Contact us</h3>
                    <ul>
                        <li>Team dashboard</li>
                        <li>Dedicated support</li>
                        <li>Custom integrations</li>
                    </ul>
                    <button>Get in Touch</button>
                </div>
            </div>

            <button className="backBtn" onClick={handleSubmit}>Go back</button>
        </div>
    );
}

export default Upgrade;

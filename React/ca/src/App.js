import React from "react";
import "./Pricing.css"; // Link to the CSS file for styling

const PricingCard = ({ icon, title, price, storage, users, sendUpTo }) => {
  return (
    <div className="pricing-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <p>{storage}</p>
      <p>{users}</p>
      <p>{sendUpTo}</p>
      <button className="trial-button">Start Trial</button>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      <PricingCard
        icon="👤"
        title="Single User"
        price="149"
        storage="500 GB Storage"
        users="1 Granted User"
        sendUpTo="Send up to 2 GB"
      />
      <PricingCard
        icon="👥"
        title="Double User"
        price="149"
        storage="500 GB Storage"
        users="1 Granted User"
        sendUpTo="Send up to 2 GB"
      />
      <PricingCard
        icon="👨‍👩‍👦"
        title="Triple User"
        price="149"
        storage="500 GB Storage"
        users="1 Granted User"
        sendUpTo="Send up to 2 GB"
      />
    </div>
  );
};

export default Pricing;

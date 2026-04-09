import React from "react";

const AssetCard = ({ asset, price, onDelete }) => {
  return (
    <div className="card">
      <h4>{asset.name.toUpperCase()}</h4>
      <p>Amount: {asset.amount}</p>
      <p>Price: ${price}</p>
      <p>Total: ${(price * asset.amount).toFixed(2)}</p>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
};

export default AssetCard;
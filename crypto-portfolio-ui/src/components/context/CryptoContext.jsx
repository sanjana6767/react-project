import React, { createContext, useState } from "react";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);

  const addAsset = (asset) => {
    setAssets([...assets, asset]);
  };

  const removeAsset = (index) => {
    const updated = assets.filter((_, i) => i !== index);
    setAssets(updated);
  };

  return (
    <CryptoContext.Provider value={{ assets, addAsset, removeAsset }}>
      {children}
    </CryptoContext.Provider>
  );
};
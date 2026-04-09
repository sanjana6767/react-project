import React, { useState, useContext } from "react";
import { CryptoContext } from "./context/CryptoContext";
const AddAsset = () => {
  const { addAsset } = useContext(CryptoContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) return;

    addAsset({
      name,
      amount: parseFloat(amount),
    });

    setName("");
    setAmount("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Crypto Name (bitcoin)"
        value={name}
        onChange={(e) => setName(e.target.value.toLowerCase())}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddAsset;
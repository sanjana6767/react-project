import React from "react";
import { CryptoProvider } from "./components/context/CryptoContext";
import Navbar from "./components/Navbar";
import AddAsset from "./components/AddAsset";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <CryptoProvider>
      <Navbar />
      <AddAsset />
      <Portfolio />
    </CryptoProvider>
  );
}

export default App;
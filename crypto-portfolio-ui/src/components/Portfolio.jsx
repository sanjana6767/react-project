import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CryptoContext } from "./context/CryptoContext";
import AssetCard from "./AssetCard";

const Portfolio = () => {
  const { assets, removeAsset } = useContext(CryptoContext);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      let newPrices = {};

      for (let asset of assets) {
        try {
          const res = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${asset.name}&vs_currencies=usd`
          );

          newPrices[asset.name] = res.data[asset.name]?.usd || 0;
        } catch {
          newPrices[asset.name] = 0;
        }
      }

      setPrices(newPrices);
    };

    if (assets.length > 0) fetchPrices();
  }, [assets]);

  return (
    <div className="portfolio">
      <h3>Your Portfolio</h3>

      {assets.map((asset, index) => (
        <AssetCard
          key={index}
          asset={asset}
          price={prices[asset.name] || 0}
          onDelete={() => removeAsset(index)}
        />
      ))}
    </div>
  );
};

export default Portfolio;
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const Balance = ({ provider, account }) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      if (provider && account) {
        const bal = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(bal));
      }
    };
    fetchBalance();
  }, [provider, account]);

  return (
    <div className="flex justify-center align-middle  mb-16 mx-auto my-auto font-bold text-green-700 text-2xl ">
      Balance: {balance} ETH
    </div>
  );
};

export default Balance;

import React, { useState } from "react";
import { ethers } from "ethers";

const SendETH = ({ provider, account }) => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendETH = async () => {
    setStatus("");

    try {
      const signer = provider.getSigner();
      setLoading(true);
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.utils.parseEther(amount),
      });
      setLoading(true);
      await tx.wait();
      setLoading(false);
      setStatus("Transaction successful!");
    } catch (err) {
      setLoading(false);
      console.error("Transaction failed:", err);
      setStatus("Transaction failed. Please try again.");
    }
  };

  return (
    <div className=" flex flex-col align-middle text-center mx-auto bg-gray-200 rounded-lg max-w-[90%] py-7 px-4 ">
      <h2 className=" text-xl font-bold text-purple-800">
        Send Ethereum (Sepolia)
      </h2>

      <input
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="border p-2 m-2"
      />
      <div>
        <input
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 m-2"
        />
        {loading ? (
          <button
            disabled
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Processing...
          </button>
        ) : (
          <button
            onClick={sendETH}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send ETH
          </button>
        )}
        <div className="rounded-xl ">
          {status && (
            <p className="mt-3 text-center text-green-500">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendETH;

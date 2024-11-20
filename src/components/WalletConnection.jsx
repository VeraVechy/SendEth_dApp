import React from "react";

const WalletConnection = ({ connectWallet, account }) => {
  return (
    <div className="text-center mt-10">
      {account ? (
        <button className="flex justify-center align-middle max-w-[99%]  mt-16 mx-auto bg-green-700 text-white text-wrap py-2 px-4 rounded ">
          Connected Successfully: {account}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-purple-500 text-white py-2 px-4 rounded"
        >
          Connect Your Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnection;

import { useWallet } from "./hooks/useWallet";
import Balance from "./components/Balance";
import SendETH from "./components/SendETH";
import Voting from "./components/Voting";

const App = () => {
  const { account, provider, connectWallet, isWalletInstalled } = useWallet();

  return (
    <div className="flex flex-col justify-center bg-black  md:max-w-[80%] my-auto mx-auto">
      {!account && isWalletInstalled ? (
        <div className="flex flex-col justify-center align-middle md:max-w-[80%] my-auto mx-auto">
          <p className="text-center text-white mt-16 ">
            Connect your prefered wallet to get started. <br />
          </p>

          <button
            onClick={connectWallet}
            className="flex flex-col justify-center align-middle  md:max-w-[80%] mx-auto  bg-yellow-500 text-white py-2 px-4 rounded my-4 "
          >
            Connect Your Wallet
          </button>
          <p className="text-center text-white">
            Verify that you are logged into the intended MetaMask account{" "}
          </p>
        </div>
      ) : (
        <div className="flex justify-center align-middle max-w-[99%]  mt-16 mx-auto bg-purple-700 text-white text-wrap py-2 px-4 rounded">
          {account ? `Connected: ${account}` : "MetaMask not installed"}
        </div>
      )}

      {provider && account && (
        <>
          <Balance provider={provider} account={account} />
          <SendETH provider={provider} account={account} />
          <Voting provider={provider} account={account} />
        </>
      )}
    </div>
  );
};

export default App;

import { ethers } from "ethers";

const INFURA_ID = import.meta.env.VITE_INFURA_API_KEY;
const SEPOLIA_RPC_URL = `https://sepolia.infura.io/v3/${INFURA_ID}`;

export const getProvider = () => {
    return new ethers.providers.JsonRpcProvider(SEPOLIA_RPC_URL);
};

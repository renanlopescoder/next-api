import { ethers } from "ethers";

export default async function balance(req, res) {
  const { address } = req.query;
  const provider = ethers.getDefaultProvider();
  const balance = await provider.getBalance(address);
  const balanceFormat = ethers.utils.formatEther(balance);

  res.json({ balance: balanceFormat });
}

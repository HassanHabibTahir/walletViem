import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect, useBalance } from "wagmi";

export default function CustomButton() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  //get balance
  const { data, isError, isLoading } = useBalance({
    address: address,
  })
  

  const label = isConnected ? "Disconnect" : "Connect Custom";

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  function onClick() {
    if (isConnected) {
      disconnect();
    } else {
      onOpen();
    }
  }


    if (isConnected) {
      console.log("Connected")
      if (isLoading) return <div>Fetching balance…</div>
      if (isError) return <div>Error fetching balance</div>
      return(
        <div>
        Balance: {data?.formatted} {data?.symbol}
      </div>
      )
  }

  

  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : label}
    </button>
  );
}

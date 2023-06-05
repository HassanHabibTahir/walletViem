import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";

export default function SignMessage() {
    const [loading, setLoading] = useState(false);
//const sendTR
const { address, isConnected } = useAccount();

  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'For using dapp you need to sign your wallet.',
  })

 

    if (isConnected) {
        return (
            <div>
              <button disabled={isLoading} onClick={() => signMessage()}>
                Sign message
              </button>
              {isSuccess && <div>Signature: {data}</div>}
              {isError && <div>Error signing message</div>}
            </div>
          )
      }
  
}

import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../components/CustomButton";
import SendTransaction from "../components/SendTransaction";
import SignMessage from "../components/SignMessage";

export default function HomePage() {
  return (
    <>
      {/* Predefined button  */}
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
      <br />

      {/* Network Switcher Button */}
      <Web3NetworkSwitch />
      <br />

      {/* Custom button */}
      <CustomButton />

      {/* Send Transaction */}
      <SendTransaction />

       {/* Sign Transaction */}
       <SignMessage />
    </>
  );
}
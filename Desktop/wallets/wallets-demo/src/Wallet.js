import React from 'react';
import './App.css';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi1/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'viem/chains'


const chains = [mainnet, arbitrum, polygon] // Networks
// https://cloud.walletconnect.com
// const projectId = 'YOUR_PROJECT_ID'  // Infura Id
const projectId = "00f9bf9e697ca8332a30d4a71f4c7d5e"  // Infura Id

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

  const wagmiConfig = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
  });

  // 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function ConnectButton() {
    return <w3m-button loadingLabel="open the modal"/>
  }

function FirstWallet({children}) {
  return (
    <div className="App App-header">
      <p>Connect to the wallect</p>
    {/* <WagmiConfig config={wagmiConfig}> */}
        <ConnectButton balance="show" />
        {/* {children} */}
    {/* </WagmiConfig> */}

    </div>
  );
}

export default FirstWallet;
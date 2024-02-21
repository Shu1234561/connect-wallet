import logo from './logo.svg';
import './App.css';
// import {EthereumClient, w3mConnectors, w3mProvider} from 'web3modal/ethereum'
import {EthereumClient, w3mConnectors, w3mProvider} from 'web3modal';
import { Web3Modal } from '@web3modal/react';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { configureChains, createConfig } from 'wagmi';
import { arbitrum, mainnet, polygon } from 'viem/chains';
import ConnectButton from './ConnectionButton';
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'
// import { Web3Button } from '@web3'
import { Web3Button } from '@web3';

const chains = [arbitrum, mainnet, polygon] // Networks
// https://cloud.walletconnect.com
// const projectId = "YOUR_PROJECT_ID"  // Infura Id
const projectId = "a38eb83bdadb45a9994519ee5574c631"  // Infura Id

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const WagmiConfig = createConfig({
  // autoConnect: true,
  connectors: w3mConnectors({ projectId, chains}),
  publicClient
})
const ethereumClient = new EthereumClient(WagmiConfig, chains)

function HomePage() {
  return <Web3Button/>
}

function App() {
  return (
    <>
    {/* <div className="App"> */}
      {/* <WagmiConfig config={WagmiConfig}> */}
        <HomePage/>
        {/* <ConnectButton/> */}
      {/* </WagmiConfig> */}

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    {/* </div> */}
    </>
  );
}

export default App;

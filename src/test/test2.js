
const net = require('net')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getBlock('latest')
  .then((a, b) => {
    console.log(a)
    console.log(b)
  })


const ipcPath = '/root/.ethereum/geth.ipc'
const web4 = new Web3(new Web3.providers.IpcProvider(ipcPath, net))



web4.eth.getBlock('latest')
  .then((a, b) => {
    console.log(a)
    console.log(b)
  })

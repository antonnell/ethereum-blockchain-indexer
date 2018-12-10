
const net = require('net')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.getBlock('latest'))

const ipcPath = '/root/.ethereum/geth.ipc'
const web4 = new Web3(new Web3.providers.IpcProvider(ipcPath, net))

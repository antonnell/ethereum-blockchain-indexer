var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546', {
  headers: {
    Origin: "http://localhost"
  }
}))


web3.eth.getSyncing(callback(error, result){
  if(error) {
    console.log(error)
  }
  if(!error) {
    console.log(result);
    console.log(result.highestBlock);
  }
})

var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider(url, {
  headers: {
    Origin: "http://localhost"
  }
}))

var subscription = web3.eth.subscribe(
  'newBlockHeaders',
  function (err, blockHeader, sub, existingReceipt) {
    console.log("blockHeader", blockHeader);
    subscription.unsubscribe(function() {
      console.log('Successfully unsubscribed!');
    });
  }
);

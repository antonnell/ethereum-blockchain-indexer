var Web3 = require('web3');
var web3 = new Web3('ws://localhost:8546');

var subscription = web3.eth.subscribe(
  'newBlockHeaders',
  function (err, blockHeader, sub, existingReceipt) {
    console.log("blockHeader", blockHeader);
    subscription.unsubscribe(function() {
      console.log('Successfully unsubscribed!');
    });
  }
);

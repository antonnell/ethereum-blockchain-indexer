var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546', {
  headers: {
    Origin: "http://localhost"
  }
}))


var subscription1 = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(transaction){
    console.log('transaction')
    console.log(transaction);
});

var subscription2 = web3.eth.subscribe('newBlockHeaders', function(error, result){
    if (!error) {
        console.log(result);

        return;
    }

    console.error(error);
})
.on("data", function(blockHeader){
    console.log('block')
    console.log(blockHeader);
})
.on("error", console.error);

var subscription3 = web3.eth.subscribe('syncing', function(error, sync){
    if (!error)
        console.log(sync);
})
.on("data", function(sync){
  console.log('syncing')
    // show some syncing stats
})
.on("changed", function(isSyncing){
    if(isSyncing) {
        // stop app operation
    } else {
        // regain app operation
    }
});

var subscription4 = web3.eth.subscribe('logs', {}, function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(log){
    console.log('logs')
    console.log(log);
})
.on("changed", function(log){
});

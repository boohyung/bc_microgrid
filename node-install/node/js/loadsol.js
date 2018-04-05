var abi = [{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powerStart","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"auctionEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nodeID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"power","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionStart","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"groupID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"max","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Bid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Fee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Bidder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"biddingTime","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"powerEnd","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conType","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_type","type":"uint32"},{"name":"_beneficiary","type":"address"},{"name":"_auctionStart","type":"uint32"},{"name":"_biddingTime","type":"uint32"},{"name":"_min","type":"uint256"},{"name":"_max","type":"uint256"},{"name":"_power","type":"uint32"},{"name":"_powerStart","type":"uint32"},{"name":"_powerEnd","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

var bin = '0x' + "6060604052341561000f57600080fd5b60405161012080610b3c833981016040528080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919080519060200190919050505b886000806101000a81548163ffffffff021916908363ffffffff160217905550876000600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600160006101000a81548163ffffffff021916908363ffffffff16021790555085600160046101000a81548163ffffffff021916908363ffffffff160217905550846002819055508360038190555082600460006101000a81548163ffffffff021916908363ffffffff160217905550816004806101000a81548163ffffffff021916908363ffffffff16021790555080600460086101000a81548163ffffffff021916908363ffffffff1602179055505b5050505050505050505b61099a806101a26000396000f300606060405236156100fa576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806312fa6feb146100ff57806315026d821461012c5780631998aeef146101615780632a24f46c1461016b57806338af3eed146101805780633ccfd60b146101d55780633dff2228146102025780634a4d59fa146102375780634f245ef71461026c5780635d049e4a146102a15780636ac5db19146102d65780636e6452cb146102ff578063bef7a2f014610328578063c7d2a2a51461035d578063d074a38d146103b2578063d437746c146103e7578063f88979451461041c578063fd39011c14610445575b600080fd5b341561010a57600080fd5b61011261047a565b604051808215151515815260200191505060405180910390f35b341561013757600080fd5b61013f61048d565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b6101696104a2565b005b341561017657600080fd5b61017e610663565b005b341561018b57600080fd5b61019361073c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101e057600080fd5b6101e8610762565b604051808215151515815260200191505060405180910390f35b341561020d57600080fd5b610215610887565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561024257600080fd5b61024a61089d565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561027757600080fd5b61027f6108b3565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b34156102ac57600080fd5b6102b46108c9565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b34156102e157600080fd5b6102e96108df565b6040518082815260200191505060405180910390f35b341561030a57600080fd5b6103126108e5565b6040518082815260200191505060405180910390f35b341561033357600080fd5b61033b6108eb565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561036857600080fd5b610370610901565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103bd57600080fd5b6103c5610927565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b34156103f257600080fd5b6103fa61093d565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b341561042757600080fd5b61042f610953565b6040518082815260200191505060405180910390f35b341561045057600080fd5b610458610959565b604051808263ffffffff1663ffffffff16815260200191505060405180910390f35b600660009054906101000a900460ff1681565b6004809054906101000a900463ffffffff1681565b600160049054906101000a900463ffffffff16600160009054906101000a900463ffffffff160163ffffffff1642111515156104dd57600080fd5b60016000809054906101000a900463ffffffff1663ffffffff16141561061f57600254341015151561050e57600080fd5b6005543411151561051e57600080fd5b60006004600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156105d257600554600760006004600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b336004600c6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600581905550610660565b60026000809054906101000a900463ffffffff1663ffffffff161415610651576000151561064c57600080fd5b61065f565b6000151561065e57600080fd5b5b5b5b565b600160049054906101000a900463ffffffff16600160009054906101000a900463ffffffff160163ffffffff16421015151561069e57600080fd5b600660009054906101000a900460ff161515156106ba57600080fd5b6001600660006101000a81548160ff0219169083151502179055506000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f19350505050151561073957600080fd5b5b565b6000600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081111561087e576000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561087d5780600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060009150610883565b5b600191505b5090565b600060049054906101000a900463ffffffff1681565b600460009054906101000a900463ffffffff1681565b600160009054906101000a900463ffffffff1681565b600060089054906101000a900463ffffffff1681565b60035481565b60055481565b600660019054906101000a900463ffffffff1681565b6004600c9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160049054906101000a900463ffffffff1681565b600460089054906101000a900463ffffffff1681565b60025481565b6000809054906101000a900463ffffffff16815600a165627a7a723058208ced4dcf7b03d7d5275e002c27d4ce6fd6f0c21e3376a09a99ad65fa57156baf0029";
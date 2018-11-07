## Bonds

Bonds bonds bonds.

### Installation

Clone or download the project.

You might need to setup a new link source to the contract:

`cd src`

`ln -s ../../build/contracts contracts`

### Launch Local Test Blockchain

Start local testnet and mine every 3 seconds:

`ganache-cli -b 3`


If it's your first time, make sure you run:

`truffle migration && truffle deploy`

### Launch React Client

`cd client/`

You need to run `npm install` if it's your first lime launching the client.

`npm start`


### Tests

`truffle test`

Some changes


# Near Hotel Room #


- This Near Hotel Room consists of a Smart Contract and it is witten in assembly script.
- Ultimately, the purpose of this project was to build a simple contract to explore how persistent storage, unit tests, and contract calls interact when building on the NEAR ecosystem.

### Features ###
This project includes following features :
- Receptionist login using Near Wallet
- Receptionist allocated rooms for customers
- Receptionist check the booked rooms list
- Customers will get the room allocated messages in their Near Wallet


### Methods of Smart Contracts Used In Project



#### Change Method

`addDetails` `ConfirmRoomNumber`


#### View Method

`getDetails`




### Quick Start ###


To run this project locally:

- Prerequisites: Make sure you've installed [Node.js] ≥ 12 and `yarn latest version`
- Clone the repository - `https://github.com/lhtdeepak/near-hotelroom.git`
- Install dependencies: `yarn install`
- Run the local development server: `yarn dev` (see `package.json` for a

   full list of `scripts` you can run with `yarn`)



Now you'll have a local development environment backed by the NEAR TestNet!




### File Structure ###


- The "backend" code lives in the `/contract` folder. See the README there for
   more info.
- The frontend code lives in the `/frontend` folder. `/frontend/index.html` is a great
   place to start exploring. Note that it loads in `/frontend/assets/js/index.js`, where you
   can learn how the frontend connects to the NEAR blockchain.



### Deploy ###


Every smart contract in NEAR has its [own associated account][NEAR accounts]. When you run `yarn dev`, your smart contract gets deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.


Step 0: Install near-cli (optional)
------------------------------------

[near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain. It was installed to the local `node_modules` folder when you ran `yarn install`, but for best ergonomics you may want to install it globally:

    yarn install --global near-cli

Or, if you'd rather use the locally-installed version, you can prefix all `near` commands with `npx`

Ensure that it's installed with `near --version` (or `npx near --version`)


Step 1: Create an account for the contract
------------------------------------------

Each account on NEAR can have at most one contract deployed to it. If you've already created an account such as `your-name.testnet`, you can deploy your contract to `leeway.testnet.your-name.testnet`. Assuming you've already created an account on [NEAR Wallet], here's how to create `leeway.testnet.your-name.testnet`:

1. Authorize NEAR CLI, following the commands it gives you:

      near login

2. Create a subaccount (replace `YOUR-NAME` below with your actual account name):

      near create-account leeway.testnet.YOUR-NAME.testnet --masterAccount YOUR-NAME.testnet


Step 2: set contract name in code
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'leeway.testnet.YOUR-NAME.testnet'




require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth mad protect hockey battle force general'; 
let testAccounts = [
"0x65788bfa574f4496c361980b3439c5c4e47cc9b36dd693fa7d40d6b790071e23",
"0x27bd319d760029282245f066eb15d59126bec96b8f0f84b08830a5bf7ed0b056",
"0xddf199ee98c54e698ed08e219481c0ff9ca62ddd8137f813609f2bcfaa8f595b",
"0x027cd5037ce89059cbf785e6e4bcd82278ee87e11c1a1c3c694c3f3cc7ba3468",
"0x39139a92f690305b3786744ef153fd0ff22b25f0a7a573d678e0bf597ef011c4",
"0x8c61cfb7efd72ba0362f0b44d14670fb217ea4ac9b9fd430f306591511c21ab3",
"0x28d9b18b2e31c67beddd8599d9f6f8d5993674ec0e116ed91b97fd4712122dcc",
"0xda32f605529494f03fbc133d295e2e44799aa5bc539c387dd97ed846e27d7f6c",
"0xe6e9a382cd7ed89d4c84a5bf93a44743105a2486453e07d6bb203b746d69588c",
"0xc88cde548fb56ba24218b9963cee69b70fb38a160093b5bca9f6244bcf9b2a49"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


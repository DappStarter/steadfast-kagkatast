require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict permit flame silver gravity rifle spawn pulp gesture deputy success trigger'; 
let testAccounts = [
"0x054b1270be011ce4a0e0adb410459389aaafe24c4edf99bd657a57c8d986a12f",
"0xa2d3a59568fb3425caf5b6b5ff5f78a91019875361839018a022f236d719e9bd",
"0xadbe6b741c0c3ae4830855e7c89e12d211b81c4345aee646ced547f307e427e7",
"0xb3ac42ca76ebf2a409eaf10e0c195d689a3b04f93d53868783661f4aace74a18",
"0x3d6bfb0110c52d71d85ade360f0453fbccf868026e009043744730e1511e4642",
"0x416c638f693c9a814ec8b1946fcf5415909c8a2279f3edb17a82afedff5ae296",
"0x608631c8f951d80eb2d071038c009fc2991e8619021b1330d35c814ca550fd2b",
"0x9a7c46efdc33f13274a6fe8f877630cc8447076140917084375e7cb50843da47",
"0x939e00c1338c5e0034aadb14a3c41a5bbc077ae0d9c9034a524f8127055fbffd",
"0x31a72852bf397fbc2343e7f9933d930ff2c11e8c2318d9966295c67a4f7400c7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



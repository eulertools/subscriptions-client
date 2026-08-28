import { providerOptions, config } from '../config';
import { Application } from '../declarations';

const Web3 = require('web3');

const { full_wss } = config();

export default function(app: Application): void {
    const provider = new Web3.providers.WebsocketProvider(full_wss, providerOptions);
    const web3 = new Web3(provider);
    app.set('web3Client', web3);
}

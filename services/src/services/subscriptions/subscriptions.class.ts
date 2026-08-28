import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import Web3 from 'web3';
import { Application } from '../../declarations';

export class Subscriptions extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);

  const web3: Web3 = app.get('web3Client');
  web3.eth.getBlockNumber().then((data) => {
    console.log(data);
  })
  }
}

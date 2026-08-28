// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import {Sequelize, DataTypes, Model} from 'sequelize';
import {Application} from '../declarations';
import {HookReturn} from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const subscriptionsLogs = sequelizeClient.define('subscriptions_logs', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kind: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (subscriptionsLogs as any).associate = function (models: any): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return subscriptionsLogs;
}

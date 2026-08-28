import { Sequelize } from 'sequelize';
import { config } from './config';
import { Application } from './declarations';

const { db_host, db_name, db_password, db_user_name } = config();

export default function (app: Application): void {
  const sequelize = new Sequelize(db_name, db_user_name, db_password, {
    host: db_host,
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args): Application {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync());

    return result;
  };
}

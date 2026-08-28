// Initializes the `subscriptions` service on path `/subscriptions`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Subscriptions } from './subscriptions.class';
import createModel from '../../models/subscriptions.model';
import createLogsModel from '../../models/subscriptions-logs.model';
import hooks from './subscriptions.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'subscriptions': Subscriptions & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const logsOptions = {
    Model: createLogsModel(app),
    paginate: app.get('paginate')
  }
  // Initialize our service with any options it requires
  app.use('/subscriptions', new Subscriptions(options, app));
  app.use('/subscriptions-logs', new Subscriptions(logsOptions, app));
  // Get our initialized service so that we can register hooks
  const service = app.service('subscriptions');

  service.hooks(hooks);
}

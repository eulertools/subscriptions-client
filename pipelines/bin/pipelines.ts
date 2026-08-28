import * as cdk from 'aws-cdk-lib';
import { PipelinesStack } from '../lib/pipelines-stack';

const app = new cdk.App();

const branch = process.env.CDK_DEFAULT_ACCOUNT === process.env.CDK_DEV_ACCOUNT ? 'development' : 'main';

new PipelinesStack(app, 'SubscriptionsPipelinesStack', {
  branchName: branch,
  description: 'Subscriptions client pipeline for the data services',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

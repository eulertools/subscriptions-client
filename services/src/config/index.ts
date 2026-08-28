require('dotenv').config();

export const config = () => ({
    db_name: process.env.DB_NAME || '',
    db_user_name: process.env.DB_USER_NAME || '',
    db_password: process.env.DB_PASSWORD || '',
    db_host: process.env.DB_HOST || '',
    full_wss: process.env.NODE_WS || `wss://${process.env.CHAIN_ID}.nodes.prod.euler.tools/ws` || '',
    chain_id: process.env.CHAIN_ID || ''
});

export const providerOptions = {
    timeout: 30000, // ms
  
    clientConfig: {
      // Useful if requests are large
      maxReceivedFrameSize: 100000000, // bytes - default: 1MiB
      maxReceivedMessageSize: 100000000, // bytes - default: 8MiB
  
      // Useful to keep a connection alive
      keepalive: true,
      keepaliveInterval: -1, // ms
    },
  
    // Enable auto reconnection
    reconnect: {
      auto: true,
      delay: 1000, // ms
      maxAttempts: 10000,
      onTimeout: false,
    },
};

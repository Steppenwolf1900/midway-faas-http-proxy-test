import { MidwayConfig } from '@midwayjs/core';

export default {
  // if use http/API Gateway, please set keys here.
  // keys: '1695610578353_2358',
  httpProxy: {
    match: /\/tfs\//,
    host: 'https://gw.alicdn.com',
  },
} as MidwayConfig;

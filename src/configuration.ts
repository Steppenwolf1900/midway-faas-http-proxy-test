import { Configuration, ILifeCycle } from '@midwayjs/core';
import * as faas from '@midwayjs/faas';
import * as proxy from '@midwayjs/http-proxy';
import * as defaultConfig from './config/config.default';
import * as prodConfig from './config/config.prod';

@Configuration({
  imports: [faas, proxy],
  importConfigs: [
    {
      default: defaultConfig,
      prod: prodConfig,
    },
  ],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  async onReady() {}
}

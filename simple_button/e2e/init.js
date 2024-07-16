// e2e/init.js
import { init, device } from 'detox';
import config from '../detox.config.js';

beforeAll(async () => {
  await init(config);
});

afterAll(async () => {
  await device.shutdown();
});

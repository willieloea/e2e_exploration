// e2e/app.test.js
import { device, expect, element, by } from 'detox';

describe('App Component', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display initial text', async () => {
    await expect(element(by.text('Log something to the console:'))).toBeVisible();
    await expect(element(by.text('Press the button to log something to the console'))).toBeVisible();
  });

  it('should change text when button is pressed', async () => {
    await element(by.id('printButton')).tap();
    await expect(element(by.id('outputText'))).toHaveText('Button pressed');
  });
});

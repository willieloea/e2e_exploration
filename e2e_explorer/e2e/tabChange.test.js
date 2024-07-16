describe('Change from tab one to tab two', () => {
	beforeAll(async () => {
		await device.launchApp();
	});
  
	// beforeEach(async () => {});
  
	it('should tap the tab-two button', async () => {
		await element(by.id('tab-two-button')).tap();
		await expect(element(by.text('Tab Two'))).toBeVisible();
		// await expect(element(by.id('tab-two-title-text'))).toBeVisible();
	});
});
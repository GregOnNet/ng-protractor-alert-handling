import { browser, $ } from 'protractor';

describe('<app-edit-form>', () => {
  describe('When the form page is left', () => {
    it('navigates to home if user confirms to leave the page', async () => {
      await browser.get(`${browser.baseUrl}edit`);
      await $('[name=link-home').click();

      const confirmDialog = await browser.switchTo().alert();

      await confirmDialog.accept();

      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
    });
  });
});

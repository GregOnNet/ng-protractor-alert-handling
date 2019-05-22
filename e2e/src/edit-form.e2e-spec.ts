import { browser, $ } from 'protractor';
import { AlertPromise } from 'selenium-webdriver';

describe('<app-edit-form>', () => {
  describe('When the form page is left', () => {
    let confirmDialog: AlertPromise;

    beforeEach(async () => {
      await browser.get(`${browser.baseUrl}edit`);
      await $('[name=link-home').click();

      confirmDialog = (await browser.switchTo().alert()) as AlertPromise;
    });

    it('navigates to home if user confirms to leave the page', async () => {
      await confirmDialog.accept();

      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/');
    });

    it('stays on edit page if dialog is dismissed', async () => {
      await confirmDialog.dismiss();

      expect(browser.getCurrentUrl()).toBe('http://localhost:4200/edit');
    });
  });
});

import {
  browser,
  by,
  element,
  Key
} from 'protractor';

import {
  expect,
  SkyHostBrowser,
  SkyVisualThemeSelector
} from '@skyux-sdk/e2e';

describe('Input box', () => {
  let currentTheme: string;
  let currentThemeMode: string;

  async function selectTheme(theme: string, mode: string): Promise<void> {
    currentTheme = theme;
    currentThemeMode = mode;

    return SkyVisualThemeSelector.selectTheme(theme, mode);
  }

  function getScreenshotName(name: string): string {
    if (currentTheme) {
      name += '-' + currentTheme;
    }

    if (currentThemeMode) {
      name += '-' + currentThemeMode;
    }

    return name;
  }

  async function clickLabel(wrapperId: string): Promise<void> {
    await element(by.css(`#${wrapperId} label`)).click();

    // Move the cursor so the hover state isn't activated.
    await SkyHostBrowser.moveCursorOffScreen();
  }

  async function hoverElement(selector: string): Promise<void> {
    await browser.actions().mouseMove(element(by.css(selector))).perform();
  }

  async function mouseDownElement(selector: string): Promise<void> {
    await browser.actions().mouseDown(element(by.css(selector))).perform();
  }

  async function tabToNextElement(): Promise<void> {
    const el = await browser.driver.switchTo().activeElement();
    await el.sendKeys(Key.TAB);
  }

  function runTests(): void {
    it('should match previous input box screenshot', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-basic');

      expect('#input-box-basic').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-basic')
      });
    });

    it('should match previous input box side-by-side screenshot', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-side-by-side');

      expect('#input-box-side-by-side').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-side-by-side')
      });
    });

    it('should match previous basic input box screenshot when focused', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-basic');

      await clickLabel('input-box-basic');

      expect('#input-box-basic').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-basic-focused')
      });
    });

    it('should match previous basic input box screenshot when hovered', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-basic');

      await hoverElement('#input-box-basic input');

      expect('#input-box-basic').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-basic-hover')
      });
    });

    it('should match previous basic input box screenshot when active', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-basic');

      await mouseDownElement('#input-box-basic input');

      expect('#input-box-basic').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-basic-active')
      });
    });

    it('should match previous textarea input box screenshot when focused', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-textarea');

      await clickLabel('input-box-textarea');

      expect('#input-box-textarea').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-textarea-focused')
      });

    });

    it(
      'should match previous input box with a button screenshot when input is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-single');

        await clickLabel('input-box-button-single');

        expect('#input-box-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-focused-single-input')
        });
      }
    );

    it(
      'should match previous input box with a button screenshot when button is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-single');

        await clickLabel('input-box-button-single');
        await tabToNextElement();

        expect('#input-box-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-focused-single-button')
        });
      }
    );

    it(
      'should match previous input box with multiple buttons screenshot when button 1 is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-multiple');

        await clickLabel('input-box-button-multiple');
        await tabToNextElement();

        expect('#input-box-button-multiple').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-focused-multiple-button-1')
        });
      }
    );

    it(
      'should match previous input box with multiple buttons screenshot when button 2 is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-multiple');

        await clickLabel('input-box-button-multiple');
        await tabToNextElement();
        await tabToNextElement();

        expect('#input-box-button-multiple').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-focused-multiple-button-2')
        });
      }
    );

    it(
      'should match previous input box with single button screenshot when input is hovered',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-single');

        await hoverElement('#input-box-button-single input');

        expect('#input-box-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-hover-single-input')
        });
      }
    );

    it(
      'should match previous input box with single button screenshot when button is hovered',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-button-single');

        await hoverElement('#input-box-button-single button');

        expect('#input-box-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-button-hover-single-button')
        });
      }
    );

    it(
      'should match previous input box with error when bound to form control',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-form-control-error');

        expect('#input-box-form-control-error').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-form-control-error')
        });
      }
    );

    it(
      'should match previous input box with error when bound to form control name',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-form-control-name-error');

        expect('#input-box-form-control-name-error').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-form-control-name-error')
        });
      }
    );

    it(
      'should match previous input box with error when bound to ngModel',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-ngmodel-error');

        expect('#input-box-ngmodel-error').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-ngmodel-error')
        });
      }
    );

    it(
      'should match previous input box with error when focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-ngmodel-error');

        await clickLabel('input-box-ngmodel-error');

        expect('#input-box-ngmodel-error').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-error-focused')
        });
      }
    );

    it(
      'should match previous input box with button and error when input is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-form-control-error-button-single');

        await clickLabel('input-box-form-control-error-button-single');

        expect('#input-box-form-control-error-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-error-focused-input')
        });
      }
    );

    it(
      'should match previous input box with button and error when button is focused',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-form-control-error-button-single');

        await clickLabel('input-box-form-control-error-button-single');
        await tabToNextElement();

        expect('#input-box-form-control-error-button-single').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-error-focused-button')
        });
      }
    );

    it(
      'should match previous input box with error when hovered',
      async (done) => {
        await SkyHostBrowser.scrollTo('#input-box-ngmodel-error');

        await hoverElement('#input-box-ngmodel-error');

        expect('#input-box-ngmodel-error').toMatchBaselineScreenshot(done, {
          screenshotName: getScreenshotName('input-box-error-hover')
        });
      }
    );

    it('should match previous input box when disabled', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-disabled');

      expect('#input-box-disabled').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-disabled')
      });
    });

    it('should match previous input box when disabled and hovered', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-disabled');

      await hoverElement('#input-box-disabled');

      expect('#input-box-disabled').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-disabled-hover')
      });
    });

    it('should match previous input box with button when disabled', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-button-disabled');

      expect('#input-box-button-disabled').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-button-disabled')
      });
    });

    it('should match previous input box with select', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-select');

      expect('#input-box-select').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-select')
      });
    });

    it('should match previous input box with select when disabled', async (done) => {
      await SkyHostBrowser.scrollTo('#input-box-select-disabled');

      expect('#input-box-select').toMatchBaselineScreenshot(done, {
        screenshotName: getScreenshotName('input-box-select-disabled')
      });
    });
  }

  beforeEach(async () => {
    currentTheme = undefined;
    currentThemeMode = undefined;

    await SkyHostBrowser.get('visual/input-box');
    await SkyHostBrowser.setWindowBreakpoint('lg');
    await SkyHostBrowser.scrollTo('#screenshot-input-box');
    await SkyHostBrowser.moveCursorOffScreen();
  });

  runTests();

  describe('when modern theme', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'light');
    });

    runTests();

  });

  describe('when modern theme in dark mode', () => {

    beforeEach(async () => {
      await selectTheme('modern', 'dark');
    });

    runTests();

  });

});

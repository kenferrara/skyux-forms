import {
  NgModule
} from '@angular/core';

import {
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyDocsThumbnailModule,
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyAuthHttpClientModule
} from '@skyux/http';

import {
  SkyIconModule,
  SkyStatusIndicatorModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyCheckboxModule,
  SkyFileAttachmentsModule,
  SkyInputBoxModule,
  SkyRadioModule,
  SkyCharacterCounterModule,
  SkyToggleSwitchModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyAuthHttpClientModule,
    SkyCodeModule,
    SkyCheckboxModule,
    SkyDocsThumbnailModule,
    SkyDocsToolsModule,
    SkyFileAttachmentsModule,
    SkyFluidGridModule,
    SkyIconModule,
    SkyIdModule,
    SkyInputBoxModule,
    SkyRadioModule,
    SkyStatusIndicatorModule,
    SkyCharacterCounterModule,
    SkyToggleSwitchModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-forms',
        packageName: '@skyux/forms'
      }
    }
  ]
})
export class AppExtrasModule { }

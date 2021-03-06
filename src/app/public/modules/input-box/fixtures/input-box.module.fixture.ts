import {
  NgModule
} from '@angular/core';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyCharacterCounterModule
} from '../../character-counter/character-counter.module';

import {
  SkyInputBoxModule
} from '../input-box.module';

import {
  InputBoxFixtureComponent
} from './input-box.component.fixture';

import {
  InputBoxHostServiceFixtureComponent
} from './input-box-host-service.component.fixture';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SkyCharacterCounterModule,
    SkyIdModule,
    SkyInputBoxModule
  ],
  exports: [
    InputBoxFixtureComponent,
    InputBoxHostServiceFixtureComponent
  ],
  declarations: [
    InputBoxFixtureComponent,
    InputBoxHostServiceFixtureComponent
  ]
})
export class InputBoxFixturesModule { }

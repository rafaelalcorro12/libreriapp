import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroPageRoutingModule } from './intro-routing.module';

import { IntroPage } from './intro.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [

    IntroPageRoutingModule,
    SharedModule
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}

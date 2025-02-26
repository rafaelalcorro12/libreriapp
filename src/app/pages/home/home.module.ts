import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardBookComponent } from 'src/app/shared/components/card-book/card-book.component';

@NgModule({
  imports: [

    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage,CardBookComponent]
})
export class HomePageModule {}

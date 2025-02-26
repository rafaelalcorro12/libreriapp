import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBooksPageRoutingModule } from './detail-books-routing.module';

import { DetailBooksPage } from './detail-books.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    DetailBooksPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailBooksPage]
})
export class DetailBooksPageModule {}

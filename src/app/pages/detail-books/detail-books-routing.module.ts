import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBooksPage } from './detail-books.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBooksPageRoutingModule {}

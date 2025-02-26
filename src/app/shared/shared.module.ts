import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpsService}from '../services/https.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule

  ],
exports : [ HttpClientModule, CommonModule, FormsModule,IonicModule,NavbarComponent],providers: [
  HttpsService
]
})

export class SharedModule { }

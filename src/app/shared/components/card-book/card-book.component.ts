import { Book } from './../../interfaces/book';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss'],
  standalone: false
})
export class CardBookComponent  implements OnInit {
  @Input() book!: Book
  constructor() { }

  ngOnInit() {}

}

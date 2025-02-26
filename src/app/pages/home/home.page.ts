import { Component, OnInit } from '@angular/core';
import {HttpsService} from 'src/app/services/https.service';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone : false
})
export class HomePage implements OnInit {

  books: any[] = [];

 constructor(private http: HttpsService) { }

 ngOnInit() {
  this.getbooks()
}

getbooks() {
  this.http.getBooks().subscribe({
    next: (rest: any) => {
      this.books.push(...rest)
      console.log(rest);
    },
    error: (error: any) => { }
  })
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpsService } from 'src/app/services/https.service';

@Component({
  selector: 'app-detail-books',
  templateUrl: './detail-books.page.html',
  styleUrls: ['./detail-books.page.scss'],
  standalone : false
})
export class DetailBooksPage implements OnInit {
id: string | null = '';
book:any
  constructor(private service: HttpsService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id " + this.id);
    this.showbook(this.id);
  }

  showbook(id: any) {
    this.service.getbook(id).subscribe({
      next: (rest: any) => {
        this.book=rest
        console.log(rest);
      },
      error: (error: any) => { }
    })
  }

}

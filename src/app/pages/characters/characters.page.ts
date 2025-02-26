import { HttpsService } from 'src/app/services/https.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
  standalone : false
})
export class CharactersPage implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpsService, private router: Router) {
    this.getcharacters();
  }

  ngOnInit() {}

  getcharacters() {
    this.http.getcharacters().subscribe({
      next: (rest: any) => {
        this.characters = rest;
        console.log(rest);
      },
      error: (error: any) => {
        console.error("Error al obtener los personajes:", error);
      }
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/character', id]); // Redirige a la página de detalles del personaje
  }
}

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor(private http: HttpClient) { }
  getBooks(){
    return this.http.get(environment.baseUrl)
}

getbook(id: any) {
  return this.http.get(environment.baseUrl + "?index=" + id)
}
getcharacters() {
  return this.http.get(environment.characters)
}
}

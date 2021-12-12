import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

const BOOKS_URL = "https://henri-potier.techx.fr/books";

@Injectable({
  providedIn: 'root'
})
export class ApiBooksService {

  constructor( private http : HttpClient) { }

  getBooks(){
    return this.http.get<any>(BOOKS_URL).
    pipe(map((res : any) => {
      return res;
    }))
  }
}

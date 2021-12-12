import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartBookList : any =[];
  public bookList = new BehaviorSubject<any>([]);

  constructor( private http : HttpClient) { }

  // getter
  getBooks(){
    return this.bookList.asObservable();
  }

  // setter
  setBook(book : any){
    this.cartBookList.push(...book);
    this.bookList.next(book);
  }
  addToCart(book : any){
    this.cartBookList.push(book);
    this.bookList.next(this.cartBookList);
    // console.table(this.cartBookList);
    this.getTotalPrice();
    this.getOffers();
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartBookList.map((a:any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }
  getOffers(){
    let offers : any;
    let isbnInCart = '';
    this.cartBookList.map((a:any) => {
      isbnInCart += a.isbn + ',';
    })
    // console.log(isbnInCart);
    
    let offersUrl = 'https://henri-potier.techx.fr/books/' + isbnInCart + '/commercialOffers';
    console.log('url is: ' + offersUrl);
    return this.http.get<any>(offersUrl)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  removeCartBook(book : any){
    this.cartBookList.map((a:any, index:any)=>{
      console.log('book isbn: ' + book.isbn);
      console.log('index isbn: ' + a.isbn);
      if(book.isbn===a.isbn){
        this.cartBookList.splice(index, 1);
      }
    })
    this.bookList.next(this.cartBookList);
  }
}

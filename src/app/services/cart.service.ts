import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartBookList : any =[];
  public bookList = new BehaviorSubject<any>([]);

  constructor() { }

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
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartBookList.map((a:any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }
}

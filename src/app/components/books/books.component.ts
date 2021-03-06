import { Component, OnInit } from '@angular/core';
import { ApiBooksService } from 'src/app/services/api-books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books : any;
  public searchKey : string = '';
  public searchTerm : string = '';

  constructor( private api : ApiBooksService, private cart : CartService ) { }

  ngOnInit(): void {
    this.api.getBooks()
    .subscribe(res => {
      // console.log(res);
      this.books = res;
      this.books.forEach((a:any) => {  
        Object.assign(a, {quantity:1, total:a.price});
        // console.log(a);
      });
    })
  }
  search(event : any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchKey = this.searchTerm;
  }

  addToCart(book : any){
    // console.table(book);
    this.cart.addToCart(book);
  }

}

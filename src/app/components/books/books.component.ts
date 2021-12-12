import { Component, OnInit } from '@angular/core';
import { ApiBooksService } from 'src/app/services/api-books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books : any;

  constructor( private api : ApiBooksService ) { }

  ngOnInit(): void {
    this.api.getBooks()
    .subscribe(res => {
      // console.log(res);
      this.books = res;
    })
  }

}

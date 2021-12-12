import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalBooks : number = 0;
  
  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res => {
      // console.log(res);
      this.totalBooks = res.length;
    })
  }

}

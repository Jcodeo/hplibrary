import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public displayedColumns : string[] = ['Titre', 'Prix', 'Qté', 'Total', 'Action'];
  public book : any = [];

  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res => {
      console.log(res);
      this.book = res;
    });
  }
}

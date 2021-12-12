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
  public granTotal !: number;
  public offers : any = [];
  public isbnInCart !: string;

  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res => {
      // console.log(res);
      this.book = res;
      this.granTotal = this.cartService.getTotalPrice();
      this.cartService.getOffers()
      .subscribe(res => {
        // console.log(res);
        let highestFound = false;
        let highest = 0;
        res.offers.forEach((value:any, key:any) => {
          // console.log('value = ' + value.value);
          if (value.value > highest || highestFound === false) {
            highest = value.value;
            highestFound = true;          
          }
        });
        this.offers = highest;
        console.log('total = ' + this.granTotal);
        console.log('Réduction = ' + this.offers);
      });
    })
  }
}

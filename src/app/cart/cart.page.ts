import { Component, OnInit } from '@angular/core';
import { DexieService, MyItem } from '../dexie.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items: MyItem[] = [];
   

constructor(private dex:DexieService) { }

async loadItems() {
  try {
    this.items = await this.dex.getAllItems();
  } catch (error) {
     console.error('Error fetching items:', error);
   }
}

ngOnInit() {
  this.loadItems()
}

getTotalPrice(): number {
  let total = 0; 
  this.items.forEach((item) => {
    const itemTotal = item.price * item.num; 
    total += itemTotal; 
  });
  return total; 
}



increaseNum(id:number)
{
  this.dex.increaseNum(id).then(() => {
    this.loadItems()
  })
  .catch(error => {
    alert('Error :'+ error);
  });
}

decreaseNum(id:number)
{
  this.dex.decreaseNum(id).then(() => {
    this.loadItems()
  })
  .catch(error => {
    alert('Error :'+ error);
  });
}

// total(id:number)
// {
//   this.dex.total(id).then(() => {
//     this.loadItems()
//   })
//   .catch(error => {
//     alert('Error :'+ error);
//   });
}




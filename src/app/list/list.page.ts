import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string,
  productDate: Date,
  productPrice: number,
  productQuantity: number,
 }
 

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  today:string='11 September 2024'
  
  currentDate = new Date();
  is5daysago:boolean = false;
  is5daysabove:boolean = false;
  yesterday_clicked:number = 0;
  tomorrow_clicked:number = 0;
  totalAmount:number = 0;


  today_ind():string {

    const arrayBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const arrayHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
    const day = this.currentDate.getDay();
    const d = this.currentDate.getDate();
    const m = this.currentDate.getMonth(); 
    const y = this.currentDate.getFullYear();
    return arrayHari[day] + ', ' + d+' '+arrayBulan[m]+' '+y;
    }

    

    goYesterday(){
      this.yesterday_clicked++;
      this.currentDate.setDate(this.currentDate.getDate() - 1);
      if(this.yesterday_clicked == 5){

        this.is5daysago = true;

      }

      
   }

    goTomorrow(){
      
      this.tomorrow_clicked++;
      this.currentDate.setDate(this.currentDate.getDate() + 1);
      if(this.tomorrow_clicked == 5){

        this.is5daysabove = true;

      }
    }

    goReset(){
      this.currentDate = new Date();
      this.yesterday_clicked = 0;
      this.tomorrow_clicked = 0;
      this.is5daysago = false;
      this.is5daysabove = false;
    }

    reduce(){
      if (this.product.productQuantity > 0) {
        this.product.productQuantity--;
        this.calculateTotal();
      }
    }
  
    // Increase quantity, ensuring maximum quantity is 10
    increase(){
      if (this.product.productQuantity < 10) {
        this.product.productQuantity++;
        this.calculateTotal();
      }
    }
  
    // Calculate the total amount
    calculateTotal(){
      this.totalAmount = this.product.productPrice * this.product.productQuantity;
    }

    product:Product = {
      productName: 'Iphone 14',
      productDate: new Date(),
      productPrice: 14000000,
      productQuantity: 0,
   }
   
   

  constructor() { }

  ngOnInit() {
  }

}

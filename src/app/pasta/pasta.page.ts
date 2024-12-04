import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { DexieService } from '../dexie.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})
export class PastaPage implements OnInit {

  jenistampilan="accordion"
  pastas:any[]=[]
  search:string = ""
  
  

  stauts:boolean = false;

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  

  checkSegment(){

    if(this.jenistampilan=="accordion"){
      this.stauts = true;
    }
    else{
      this.stauts = false;
    }
    if(this.jenistampilan=="card"){
      this.stauts = true;
    }
    else{
      this.stauts = false;
    }
    if(this.jenistampilan=="grid"){
      this.stauts = true;
    }
    else{
      this.stauts = false;
    }
  }

  
    

  constructor(private foodService:FoodserviceService, private dex:DexieService) { }

  ngOnInit() {
    // this.pastas = this.foodService.pastas;
    this.foodService.pastaList().subscribe(
      (data)=>{
        this.pastas = data;
      }
    )

  }

  search_pasta() {
    
    this.foodService.searchPasta(this.search).subscribe(
      (data)=>{
        this.pastas = data;
      }
    );
  }

  ionViewWillEnter() {
    this.foodService.pastaList().subscribe((data) => {
      this.pastas = data;
    })
  }


  addtocart(id:number,name:string,price:number,num:number)
{
  this.dex.addItem(id,name,price,num).then(() => {
    alert('Item added successfully.');
  })
  .catch(error => {
    alert('Error adding item:'+ error);
  });
}


}

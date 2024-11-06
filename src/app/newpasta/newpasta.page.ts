import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})
export class NewpastaPage implements OnInit { 

  new_name:string = "";
  new_desc:string = "";
  price:number = 0;
  foto:string = "";
  spicy:boolean = false;
  public alertButtons = ['OK']
  pastas:any[]=[]
  

  

  array_price:number[]=[];


  constructor(private foodService:FoodserviceService,private router: Router) { }

  ngOnInit() {
    this.array_price=this.generateNumberOptions(30000,50000,2000)
  }


  // submitpasta()
  // {
  //    this.foodService.addPasta(this.new_name,this.foto,this.new_desc,this.price,this.spicy)
  //    this.router.navigate(['/pasta']);

  // }

  submitpasta()
  {
  //this.foodservice.addPasta(this.new_name,this.new_url,this.new_desc,this.new_price)
   this.foodService.addPasta(this.new_name,            
      this.foto,this.new_desc,this.price,this.spicy).subscribe((response: any) => {
        if(response.result==='success'){
          console.log("Success!")
        }
        else
        {
          alert(response.message)
        }
   });

   this.router.navigate(['/pasta']);

}




  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
}


}

import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';



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

  base64:any
  imageType:string='URL'
  
  array_price:number[]=[];

  constructor(private foodService:FoodserviceService,private router: Router) { }

  ngOnInit() {
    this.array_price=this.generateNumberOptions(30000,50000,2000)
  }

  submitpasta()
  {
    if(this.imageType=='Camera')
      {
        this.foto="https://ubaya.xyz/hybrid/160422077/images/"+this.new_name+".png"
        this.foodService.uploadImage(this.new_name,this.base64).subscribe(
         (response: any) => {
            if(response.result==='success'){
               alert("photo uploaded");
            }
          }
         )
      }
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

  async captureImage() {
  const image = await Camera.getPhoto({
    quality: 100,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera,
  });
  const base64Image = 'data:image/png;base64,' + image.base64String;
  this.base64 = base64Image;
  }
}

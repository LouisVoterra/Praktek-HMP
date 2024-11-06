import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  
  pastas: any = {};  
  instruction: string = ""
  step : number = 0 ;
  index = 0;

  constructor(private route: ActivatedRoute, private foodService: FoodserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      const id = params["index"];
      
      this.foodService.pastaDetail(id).subscribe(
        (data) => {
          console.log(data); 
          this.pastas = data;
        },
        (error) => {
          console.error('Error fetching pasta details:', error);
        }
      );
    });
  }

  deletepasta(id:any) {
    this.foodService.deletePasta(id).subscribe((response: any) => {
       if(response.result==='success'){
         alert("success")
         this.router.navigate(['/pasta']) 
       }
       else {
         alert(response.message)
       }
   });
 }

 
 submitInstruction() {
  const pasta_id = this.pastas.id; // pastikan id ini sudah tersedia di this.pastas
  this.foodService.addInstruction(pasta_id, this.step, this.instruction).subscribe((response: any) => {
    if (response.result === 'success') {
      alert("Instruction added successfully!");
    } else {
      alert(response.message);
    }
  });

  this.router.navigate(['/pastadetail']);
}



 
}

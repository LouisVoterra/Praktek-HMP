import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastaPage } from '../pasta/pasta.page';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
})
export class PastadetailPage implements OnInit {
  pasta: any
  pastas:any[]=[]
  index = 0;
  constructor(private route: ActivatedRoute, private foodService:FoodserviceService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = +params['index'];
      this.pasta = this.pastas[this.index];
    });

    this.pastas = this.foodService.pastas;
  }

}

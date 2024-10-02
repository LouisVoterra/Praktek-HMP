import { Component } from '@angular/core';
import { FoodserviceService } from './foodservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  totalpasta:number = this.foodService.pastas.length;
  constructor(private foodService:FoodserviceService
  ){}
}

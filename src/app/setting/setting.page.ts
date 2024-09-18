import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  
  foto:string="input"
  password:string="0000";
  morethan6:boolean=false;
  number:boolean=false;
  symbol:boolean=false;

  checkPassword(){
    var numbercheck =/\d/;
    var symbolcheck = /[ '!#$%^&*()_+\-[\]()':']/;

    if(this.password.length > 6){

      this.morethan6 = true;
    
    }
    else{
      this.morethan6 = false;
    }
    if(numbercheck.test(this.password)){
      this.number = true;
    }
    else{
      this.number = false;
    }
    if(symbolcheck.test(this.password)){
      this.symbol = true;
    }
    else{
      this.symbol = false;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}

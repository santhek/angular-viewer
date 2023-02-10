import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketData } from '../Models/MarketData';
import { ServiceInvokerService } from '../service/service-invoker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public marketData : MarketData[] = [];
 constructor(private _service : ServiceInvokerService){

 }
 public LoadData(){
  console.log("Here");
   this._service.getMarketData().subscribe(result => { 
    console.log(result);
    this.marketData = result as MarketData[] ;
    console.log(this.marketData);
  },
  error =>{ console.log(error)}

  );
 }

 public alertme(){
  console.log("alerted");
 }
}

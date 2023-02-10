import { Injectable } from '@angular/core';
import { MarketData } from '../Models/MarketData';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceInvokerService {
  private marketData : MarketData[] = [];
  constructor(private http: HttpClient) {     
  }

  getMarketData(): Observable<MarketData[]>{
    var result = this.http.get<MarketData[]>("https://localhost:7193/MarketData/GetProductMarketData?productCode=WTI").pipe( catchError(this.handleError));
    return result;
  }
  handleError(error :  HttpErrorResponse){
    if(error.status === 0){
      console.error('An error occurred:', error.error);
    }
      else{
        console.error( 'Backend returned code ${error.status}, body was: ', error.error);
    }
   return new Observable<MarketData[]>();
  }
}

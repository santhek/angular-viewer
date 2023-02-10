export class MarketData{
    public tenor : string;
    last: number;
    open :number ;
    high: number;
    low : number;
    publishTime : Date;
 constructor(){
    this.tenor = '';
    this.last = this.open = this.high = this.low = 0;
    this.publishTime = new Date();
 }
}
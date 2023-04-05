import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddProductModel, OrderProductModel } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpHeaders: any;
  constructor(private http : HttpClient) { 
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8').set("Access-Control-Allow-Origin", "*")
    .set("Access-Control-Allow-Headers", "*")
    .set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  }

  getProductDetails(){
    return this.http.get('https://uiexercise.onemindindia.com/api/Product')
  }

  addProductToList(jsonReq : AddProductModel){
    return this.http.post<any>('https://uiexercise.onemindindia.com/api/Product',jsonReq, {headers : this.httpHeaders})
  }

  orderProduct(jsonReq : OrderProductModel){
    return this.http.post<any>('https://uiexercise.onemindindia.com/api/OrderProducts',jsonReq, {headers : this.httpHeaders})
  }
}

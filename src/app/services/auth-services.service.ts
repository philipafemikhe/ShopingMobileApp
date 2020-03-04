import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

databaseURL= 'https://mobiletest-f3e59.firebaseio.com';

  // private orderCollection: AngularFirestoreCollection<any>;
  // private billingCollection: AngularFirestoreCollection<any>;
 
  private orders: Observable<Object>;
  private billingInfo: Observable<Object>;

  constructor(private httpClient: HttpClient) {

   }

   getOrders() {
    this.orders = this.httpClient.get(this.databaseURL + '/order');
    this.orders = this.httpClient.get('https://console.firebase.google.com/project/mobiletest-f3e59/database/data/order');
    return this.orders;
  }

  getBilling(){
    //this.billingInfo = this.httpClient.get(this.databaseURL + '/billing');
    this.orders = this.httpClient.get('https://console.firebase.google.com/project/mobiletest-f3e59/database/data/billinginfo');
    return this.billingInfo;
  }
}

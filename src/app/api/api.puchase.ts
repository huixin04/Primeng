import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BaseUrl: string = 'http://localhost:8080/authority/v1.0';
  constructor(private http: HttpClient) { }



//加上回傳值page並設定limit為10
getAllPurchaseRequest(page: number): Observable<any> {
  const url = this.BaseUrl + '/purchases' + '?page=' + page + '&limit=20';
  return this.http.get<any>(url);
}

 // getOne
 getOnePurchaseRequest(purchase_id: any): Observable<any> {
  const url = `${this.BaseUrl}/purchases/${purchase_id}`;
  return this.http.get(url);
}

//post
postPurchaseRequest(body: any): Observable<any> {
  const url = `${this.BaseUrl}/purchases`;
  return this.http.post(url, body);
}

// patch修改
patchPurchaseRequest(id: any, body: any): Observable<any> {
  const url = `${this.BaseUrl}/purchases/${id}`;
  return this.http.patch(url, body);
}

// delete
deletePurchaseRequest(id: any): Observable<any> {
  const url = `${this.BaseUrl}/purchases/${id}`;
  return this.http.delete(url);
}

}

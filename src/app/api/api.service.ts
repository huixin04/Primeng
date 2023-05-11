import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BaseUrl: string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

//get
//   getAllRequest(): Observable<any> {
//     //https://jsonplaceholder.typicode.com
//   const url = `${this.BaseUrl}/posts`;
//   return this.http.get(url);
// }

//加上回傳值page並設定limit為10
getAllRequest(page: number): Observable<any> {
  const url = `${this.BaseUrl}/posts?_page=${page}&_limit=10`;
  return this.http.get(url);
}

 // getOne
 getOneRequest(id: any): Observable<any> {
  const url = `${this.BaseUrl}/posts/${id}`;
  return this.http.get(url);
}

//post
postRequest(body: any): Observable<any> {
  const url = `${this.BaseUrl}/posts`;
  return this.http.post(url, body);
}

// patch修改
patchRequest(id: any, body: any): Observable<any> {
  const url = `${this.BaseUrl}/posts/${id}`;
  return this.http.patch(url, body);
}

// delete
deleteRequest(id: any): Observable<any> {
  const url = `${this.BaseUrl}/posts/${id}`;
  return this.http.delete(url);
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/rest/product';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HulkService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + '/findAll').pipe(
      map(this.extractData));
  }

  createProduct(product): Observable<any>{
    return this.http.post<any>(endpoint + '/post/create', JSON.stringify(product), httpOptions);
  }

  findBySku(sku: string){
    return this.http.get(endpoint + '/findBySku/' + sku).pipe(
      map(this.extractData));
  }

  updateProduct(product): Observable<any>{
    return this.http.put<any>(endpoint + '/post/update', JSON.stringify(product), httpOptions);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductapiService {
  url='https://jsonplaceholder.typicode.com/post'

  constructor( private http:HttpClient) { }
  getData(): Observable<any>{
    return this.http.get<any>(this.url)
  }
}

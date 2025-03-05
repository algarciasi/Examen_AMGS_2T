import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  httpClient = inject(HttpClient);
  private baseUrl : string = 'https://peticiones.online/api/products';
  insertObservable: any;

  constructor() { }

  getAllWithObservables(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.baseUrl);
  }

  getByIdWithObservable(_id: string): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseUrl}/${_id}`);
  }
}

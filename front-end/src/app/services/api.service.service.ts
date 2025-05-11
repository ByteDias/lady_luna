import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = "http://localhost:8081/estoque"

  constructor(private client: HttpClient) { }

  getDados(): Observable<any[]>{
   return this.client.get<any[]>(this.apiUrl)
  }
}

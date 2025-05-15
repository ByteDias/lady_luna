import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../models/interfaces.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrlEstoque = "http://localhost:8081/estoque"
  private apiUrlReceita = "http://localhost:8081/receita"
  

  constructor(private client: HttpClient) { }

  getDadosEstoque(): Observable<any[]>{
   return this.client.get<any[]>(this.apiUrlEstoque)
  }
  getEstoqueById(id: number): Observable<any[]>{
    return this.client.get<any[]>(`${this.apiUrlEstoque}/${id}`)
  }
  getDadosReceita(): Observable<Receita[]>{
    return this.client.get<Receita[]>(this.apiUrlReceita)
  }


}
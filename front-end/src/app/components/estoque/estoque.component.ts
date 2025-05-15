import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'estoque',
  imports: [
     CommonModule,
  ],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  dados: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getDadosEstoque().subscribe({
      next: (response) => this.dados = response,
      error: (err) => console.error('Erro:', err),
    })
  }
  

}

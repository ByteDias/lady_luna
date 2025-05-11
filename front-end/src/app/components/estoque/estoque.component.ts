import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api.service.service';

@Component({
  selector: 'estoque',
  imports: [],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

  dados: any[] = [];

  constructor(private apiService: ApiServiceService) {
    this.apiService.getDados().subscribe({
      next: (response) => this.dados = response,
      error: (err) => console.error('Erro:', err),
    })
  }
  

}

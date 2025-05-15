import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Receita } from '../../models/interfaces.model';

@Component({
  selector: 'app-lista-receitas',
  imports: [],
  templateUrl: './lista-receitas.component.html',
  styleUrl: './lista-receitas.component.css'
})
export class ListaReceitasComponent {

  receitas: Receita[] = [];
  
    constructor(private apiService: ApiService) {
      this.apiService.getDadosReceita().subscribe({
        next: (response) => this.receitas = response,
        error: (err) => console.error('Erro:', err),
      })
    }
    
}

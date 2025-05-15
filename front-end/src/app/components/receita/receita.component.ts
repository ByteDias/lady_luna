import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'receita',
  imports: [
    CommonModule
  ],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css'
})
export class ReceitaComponent {

    ingredientes: any[] = [];
   
    
      constructor(private apiService: ApiService) {
        this.apiService.getDadosEstoque().subscribe({
          next: (response) => this.ingredientes = response,
          error: (err) => console.error('Erro:', err),
        })
      }

}

import { Routes } from '@angular/router';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { ReceitaComponent } from './components/receita/receita.component';
import { ListaReceitasComponent } from './components/lista-receitas/lista-receitas.component';

export const routes: Routes = [

    {
        path: 'exibe-estoque', component: EstoqueComponent
    },
    {
        path: 'exibe-receita', component: ReceitaComponent
    },
    {
        path: 'lista-receita', component: ListaReceitasComponent
    },
    {
        path: 'receita', component: ReceitaComponent
    }

];

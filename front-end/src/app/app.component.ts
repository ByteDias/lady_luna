import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EstoqueComponent } from './components/estoque/estoque.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, EstoqueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lady_luna';
}

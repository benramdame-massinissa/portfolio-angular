import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  template: '<app-navbar />', 
  //template: 'Hello, {{title}}',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Project';
}

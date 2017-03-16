import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styles: [`
    a { font-size: 90%; }
    nav { display:flex; align-items:center; }
    md-toolbar { top:0; position: fixed; z-index: 100; }
    .site-title { font-size: 120%; font-weight: bold; }
  `]
})

export class AppComponent {
  title = 'Radha';
}

import { Component } from '@angular/core';
import {Link} from "./shared/Link";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  brand: Link = new Link("Angular 2 Template", "fa-search", null, '/', {});

  rightLinks: Link[] = [
    new Link("Home", "fa-home", null, '/home', {}),
  ];

  leftLinks: Link[] = [];
}

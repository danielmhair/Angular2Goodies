import { Component, Input } from '@angular/core';
import {Link} from "../shared/Link";


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() public brand: Link;
  @Input() public leftLinks: Link[];
  @Input() public rightLinks: Link[];
}

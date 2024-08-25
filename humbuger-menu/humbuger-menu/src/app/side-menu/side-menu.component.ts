import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  naviLinks = [
    { location: '', label: 'top' },
    { location: 'a', label: 'page a' },
    { location: 'b', label: 'page b' }
  ];
}

import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sidenavToggled = new EventEmitter<{}>();
  @Input() sidenav!: MatSidenav;

  private icons = {
    opened: 'close',
    closed: 'menu'
  }

  toggle(): void {
    this.sidenavToggled.emit({});
  }

  private subscribeToSidenav() {
    const icon = document.querySelector('#header-icon') as HTMLElement;

    this.sidenav.openedStart.subscribe(() => {
      icon.innerHTML = this.icons.opened;
    });

    this.sidenav.closedStart.subscribe(() => {
      icon.innerHTML = this.icons.closed;
    });
  }

  ngOnInit() {
    this.subscribeToSidenav();
  }
}

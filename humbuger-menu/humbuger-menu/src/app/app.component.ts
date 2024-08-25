import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humbuger-menu';

  @ViewChild('sidenav')
  private sidenav!: MatSidenav

  constructor(
    private readonly _router: Router,
  ) {
    this._router.events.subscribe(() => {
      this.sidenav.close();
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterOutlet,
      RouterModule,
      MatTabsModule,
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabs';

  public routeLinks = [
    { label: 'Bar', path: '/bar' },
    { label: 'Bubble', path: '/bubble' },
    { label: 'Doughnut', path: '/doughnut' },
    { label: 'Pie', path: '/pie' },
    { label: 'Line', path: '/line' },
    { label: 'Polar Area', path: '/polarArea' },
    { label: 'Radar', path: '/radar' },
    { label: 'Scatter', path: '/scatter' },
  ];
}
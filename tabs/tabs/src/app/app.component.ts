import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router'; // RouterModuleを追加
import { MatTabsModule } from '@angular/material/tabs';       // 追加

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
    [
      CommonModule,
      RouterOutlet,
      RouterModule,           // 追加
      MatTabsModule,          // 追加
    ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabs';

  public routeLinks = [
    { label: 'page-a', path: '/page-a' },
    { label: 'page-b', path: '/page-b' },
  ];
}

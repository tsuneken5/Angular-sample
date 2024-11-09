import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tensorflow';

  public routeLinks = [
    { label: 'MobileNet', path: 'mobilenet' },
    { label: 'COCO SSD', path: 'coco-ssd' },
  ];
}

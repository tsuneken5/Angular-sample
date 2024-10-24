import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'markdown';

  public routeLinks = [
    { label: 'marked', path: '/marked' },
    { label: 'highlight', path: '/highlight' },
    { label: 'katex', path: '/katex' },
    { label: 'mathjax', path: '/mathjax' },
    { label: 'mermaid', path: '/mermaid' },
  ];
}

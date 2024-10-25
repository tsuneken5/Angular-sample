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
    { label: 'Marked', path: '/marked' },
    { label: 'Highlight', path: '/highlight' },
    { label: 'KaTeX', path: '/katex' },
    { label: 'MathJax', path: '/mathjax' },
    { label: 'Mermaid', path: '/mermaid' },
    { label: 'Marded + KaTeX + Mermaid', path: '/markdown' },
  ];
}

import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import { MathjaxRootModule } from '../../../modules/mathjax-root/mathjax-root.module';

declare global {
  interface Window {
    MathJax: any;
  }
}

@Component({
  selector: 'app-mathjax',
  standalone: true,
  imports: [InputComponent, OutputComponent, MathjaxRootModule],
  templateUrl: './mathjax.component.html',
  styleUrl: './mathjax.component.css'
})
export class MathjaxComponent {
  public safeHTML!: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public async onParse(message: any) {
    let content = '<div class="math-content">' + message + '</div>';
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);

    setTimeout(() => {
      const math = document.querySelectorAll('.math-content');
      if (math && window.MathJax) {
        window.MathJax.typesetPromise(math);
      }
    }, 0);
  }
}

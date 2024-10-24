import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import mermaid from 'mermaid';

@Component({
  selector: 'app-mermaid',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './mermaid.component.html',
  styleUrl: './mermaid.component.css'
})
export class MermaidComponent {
  public safeHTML!: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    mermaid.initialize({ startOnLoad: false });
  }

  public async onParse(message: any) {
    const content = '<div class="mermaid">' + message + '</div>';
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);

    setTimeout(async () => {
      await mermaid.run({
        querySelector: '.mermaid',
      });
    }, 0);
  }
}

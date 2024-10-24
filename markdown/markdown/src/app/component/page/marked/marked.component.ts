import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import { marked } from 'marked';

@Component({
  selector: 'app-marked',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './marked.component.html',
  styleUrl: './marked.component.css'
})
export class MarkedComponent {
  public safeHTML!: SafeHtml;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public async onParse(message: any) {
    const content = await marked.parse(message);
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

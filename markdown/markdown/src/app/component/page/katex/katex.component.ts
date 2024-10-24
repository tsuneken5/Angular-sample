import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import { marked } from 'marked';
import markedKatex from "marked-katex-extension";

@Component({
  selector: 'app-katex',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './katex.component.html',
  styleUrl: './katex.component.css'
})
export class KatexComponent {
  public safeHTML!: SafeHtml;
  private readonly KATEX_OPTIONS = {
    throwOnError: false
  };

  constructor(
    private sanitizer: DomSanitizer
  ) {
    marked.use(markedKatex(this.KATEX_OPTIONS));
  }

  public async onParse(message: any) {
    const content = await marked.parse(message);
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

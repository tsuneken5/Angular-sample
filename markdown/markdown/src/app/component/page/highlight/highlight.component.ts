import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.css'
})
export class HighlightComponent {
  public safeHTML!: SafeHtml;
  private marked: Marked;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.marked = new Marked(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang, info) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    );
  }

  public async onParse(message: any) {
    const content = await this.marked.parse(message);
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

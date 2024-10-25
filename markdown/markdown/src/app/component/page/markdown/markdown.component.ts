import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { InputComponent } from '../../share/input/input.component';
import { OutputComponent } from '../../share/output/output.component';

import { marked, Renderer, Tokens } from 'marked';
import hljs from 'highlight.js';
import markedKatex from "marked-katex-extension";
import mermaid from 'mermaid';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  public safeHTML!: SafeHtml;
  private readonly KATEX_OPTIONS = {
    throwOnError: false
  };

  constructor(
    private sanitizer: DomSanitizer
  ) {
    mermaid.initialize({ startOnLoad: false });
    this.setupMarked();
  }

  private setupMarked() {
    const renderer: Renderer = new marked.Renderer();

    renderer.code = function ({ text, lang, escaped }: Tokens.Code): string {
      if (lang === 'mermaid') {
        return `<div class="mermaid">${text}</div>`;
      }

      const language = lang || 'plaintext';
      if (language == 'plaintext') {
        return `<pre><code class="hljs">${marked.parseInline(text)}</code></pre>`;
      } else {
        return `<pre><code class="hljs language-${language}">${hljs.highlight(text, { language }).value}</code></pre>`;
      }
    };
    marked.use({ renderer });
    marked.use(markedKatex(this.KATEX_OPTIONS))
  }

  public async onParse(message: any) {
    const content = await marked.parse(message);
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(content);

    setTimeout(async () => {
      await mermaid.run({
        querySelector: '.mermaid',
      });
    }, 0);
  }
}

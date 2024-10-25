import { Routes } from '@angular/router';

import { MarkedComponent } from './component/page/marked/marked.component';
import { HighlightComponent } from './component/page/highlight/highlight.component';
import { KatexComponent } from './component/page/katex/katex.component';
import { MathjaxComponent } from './component/page/mathjax/mathjax.component';
import { MermaidComponent } from './component/page/mermaid/mermaid.component';
import { MarkdownComponent } from './component/page/markdown/markdown.component';

export const routes: Routes = [
  { path: '', redirectTo: '/marked', pathMatch: 'full' },

  { path: 'marked', component: MarkedComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'katex', component: KatexComponent },
  { path: 'mathjax', component: MathjaxComponent },
  { path: 'mermaid', component: MermaidComponent },
  { path: 'markdown', component: MarkdownComponent },

  { path: '**', redirectTo: '/marked' }
];

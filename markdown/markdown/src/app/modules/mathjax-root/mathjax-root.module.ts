import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathjaxModule } from 'mathjax-angular';

const MATHJAX_CONFIG = {
  config: {
    loader: {
      load: ["output/svg", "[tex]/require", "[tex]/ams"]
    },
    tex: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]],
      packages: ["base", "require", "ams"]
    },
  },
  src: "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/startup.js"
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MathjaxModule.forRoot(MATHJAX_CONFIG)
  ]
})
export class MathjaxRootModule { }

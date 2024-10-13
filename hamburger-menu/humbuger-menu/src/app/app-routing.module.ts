import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './content/content.component'; // 追加
import { PageAComponent } from './page-a/page-a.component';     // 追加
import { PageBComponent } from './page-b/page-b.component';     // 追加

const routes: Routes = [  // 更新
  { path: '', component: ContentComponent },
  { path: 'a', component: PageAComponent },
  { path: 'b', component: PageBComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

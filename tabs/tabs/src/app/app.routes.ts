import { Routes } from '@angular/router';

import { PageAComponent } from './page-a/page-a.component'; // 追加
import { PageBComponent } from './page-b/page-b.component'; // 追加

export const routes: Routes = [ // 変更
  { path: '', redirectTo: '/page-a', pathMatch: 'full' },

  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },

  { path: '**', redirectTo: '/page-a' }
];

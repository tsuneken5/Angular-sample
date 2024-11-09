import { Routes } from '@angular/router';

import { HomeComponent } from './component/page/home/home.component';
import { MobilenetComponent } from './component/page/mobilenet/mobilenet.component';
import { CocoSsdComponent } from './component/page/coco-ssd/coco-ssd.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mobilenet', component: MobilenetComponent },
  { path: 'coco-ssd', component: CocoSsdComponent },

  { path: '**', redirectTo: '/' }
];

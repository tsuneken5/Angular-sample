import { Routes } from '@angular/router';

import { HomeComponent } from './component/page/home/home.component';
import { MobilenetComponent } from './component/page/mobilenet/mobilenet.component';
import { CocoSsdComponent } from './component/page/coco-ssd/coco-ssd.component';
import { BodySegmentationComponent } from './component/page/body-segmentation/body-segmentation.component';
import { PoseDetectionComponent } from './component/page/pose-detection/pose-detection.component';
import { DepthEstimationComponent } from './component/page/depth-estimation/depth-estimation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mobilenet', component: MobilenetComponent },
  { path: 'coco-ssd', component: CocoSsdComponent },
  { path: 'body-segmentation', component: BodySegmentationComponent },
  { path: 'pose-detection', component: PoseDetectionComponent },
  { path: 'depth-estimation', component: DepthEstimationComponent },

  { path: '**', redirectTo: '/' }
];

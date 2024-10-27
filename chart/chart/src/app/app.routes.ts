import { Routes } from '@angular/router';

import { BarChartComponent } from './component/page/bar-chart/bar-chart.component';
import { LineChartComponent } from './component/page/line-chart/line-chart.component';
import { PieChartComponent } from './component/page/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './component/page/doughnut-chart/doughnut-chart.component';
import { PolarAreaChartComponent } from './component/page/polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './component/page/radar-chart/radar-chart.component';
import { ScatterChartComponent } from './component/page/scatter-chart/scatter-chart.component';
import { BubbleChartComponent } from './component/page/bubble-chart/bubble-chart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bar', pathMatch: 'full' },

  { path: 'bar', component: BarChartComponent },
  { path: 'bubble', component: BubbleChartComponent },
  { path: 'doughnut', component: DoughnutChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'line', component: LineChartComponent },
  { path: 'polarArea', component: PolarAreaChartComponent },
  { path: 'radar', component: RadarChartComponent },
  { path: 'scatter', component: ScatterChartComponent },

  { path: '**', redirectTo: '/bar' }
];

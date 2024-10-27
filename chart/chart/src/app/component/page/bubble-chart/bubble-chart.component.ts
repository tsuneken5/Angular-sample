import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartModule } from '../../../modules/chart/chart.module';

@Component({
  selector: 'app-bubble-chart',
  standalone: true,
  imports: [BaseChartDirective, ChartModule],
  templateUrl: './bubble-chart.component.html',
  styleUrl: './bubble-chart.component.css'
})
export class BubbleChartComponent {
  dataset: ChartDataset[] = [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }];
  labels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ];
  options: ChartOptions = {
    responsive: true,
  };
  plugins = [];
  legend = true;
  type: ChartType = 'bubble';
}

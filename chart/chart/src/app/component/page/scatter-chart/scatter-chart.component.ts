import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartModule } from '../../../modules/chart/chart.module';

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [BaseChartDirective, ChartModule],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.css'
})
export class ScatterChartComponent {
  dataset: ChartDataset[] = [{
    label: 'Scatter Dataset',
    data: [{
      x: -10,
      y: 0
    }, {
      x: 0,
      y: 10
    }, {
      x: 10,
      y: 5
    }, {
      x: 0.5,
      y: 5.5
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }];
  labels: string[] = [];
  options: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  };
  plugins = [];
  legend = true;
  type: ChartType = 'scatter';
}

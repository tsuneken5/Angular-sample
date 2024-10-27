import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartModule } from '../../../modules/chart/chart.module';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective, ChartModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  dataset: ChartDataset[] = [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }];
  labels: string[] = [
    'Red',
    'Blue',
    'Yellow'
  ];
  options: ChartOptions = {
    responsive: true,
  };
  plugins = [];
  legend = true;
  type: ChartType = 'pie';
}

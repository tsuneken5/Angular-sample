import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartModule } from '../../../modules/chart/chart.module';

@Component({
  selector: 'app-polar-area-chart',
  standalone: true,
  imports: [BaseChartDirective, ChartModule],
  templateUrl: './polar-area-chart.component.html',
  styleUrl: './polar-area-chart.component.css'
})
export class PolarAreaChartComponent {
  dataset: ChartDataset[] = [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }];
  labels: string[] = [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ];
  options: ChartOptions = {
    responsive: true,
  };
  plugins = [];
  legend = true;
  type: ChartType = 'polarArea';
}

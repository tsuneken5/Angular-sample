import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartModule } from '../../../modules/chart/chart.module';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective, ChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent {
  dataset: ChartDataset[] = [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }];
  labels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  options: ChartOptions = {
    responsive: true,
  };
  plugins = [];
  legend = true;
  type: ChartType = 'line';
}

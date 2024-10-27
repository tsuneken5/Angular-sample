import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideCharts, withDefaultRegisterables, } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    provideCharts(withDefaultRegisterables()),
  ]
})
export class ChartModule { }

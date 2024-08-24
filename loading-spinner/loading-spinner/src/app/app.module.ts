import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';

import { OverlayModule } from '@angular/cdk/overlay'; // 追加
import { PortalModule } from '@angular/cdk/portal';   // 追加
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  // 追加

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,  // 追加
    PortalModule,   // 追加
    MatProgressSpinnerModule  // 追加
  ],
  entryComponents: [SpinnerComponent],  // 追加
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

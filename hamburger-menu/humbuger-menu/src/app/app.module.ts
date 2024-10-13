import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';

import { MatToolbarModule } from '@angular/material/toolbar'; // 追加
import { MatIconModule } from '@angular/material/icon';       // 追加
import { MatSidenavModule } from '@angular/material/sidenav'; // 追加
import { MatListModule } from '@angular/material/list';       // 追加

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    SideMenuComponent,
    PageAComponent,
    PageBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,   // 追加
    MatIconModule,      // 追加
    MatSidenavModule,   // 追加
    MatListModule       // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

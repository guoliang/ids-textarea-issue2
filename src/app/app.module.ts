import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SohoComponentsModule,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

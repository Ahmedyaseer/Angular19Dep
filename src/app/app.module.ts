import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './lecture2/server/server.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent
  ],
  providers: [],
})
export class AppModule { }

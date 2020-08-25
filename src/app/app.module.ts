import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TictactoeModule } from './tictactoe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TictactoeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictactoeComponent } from './tictactoe.component';
import { TictactoeService } from './shared'


@NgModule({
  declarations: [
    TictactoeComponent
  ],
  exports: [
    TictactoeComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TictactoeService
  ]
})
export class TictactoeModule { }

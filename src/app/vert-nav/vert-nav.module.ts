import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VertNavComponent } from './vert-nav.component';

import { RouterModule, Routes} from '@angular/router';


@NgModule({
  declarations: [
    VertNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [
      VertNavComponent
  ],
  providers: []
})
export class VertNavModule { }
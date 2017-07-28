import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLoaderDirective } from './my-loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyLoaderDirective]
})
export class LoaderModule { }

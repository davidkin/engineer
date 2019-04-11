import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeService } from './home.services';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }

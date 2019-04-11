import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeService } from './home.services';
import {MatTableModule} from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [HomeComponent, ModalComponent],
  providers: [HomeService]
})
export class HomeModule { }

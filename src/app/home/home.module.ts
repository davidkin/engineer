import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeService } from './home.services';
import { MatTableModule } from '@angular/material/table';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [HomeComponent, ModalComponent],
  providers: [HomeService]
})
export class HomeModule { }

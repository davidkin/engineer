import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './home/modal/modal.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: ModalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

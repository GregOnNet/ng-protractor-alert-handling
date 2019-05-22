import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SureLeavingGuard } from './sure-leaving.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditFormComponent,
    canDeactivate: [SureLeavingGuard]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

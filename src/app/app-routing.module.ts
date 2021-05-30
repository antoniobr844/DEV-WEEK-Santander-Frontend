import { DashbordModule } from './dashbord/dashbord.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordPageComponent } from './dashbord/dashbord-page/dashbord-page.component';

const routes: Routes = [
  {path: '', component: DashbordPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

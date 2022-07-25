import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const LayoutModule = () => import('../layout/layout.module').then(x=>x.LayoutModule);

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

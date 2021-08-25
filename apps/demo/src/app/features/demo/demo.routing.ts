import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DemoFormComponent } from './components/demo-form/demo-form.component';

const routes: Routes = [
  {
    path: '',
    component: DemoFormComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: []
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}

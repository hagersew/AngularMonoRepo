import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
  // routing example
  // {
  //   path: 'demo',
  //   loadChildren: () => import('./features/demo/demo.module').then(mod => mod.DemoModule),
  // }
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/demo/demo.module').then((mod) => mod.DemoModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: []
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

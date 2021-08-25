import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { PageHeaderComponent } from './page-header/page-header.component';

export const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgZorroAntdModule,
  NgxPermissionsModule,
  NzDividerModule,
  NzDrawerModule,
  ExtAngularModernModule
];
export const sharedModules = [PageHeaderComponent];
@NgModule({
  declarations: [sharedModules],
  imports: [...modules],
  exports: [...modules, sharedModules]
})
export class SharedModule {}

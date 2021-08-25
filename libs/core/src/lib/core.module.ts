import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AlertModule } from './alert/alert.module';

export const coreRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, AlertModule]
})
export class CoreModule {}

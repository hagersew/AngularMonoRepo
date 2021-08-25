import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@es/shared';
import { NgxsModule } from '@ngxs/store';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import { DemoRoutingModule } from './demo.routing';
import { CreateDemoComponent } from './pages/demo-create/demo-create.component';
import { DemoListComponent } from './pages/demo-list/demo-list.component';
import { DemoState } from './store/states/demo.state';
@NgModule({
  declarations: [DemoFormComponent, DemoListComponent, CreateDemoComponent],
  imports: [NgxsModule.forFeature([DemoState]), FormsModule, CommonModule, DemoRoutingModule, SharedModule],
  exports: [],
  providers: []
})
export class DemoModule {}

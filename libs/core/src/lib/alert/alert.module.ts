import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AlertState } from './store/states/alert.state';

@NgModule({
  declarations: [],
  imports: [NgxsModule.forFeature([AlertState]), NzNotificationModule],
  exports: []
})
export class AlertModule {}

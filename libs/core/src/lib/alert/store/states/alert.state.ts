import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AddAlert } from '../actions/alert.action';

export interface AlertStateModel {
  message: string;
  type: string;
  status: boolean;
  time: number;
  closeAlerts: boolean;
}

@State<AlertStateModel>({
  name: 'AlertState',
  defaults: {
    message: 'alert message',
    type: 'info',
    status: false,
    time: 2,
    closeAlerts: false
  }
})
@Injectable()
export class AlertState {
  constructor(private readonly notification: NzNotificationService) {}

  @Selector() public static message(state: AlertStateModel): string {
    return state.message;
  }

  @Selector() public static status(state: AlertStateModel): boolean {
    return state.status;
  }

  @Selector() public static time(state: AlertStateModel): number {
    return state.time;
  }

  @Selector() public static type(state: AlertStateModel): string {
    return state.type;
  }

  @Selector() public static closeAlerts(state: AlertStateModel): boolean {
    return state.closeAlerts;
  }

  @Action(AddAlert)
  setAlert({ patchState }: StateContext<AlertStateModel>, payload: AddAlert): any {
    let alertTime, position;
    if (payload.payload.time === null || payload.payload.time === undefined) {
      alertTime = 3000;
    } else {
      alertTime = payload.payload.time;
    }

    if (payload.payload.position === null || payload.payload.position === undefined) {
      position = 'bottomRight';
    } else {
      position = payload.payload.position;
    }

    if (payload.payload.closeAlerts) {
      this.notification.remove();
    }
    if (!payload.payload.title && !payload.payload.closeAlerts) {
      this.notification.create(payload.payload.type ? payload.payload.type : 'success', payload.payload.message, '', {
        nzPlacement: position,
        nzDuration: alertTime
      });
    } else if (!payload.payload.closeAlerts) {
      this.notification.create(payload.payload.type ? payload.payload.type : 'success', payload.payload.title, payload.payload.message, {
        nzPlacement: position,
        nzDuration: alertTime
      });
    }
  }
}

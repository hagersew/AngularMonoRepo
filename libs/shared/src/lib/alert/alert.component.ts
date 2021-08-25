import { Component, OnInit } from '@angular/core';
import { AddAlert, AlertState } from '@es/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

export enum messageType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}

@Component({
  selector: 'shared-Mono-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  constructor(private readonly store: Store) {}

  @Select(AlertState.status) status$: Observable<boolean>;

  @Select(AlertState.message) text$: Observable<string>;

  @Select(AlertState.type) type$: Observable<string>;

  showToaster(message: string, time: number = 2, type: string = messageType.info): any {
    this.store.dispatch(new AddAlert({ message, time, type }));
  }

  ngOnInit(): any {}
}

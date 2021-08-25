import { Alert } from '@es/core';
export class AddAlert {
  static readonly type = '[AlertState] AddAlert';
  constructor(readonly payload: Alert) {}
}

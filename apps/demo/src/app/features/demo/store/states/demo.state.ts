import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface DemoStateModel {}

@State<DemoStateModel>({
  name: 'DemoState',
  defaults: {}
})
@Injectable()
export class DemoState {
  constructor() {}
}
// tslint:disable-next-line: max-file-line-count

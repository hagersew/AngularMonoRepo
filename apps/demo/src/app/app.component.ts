import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'cyber-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cyber';

  constructor(private readonly permissionsService: NgxPermissionsService, private readonly store: Store) {}

  ngOnInit(): void {}
}

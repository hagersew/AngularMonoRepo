import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { Breadcrumb, HeaderAction } from './models/page-header';

@Component({
  selector: 'shared-cyber-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() breadcrumbs?: Breadcrumb[];
  @Input() actionButton?: HeaderAction;
  @Input() actionButtonTemplate?: TemplateRef<any>;
  @Input() permissions?: HeaderAction;
  constructor(private readonly store: Store) {}
  ngOnInit(): any {}
}

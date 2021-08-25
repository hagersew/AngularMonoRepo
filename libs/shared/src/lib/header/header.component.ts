import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-Mono-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): any {}
  userNameInitials(input: string): string {
    const names = input.split(' ');

    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }

    return initials;
  }
}

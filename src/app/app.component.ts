import { Component } from '@angular/core';


@Component({
  selector: 'myapp',
  template: `
  <nav-bar></nav-bar>
  <event-list></event-list>`
})
export class MyAppComp {
  ttl = 'fundamentals';
}

import { Component } from '@angular/core';


@Component({
  selector: 'myapp',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`
})
export class MyAppComp {
  ttl = 'fundamentals';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Jason';

  constructor() {
    this.changeName('John');
  }

  changeName(name:string):void {
    this.name = name;
  }
}

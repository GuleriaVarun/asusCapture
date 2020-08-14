import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly timeout: number = 3000;
  public title = 'asusCaptures';
  public loadPage: boolean;

  constructor() {
    this.init();
  }

  private init() {
    setTimeout(() => {
      this.loadPage = true;
    }, this.timeout);
  }
}

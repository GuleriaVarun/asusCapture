import { Component } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent {
  public bkUrl: unknown = {};
  private background: string = 'background';

  ngOnInit() {
    this.bkUrl = this.getBkUrl();
  }

  /************************************
   * GEtting image background
   ***********************************/
  private getBkUrl() {
    const styles = {
      'background-image': 'url(assets/img/' + this.background + '.jpg)',
    };

    return styles;
  }
}

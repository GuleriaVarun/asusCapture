import { UserInterface } from './../../shared/interface/user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', '../../shared/shared.scss'],
})
export class UserComponent implements OnInit {
  @Input('userConnected')
  public set setUserConnected(data: UserInterface) {
    this.userConnected = data;
  }

  public userConnected: UserInterface;

  constructor() {
    // TODO
  }

  ngOnInit(): void {
    if (!this.userConnected) {
      this.userConnected = {};
    }
  }
}

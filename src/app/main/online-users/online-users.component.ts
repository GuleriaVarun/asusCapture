import { UserOnlineInfo } from './../../shared/interface/userOnlineInfo.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.scss', '../../shared/shared.scss'],
})
export class OnlineUsersComponent implements OnInit {
  @Input('onlineUsersList')
  public set setOnlineUserList(data: UserOnlineInfo[]) {
    this.onlineUsersList = data;
  }

  public onlineUsersList: UserOnlineInfo[];

  constructor() {
    if (!this.onlineUsersList) {
      this.onlineUsersList = [];
    }
  }

  ngOnInit(): void {}
}

import { UserOnlineInfo } from './../../shared/interface/userOnlineInfo.interface';
import { UserInterface } from './../../shared/interface/user.interface';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/app/shared/interface/posts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public title: string = 'Asus Captures';

  public bkUrl: unknown = {};
  private background: string = 'home';
  public posts: PostInterface[];
  public userConnected: UserInterface;
  public onlineUsersList: UserOnlineInfo[];

  public postsTabSeleted: boolean = true;
  public userTabSeleted: boolean;
  public onlineUserTabSelected: boolean;

  constructor(private readonly homeService: HomeService) {}

  ngOnInit() {
    this.bkUrl = this.getBkUrl();
    this.posts = [];
    this.getPosts();
    this.getUserConnected();
    this.getOnlineUserList();
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

  /***************************************
   * Upload Image
   ***************************************/
  public upload() {}

  private getPosts() {
    this.homeService.getPostList().subscribe((res: PostInterface[]) => {
      this.posts = res;
    });
  }

  private getUserConnected() {
    this.homeService.getUserConnected().subscribe((res: UserInterface) => {
      this.userConnected = res;
    });
  }

  private getOnlineUserList() {
    this.homeService.getOnlineUserList().subscribe((res: UserOnlineInfo[]) => {
      this.onlineUsersList = res;
    });
  }

  public openPosts() {
    this.postsTabSeleted = true;
    this.userTabSeleted = false;
    this.onlineUserTabSelected = false;
  }

  public openProfile() {
    this.postsTabSeleted = false;
    this.userTabSeleted = true;
    this.onlineUserTabSelected = false;
  }

  public openOnlineUsers() {
    this.postsTabSeleted = false;
    this.userTabSeleted = false;
    this.onlineUserTabSelected = true;
  }
}

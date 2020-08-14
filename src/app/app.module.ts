import { PostsComponent } from './main/posts/posts.component';
import { UserComponent } from './main/user/user.component';
import { SplashScreenComponent } from './spash/splash-screen.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './main/home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { PostApiController } from './shared/api/postApiController.interface';
import { SidebarModule } from 'primeng/sidebar';
import { OnlineUsersComponent } from './main/online-users/online-users.component';
import { DataViewModule } from 'primeng/dataview';

const APIS = [PostApiController];

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    HomeComponent,
    UserComponent,
    PostsComponent,
    OnlineUsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    CardModule,
    SidebarModule,
    PanelModule,
    FileUploadModule,
    HttpClientModule,
    DataViewModule,
  ],
  providers: [...APIS],
  bootstrap: [AppComponent],
})
export class AppModule {}

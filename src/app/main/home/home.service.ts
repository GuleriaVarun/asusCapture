import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from '../../shared/interface/posts.interface';
import { PostApiController } from '../../shared/api/postApiController.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly HTTP_PREFIX = 'http://localhost:3000/';
  constructor(
    private http: HttpClient,
    private readonly postApiController: PostApiController
  ) {}

  public getPostList(): Observable<any> {
    return this.http.get(
      `${this.HTTP_PREFIX}${this.postApiController.getPost}`
    );
  }

  public getUserConnected(): Observable<any> {
    return this.http.get(
      `${this.HTTP_PREFIX}${this.postApiController.getUserConnected}`
    );
  }

  public getOnlineUserList(): Observable<any> {
    return this.http.get(
      `${this.HTTP_PREFIX}${this.postApiController.getOnlineUserList}`
    );
  }

  
}

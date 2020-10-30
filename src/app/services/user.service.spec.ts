import { of } from 'rxjs';
import { UserService } from './user.service';
import { UserResponse } from './types/usersResponse.type';
import { Post } from '../users/types/post.type';
import { Comments } from '../users/types/comment.type';
import { mockUserListResponse } from './mocks/userList.response.mock';
import { mockPosts } from './mocks/posts.mock';
import { mockComments } from './mocks/comments.mock';
import { DataApi } from "./user.constant";
import { HttpErrorResponse } from '@angular/common/http';

describe('userservice', () => {
  let service: UserService;
  let mockHTTP;
  const userListAPI = `${DataApi}/users`;
  const usersPostAPI = `${DataApi}/posts`;
  const usersCommentsAPI = `${DataApi}/comments`;

  beforeEach(() => {
    mockHTTP = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UserService(mockHTTP);
  });

  it('should get all UsersList (HttpClient called once)', () => {
    const userList: UserResponse[] = mockUserListResponse;
    mockHTTP.get.and.returnValue(of(userList));
    service.getUsersList().subscribe(
      users => expect(users).toEqual(userList)
    );
    expect(mockHTTP.get).toHaveBeenCalledWith(userListAPI);
  });

  it('should get all Users comments(HttpClient called once)', () => {
    const comments: Comments[] = mockComments;
    mockHTTP.get.and.returnValue(of(comments));
    service.getcomments().subscribe(
      comment => expect(comment).toEqual(comments)
    );
    expect(mockHTTP.get).toHaveBeenCalledWith(usersCommentsAPI);
  });

  it('should get all Users posts(HttpClient called once)', () => {
    const posts: Post[] = mockPosts;
    mockHTTP.get.and.returnValue(of(posts));
    service.getUsersPost().subscribe(
      post => expect(post).toEqual(posts)
    );
    expect(mockHTTP.get).toHaveBeenCalledWith(usersPostAPI);
  });

  describe('userservice whan Api Call ends with error', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    beforeEach(() => {
      mockHTTP = jasmine.createSpyObj('HttpClient', ['get']);
      service = new UserService(mockHTTP);
      mockHTTP.get.and.returnValue(of(errorResponse));
    });

    it('should not get all UsersList', () => {
      const userList: UserResponse[] = mockUserListResponse;
      service.getUsersList().subscribe(
        users => expect(users).not.toEqual(userList),
        error => expect(error.message).toContain('test 404 error')
      );
    });

    it('should not get all Users comments', () => {
      const comments: Comments[] = mockComments;
      service.getcomments().subscribe(
        comment => expect(comment).not.toEqual(comments),
        error => expect(error.message).toContain('test 404 error')
      );
    });

    it('should not get all Users posts', () => {
      const posts: Post[] = mockPosts;
      service.getUsersPost().subscribe(
        post => expect(post).not.toEqual(posts),
        error => expect(error.message).toContain('test 404 error')
      );
    });
  });
});
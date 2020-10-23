import { of } from 'rxjs';
import { UserService } from './user.service';
import { UserResponse } from './types/usersResponse.type';
import { Post } from '../users/types/post.type';
import { Comments } from '../users/types/comment.type';
import { mockUserListResponse } from './mocks/userList.response.mock';
import { mockPosts } from './mocks/posts.mock';
import { mockComments } from './mocks/comments.mock';

describe('userservice', () =>{
    let service: UserService;
    let mockHTTP; 

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
        expect(mockHTTP.get).toHaveBeenCalled();
      });

      it('should get all Users comments(HttpClient called once)', () => {
        const comments: Comments[] = mockComments;
        mockHTTP.get.and.returnValue(of(comments));
        service.getcomments().subscribe(
            users => expect(users).toEqual(comments)
          );
        expect(mockHTTP.get).toHaveBeenCalled();
      });

      it('should get all Users posts(HttpClient called once)', () => {
        const posts: Post[] = mockPosts;
        mockHTTP.get.and.returnValue(of(posts));
        service.getUsersPost().subscribe(
            users => expect(users).toEqual(posts)
          );
        expect(mockHTTP.get).toHaveBeenCalled();
      });
});
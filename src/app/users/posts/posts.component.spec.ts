import { mockComments } from 'src/app/services/mocks/comments.mock';
import { mockPosts } from 'src/app/services/mocks/posts.mock';
import { PostsComponent } from './posts.component';


describe('PostsComponent', () => {
    let component;
    const posts = mockPosts;
    const comments = mockComments;
    beforeEach(() => {
        component = new PostsComponent();
        component.allPosts = posts;
        component.allComments = comments;
        component.userId = 1;
    });

    it('should create the Post component', () => {
        expect(component).toBeTruthy();
    });

    it('should filter posts on basis of provided user id', () => {
        component.getAllSelectedUserPosts(1);
        expect(component.selectedUserPosts).toEqual(posts);
    });

    it('should filter comments on basis of provided post id', () => {
        expect(component.getCommentsforpost(1)).toEqual(comments);
    });

    it('should set showAllPosts to true', () => {
        component.showRestPosts();
        expect(component.showAllPosts).toEqual(true);
    });

});

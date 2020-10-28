import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostsComponent } from './posts.component';
import { mockComments } from 'src/app/services/mocks/comments.mock';
import { mockPosts } from 'src/app/services/mocks/posts.mock';


describe('PostsComponent', () => {
    let component;
    let fixture;
    let el: HTMLElement;
    const posts = mockPosts;
    const comments = mockComments;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.debugElement.componentInstance;
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

    it('should call showRestPosts function', () => {
        fixture.detectChanges();
        spyOn(component, 'showRestPosts')
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(component.showRestPosts).toHaveBeenCalled();
    });

});

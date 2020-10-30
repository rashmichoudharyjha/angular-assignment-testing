import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { DemoMaterialModule } from '../material-module';
import { UsersComponent } from './users.component';
import { PostsComponent } from './posts/posts.component';
import { UserService } from '../services/user.service';
import { mockComments } from '../services/mocks/comments.mock';
import { mockPosts } from '../services/mocks/posts.mock';


describe('UsersComponent', () => {
    let fixture
    let component;
    let mockUserService;
    const userList = [{ id: 1, name: 'test' }]
    const posts = mockPosts;
    const comments = mockComments;
    beforeEach(async(() => {
        mockUserService = jasmine.createSpyObj('UserService', ['getUsersList', 'getUsersPost', 'getcomments']);
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                DemoMaterialModule,
            ],
            declarations: [UsersComponent, PostsComponent],
            providers: [{ provide: UserService, useValue: mockUserService }]
        }).compileComponents();
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.debugElement.componentInstance;
        mockUserService.getUsersList.and.returnValue(of(userList));
        mockUserService.getUsersPost.and.returnValue(of(posts));
        mockUserService.getcomments.and.returnValue(of(comments));

    }));
    it('should create the User component', () => {
        component.ngOnInit();
        expect(component).toBeTruthy();
    });

    it('should get users list from service', () => {
        spyOn(component, 'getAllPosts');
        component.getUsers();
        component.userService.getUsersList().subscribe((list: any) => {
            expect(component.usersList).toEqual(userList);
            expect(component.getAllPosts).toHaveBeenCalled();
        });
    });

    it('should not get users list from service in case of error', () => {
        spyOn(component, 'getAllPosts');
        mockUserService.getUsersList.and.returnValue(of(undefined));
        component.getUsers();
        component.userService.getUsersList().subscribe((list: any) => {
            expect(component.usersList).toBeUndefined();
            expect(component.getAllPosts).not.toHaveBeenCalled();
        });
    });

    it('should get all posts from service', () => {
        spyOn(component, 'getAllComments');
        component.getAllPosts();
        component.userService.getUsersPost().subscribe((list: any) => {
            expect(component.allUserPosts).toEqual(posts);
            expect(component.getAllComments).toHaveBeenCalled();
        });
    });

    it('should not get posts from service in case of error', () => {
        spyOn(component, 'getAllComments');
        mockUserService.getUsersPost.and.returnValue(of(undefined));
        component.getAllPosts();
        component.userService.getUsersPost().subscribe((list: any) => {
            expect(component.allUserPosts).toBeUndefined();
            expect(component.getAllComments).not.toHaveBeenCalled();
        });
    });

    it('should get all comments from service', () => {
        component.getAllComments();
        component.userService.getcomments().subscribe((post: any) => {
            expect(component.allComments).toEqual(comments);
            expect(component.isUserListLoaded).toEqual(true);
        });
    });

    it('should not get comments from service in case of error', () => {
        mockUserService.getcomments.and.returnValue(of(undefined));
        component.getAllComments();
        component.userService.getcomments().subscribe((comment: any) => {
            expect(component.allComments).toBeUndefined();
            expect(component.isUserListLoaded).toEqual(false);
        });
    });

    it('should have same number of user as returned from service', () => {
        component.isUserListLoaded = true;
        component.ngOnInit();
        fixture.detectChanges();
        let userElement = fixture.nativeElement.querySelectorAll('mat-button-toggle');
        expect(userElement.length).toBe(userList.length);
        let elementValue = userElement[0].innerText;
        expect(elementValue).toEqual(userList[0].name);
    });

    it('should have loader while data is loading', () => {
        component.isUserListLoaded = false;
        fixture.detectChanges();
        let loader = fixture.nativeElement.querySelector('mat-spinner');
        expect(loader).toBeDefined();
    });

});

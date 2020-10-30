import { TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';

import { mockComments } from 'src/app/services/mocks/comments.mock';
import { By } from '@angular/platform-browser';

describe('Comments Component', () => {
    let fixture;
    let component;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CommentsComponent
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
        component.commentList = mockComments;
    });

    it('should create the comments component', () => {
        expect(component).toBeTruthy();
    });

    it('should have same number of comments displayed on HTML as input', () => {
        fixture.detectChanges();
        let usercomment = fixture.debugElement.queryAll(By.css('span.user_name'));
        let firstCommentName= usercomment[0].nativeElement.innerText;
        expect(usercomment.length).toBe(component.commentList.length);
        expect(firstCommentName).toEqual(`${component.commentList[0].name}:`);
    });

});

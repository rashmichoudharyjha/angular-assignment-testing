import { TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';

import { mockComments } from 'src/app/services/mocks/comments.mock';

describe('Comments Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CommentsComponent
            ],
        }).compileComponents();
    });

    it('should create the comments component', () => {
        const fixture = TestBed.createComponent(CommentsComponent);
        const header = fixture.componentInstance;
        header.commentList = mockComments;
        expect(header).toBeTruthy();
    });

});

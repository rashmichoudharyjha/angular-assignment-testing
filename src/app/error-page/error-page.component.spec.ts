import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
    let errorComponent
    let router;
    beforeEach(() => {
        router = jasmine.createSpyObj('Router', ['navigate',]);
        errorComponent = new ErrorPageComponent(router);
    });

    it('should create the error component', () => {
        expect(errorComponent).toBeTruthy();
    });

    it('should redirect to home page', () => {
        errorComponent.reload();
        expect(errorComponent.router.navigate).toHaveBeenCalledWith([""]);
    });

});

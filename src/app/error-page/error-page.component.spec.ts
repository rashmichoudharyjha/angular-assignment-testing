import { Location } from "@angular/common";
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorPageComponent } from './error-page.component';
import { routes } from '../app-routing.module';

describe('ErrorPageComponent', () => {
    let location: Location;
    let router: Router;
    let fixture;
    let errorComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [
                ErrorPageComponent
            ],
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(ErrorPageComponent);
        errorComponent = fixture.componentInstance;
    });

    it('should create the error component', () => {
        expect(errorComponent).toBeTruthy();
    });

    it('should redirect to home page', () => {
        errorComponent.reload();
        expect(location.path()).toBe('');
    });

});

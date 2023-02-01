import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthorizationService } from "src/app/authorization/service";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    public title: string = '';
    public logo: string = '';
    
    public subscription = new Subscription();

    constructor(
        private _router: Router,
        private _authService: AuthorizationService
    ) {
        this.title = environment.name;
        this.logo = `../../${environment.imagesPath}/bytebank.png`
     }

    public ngOnInit(): void {

    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
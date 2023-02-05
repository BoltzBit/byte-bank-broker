import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PoPageLogin } from "@po-ui/ng-templates/lib";
import { Subscription } from "rxjs";
import { UserLogin } from "src/app/authorization/model";
import { AuthorizationService } from "src/app/authorization/service";
import { MessagesService } from "src/app/messages/messages.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit{
    public isLoading: boolean = false;
    public logo: string = '';
    public secondaryLogo: string = '';
    private subs = new Subscription();

    constructor(
        private _messageService: MessagesService,
        private _authService: AuthorizationService,
        private _route: Router
    ) { }
    
    public ngOnInit(): void{

    }

    public ngOnDestroy(): void{
        this.subs.unsubscribe();
    }

    public onLoginSubmit(formData: PoPageLogin): void{
        const user: UserLogin = {
            userName: formData.login,
            password: formData.password,
            remindUser: formData.rememberUser
        }

        this.login(user);
    }

    private login(user: UserLogin): void{
        this.isLoading = true;

        this.subs.add(
            this._authService.login(user)
                .subscribe({
                    next: () => {
                        const redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/home';
                        this._route.navigate([redirect]);
                    },
                    complete: () => this.isLoading = false,
                    error: (error: HttpErrorResponse) => {
                        this.isLoading = false;
                        this._messageService.showMessageError(error.message)
                        this._route.navigate(['/login'])
                    }
                })
        );
    }
}
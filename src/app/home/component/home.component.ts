import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PoMenuItem, PoToolbarAction, PoToolbarProfile} from "@po-ui/ng-components";
import { Subscription } from "rxjs";
import { User } from "src/app/authorization/model";
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
    public user!: User;
    public profileActions: Array<PoToolbarAction> = [];
    public menu!: Array<PoMenuItem>;
    public profile: PoToolbarProfile = {
        avatar: '',
        title: ''
    };
    
    public subscription = new Subscription();

    constructor(
        private _router: Router,
        private _authService: AuthorizationService
    ) {
        this.title = environment.name;
        this.logo = `../../${environment.imagesPath}/bytebank.png`
     }

    public ngOnInit(): void {
        this.setHomeInfo();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private setHomeInfo(): void{
        this.user = this._authService.getAuthenticatedUser();
        this.profileActions.push({
            label: 'Logout',
            action: () => this.logout()
        });

        this.menu = this.getMenus();
        this.profile.title = this.user.name;
    }

    private logout(): void{
        this._authService.logout();
        this._router.navigate(['login']);
    }

    private getMenus(): Array<PoMenuItem>{
        const menu: Array<PoMenuItem> = [
            {
                label: 'Home',
                link: '/home'
            },
            {
                label: 'Acoes',
                link: 'home/acoes'
            }
        ];

        return menu;
    }
}
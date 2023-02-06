import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { User, UserLogin } from "../model";

const CACHE_KEY_TOKEN = 'TOKEN';
const TOKEN_ENDPOINT = `${environment.api}/user/login`;

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public redirectUrl!: string;
    private _user!: User | undefined;

    constructor(private http: HttpClient) { }

    public requestToken(user: UserLogin): Observable<HttpResponse<User>> {
        return this.http.post<User>(TOKEN_ENDPOINT, {
            userName: user.userName,
            password: user.password
        }, { observe: 'response' });
    }

    public login(user: UserLogin): Observable<object | User> {
        console.log(user)
        const loginSubject = new Subject<User>();

        this.requestToken(user)
            .subscribe(
                {
                    next: (response: HttpResponse<User>) => {
                        const { body: loggedUser } = response
                        loggedUser!.token = response.headers.get('x-access-token')!
                        this.saveUserInfo(loggedUser!)
                        loginSubject.next(loggedUser!)
                    },
                    error: error => {
                        loginSubject.error(error);
                    }
                });

        return loginSubject.asObservable();
    }

    public saveUserInfo(user: User): void {
        this._user = user
        this.setUser(this._user);
    }

    public logout(): void {
        this._user = undefined;
        this.removeUser();
    }

    //manage store
    private setUser(user: User): void {
        sessionStorage.setItem(CACHE_KEY_TOKEN, JSON.stringify(user));
    }

    private removeUser(): void {
        sessionStorage.removeItem(CACHE_KEY_TOKEN);
    }

    public getAuthenticatedUser(): User {
        return this._user || JSON.parse(sessionStorage.getItem(CACHE_KEY_TOKEN)!);
    }

    public isUserAuthenticated(): boolean {
        return this.getAuthenticatedUser() !== null;
    }
}

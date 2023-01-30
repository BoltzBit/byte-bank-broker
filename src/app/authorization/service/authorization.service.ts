import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User, UserLogin } from "../model";

const CACHE_KEY_TOKEN = 'TOKEN';
const TOKEN_ENDPOINT = `${environment.api}/user/login`;

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public redirectUrl!: string;
    private _user!: User;

    constructor(private http: HttpClient) { }

    public requestToken(user: UserLogin): Observable<HttpResponse<User>> {
        return this.http.post<User>(TOKEN_ENDPOINT, {
            userName: user.userName,
            password: user.password
        }, 
        { observe: 'response' });
    }
}

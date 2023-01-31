import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injector, Type } from "@angular/core";
import { Observable } from "rxjs";
import { AuthorizationService } from "../service";

export class AuthorizationInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }

    public intercept(original_request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestResult: HttpRequest<any>;

        if (this.isUrlNeedsProAuth(original_request.url)) {
            requestResult = this.appendTokenToRequest(original_request);
        } else {
            requestResult = original_request.clone();
        }

        return next.handle(requestResult);
    }

    private appendTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
        const authService: AuthorizationService = this.injector.get<AuthorizationService>(AuthorizationService as Type<AuthorizationService>);
        const token = authService.getAuthenticatedUser().token;
        return request.clone({
            headers: request.headers.set('x-access-token', token)
        });
    }

    private isUrlNeedsProAuth(url: string): boolean {
        let needProAuth = true;
        const whiteList = [/login/, /assets/];

        for (const whiteUrl of whiteList) {
            if (url.search(whiteUrl)) {
                needProAuth = false;
                break;
            }
        }

        return needProAuth;
    }
}
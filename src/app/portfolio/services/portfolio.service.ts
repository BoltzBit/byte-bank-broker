import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Portfolio } from "../model/portfolio";

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    private readonly portfolioUrl: string = `${environment.api}/portfolios`;

    constructor(private _httpClient: HttpClient) { }

    public getPortfolio(id: string): Observable<Portfolio>{
        return this._httpClient.get<Portfolio>(`${this.portfolioUrl}/${id}`);
    }

    public putPortfolio(id: string, portfolio: Portfolio): Observable<Portfolio>{
        return this._httpClient.put<Portfolio>(`${this.portfolioUrl}/${id}`, portfolio);
    }
}

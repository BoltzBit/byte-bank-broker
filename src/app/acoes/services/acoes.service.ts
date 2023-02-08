import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Acao, Acoes, AcoesAPI } from "../models/acoes.model";

@Injectable({
    providedIn: 'root'
})
export class AcoesService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    public getAcoes(value?: string): Observable<AcoesAPI>{
        const params: HttpParams | undefined = value ? new HttpParams().append('valor', value) : undefined;

        return this._httpClient.get<AcoesAPI>(`http://localhost:3000/acoes`, { params })
            .pipe(
                tap(acoes => acoes.payload.sort((a,b) => this._ordenaCodigo(a,b)))
            );
    }

    private _ordenaCodigo(a: Acao, b: Acao): number{
        if(a.codigo > b.codigo) return 1;
        if(a.codigo < b.codigo) return -1;
        return 0;
    }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { Acao, AcoesAPI } from "../models/acoes.model";

@Injectable({
    providedIn: 'root'
})
export class AcoesService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    public getAcoes(): Observable<AcoesAPI>{
        return this._httpClient.get<AcoesAPI>(`http://localhost:3000/acoes`)
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

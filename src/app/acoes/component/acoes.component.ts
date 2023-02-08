import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, merge, Observable, Subscription, switchMap } from "rxjs";
import { Acoes } from "../models/acoes.model";
import { AcoesService } from "../services/acoes.service";

@Component({
    selector: 'app-acoes',
    templateUrl: './acoes.component.html',
    styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent implements OnInit {
    public acoesInput = new FormControl();
    public allActions$: Observable<Acoes> = new Observable<Acoes>();
    public filterActions$: Observable<Acoes> = new Observable<Acoes>();

    public acoes$: Observable<Acoes> = new Observable<Acoes>;

    constructor(private _acoesService: AcoesService) { }

    public ngOnInit(): void {
        this.allActions$ = this._acoesService.getAcoes()
            .pipe(
                map((response) => {
                    return response.payload;
                })
            );
        
        this.filterActions$ = this.acoesInput.valueChanges
                .pipe(
                    switchMap((response) => {
                        return this._acoesService.getAcoes(response)
                            .pipe(
                                map(response => response.payload)
                            );
                    })
                )
        
        this.acoes$ = merge(this.allActions$, this.filterActions$);
    }
}

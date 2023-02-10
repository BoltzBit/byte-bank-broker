import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, map, merge, Observable, switchMap, tap } from "rxjs";
import { Acoes } from "../models/acoes.model";
import { AcoesService } from "../services/acoes.service";

const TIME = 300;

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
                    debounceTime(TIME),
                    filter(value => value.length > 3 || !value.length),
                    distinctUntilChanged(),
                    tap(response => console.log(response)),
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

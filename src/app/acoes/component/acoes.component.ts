import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { map, Observable } from "rxjs";
import { Acoes } from "../models/acoes.model";
import { AcoesService } from "../services/acoes.service";

@Component({
    selector: 'app-acoes',
    templateUrl: './acoes.component.html',
    styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent implements OnInit {
    public acoesInput = new FormControl();
    public acoes$: Observable<Acoes> = new Observable<Acoes>;

    constructor(private _acoesService: AcoesService) { }

    public ngOnInit(): void {
        this.acoes$ = this._acoesService.getAcoes()
            .pipe(
                map((response) => {
                    return response.payload;
                })
            );
    }
}

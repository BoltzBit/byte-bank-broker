import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { Acao } from "../models/acoes.model";

@Component({
    selector: 'app-card-acoes',
    templateUrl: './card-acoes.component.html',
    styleUrls: ['./card-acoes.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CardAcoesComponent implements OnInit{
    //TO-DO refactor -> type the variable
    @Input() acao!: Acao;

    constructor(){ }

    public ngOnInit(): void{

    }
}
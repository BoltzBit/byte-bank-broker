import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-acoes',
    templateUrl: './acoes.component.html',
    styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent {
    public acoesInput = new FormControl();

    constructor() { }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PoPageDynamicEditActions, PoPageDynamicEditField } from "@po-ui/ng-templates";

@Component({
    selector: 'app-portfolio-form',
    templateUrl: './portfolio-form.component.html',
    styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {
    public serviceApi: string = 'http://localhost:3000/portfolios';
    public title: string = 'Novo Portfolio';

    public actions: PoPageDynamicEditActions = {
        cancel: '/home/portfolio',
        save: '/home/portfolio'
    };

    public fields: Array<PoPageDynamicEditField> = [
        { 
            property: 'portfolio_id', 
            key: true, 
            visible: false 
        },
        {
            label: 'Descricao',
            property: 'portfolio_descricao'
        }
    ];

    constructor(private _activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
        this._activatedRoute.params
            .subscribe((params) => {
                this.title = params['id'] ? 'Editando' : 'Novo Portfolio'
            });
    }
}
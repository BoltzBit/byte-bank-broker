import { Component, OnInit } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { PoPageDynamicTableActions } from "@po-ui/ng-templates";

@Component({
    selector: 'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
    public serviceApi: string = 'http://localhost:3000/portfolios';

    public actions: PoPageDynamicTableActions = {
        new: '/home/portfolio/new',
        detail: '/home/portfolio/detail/:id',
        remove: true
    };

    public breadcrumb: PoBreadcrumb = {
        items: [
            {
                label: 'Home',
                link: '/'
            },
            {
                label: 'Portfolio'
            }
        ]
    };

    public fields: Array<any> = [
        {
            property: 'portfolio_id',
            key: true
        },
        {
            property: 'portfolio_descricao',
            label: 'Descricao',
            filter: true,
            gridColumns: 6
        }
    ];

    constructor() { }

    public ngOnInit(): void { }
}
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-no-data',
    templateUrl: 'no-data.component.html',
    styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {
    noDataFound: string = 'No data found!';
    
    constructor() { }

    ngOnInit(): void { }
}

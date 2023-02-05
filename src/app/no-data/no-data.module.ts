import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoDataComponent } from "./component/no-data.component";

@NgModule({
    declarations: [
        NoDataComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NoDataComponent
    ]
})
export class NoDataModule { }

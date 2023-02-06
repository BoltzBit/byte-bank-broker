import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { NoDataModule } from "../no-data/no-data.module";

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        ReactiveFormsModule
    ],
    exports: [
        PoModule,
        NoDataModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }

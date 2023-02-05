import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PoModule } from "@po-ui/ng-components";
import { PoTemplatesModule } from "@po-ui/ng-templates";

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        ReactiveFormsModule
    ],
    exports: [
        PoModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }

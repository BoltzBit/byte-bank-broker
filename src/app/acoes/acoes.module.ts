import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AcoesRoutingModule } from "./acoes-routing.module";
import { AcoesComponent } from "./component/acoes.component";

@NgModule({
    declarations: [
        AcoesComponent
    ],
    imports: [
        CommonModule,
        AcoesRoutingModule,
        SharedModule
    ],
    exports: [
        AcoesComponent
    ]
})
export class AcoesModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AcoesRoutingModule } from "./acoes-routing.module";
import { CardAcoesComponent } from "./card-acoes/card-acoes.component";
import { AcoesComponent } from "./component/acoes.component";

@NgModule({
    declarations: [
        AcoesComponent,
        CardAcoesComponent
    ],
    imports: [
        CommonModule,
        AcoesRoutingModule,
        SharedModule
    ],
    exports: [
        AcoesComponent,
        CardAcoesComponent
    ]
})
export class AcoesModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PoModule, PoToolbarModule } from "@po-ui/ng-components";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./component/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    exports: [
    ]
})
export class HomeModule { }
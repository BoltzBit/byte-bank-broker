import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { SharedModule } from "../shared/shared.module";
import { PortfolioComponent } from "./component/portfolio.component";
import { PortfolioFormComponent } from "./components/portfolio-form/portfolio-form.component";
import { PortfolioListComponent } from "./components/portfolio-list/portfolio-list.component";
import { PortfolioRoutingModule } from "./portfolio-routing.module";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioFormComponent,
        PortfolioListComponent
    ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        SharedModule,
        PoTemplatesModule
    ]
})
export class PortfolioModule { }

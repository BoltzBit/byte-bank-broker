import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PortfolioFormComponent } from "./components/portfolio-form/portfolio-form.component";

export const routes: Routes = [
    {
        path: '',
        component: PortfolioFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule { }

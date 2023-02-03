import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PoTemplatesModule } from "@po-ui/ng-templates";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./component/login.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        PoTemplatesModule,
        SharedModule
    ]
})
export class LoginModule { }
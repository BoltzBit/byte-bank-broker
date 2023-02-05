import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessagesService } from "./messages.service";

@NgModule({
    providers: [MessagesService],
    imports: [CommonModule]
})
export class MessagesModule { }

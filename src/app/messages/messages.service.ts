import { Injectable } from "@angular/core";
import { PoNotification, PoNotificationService, PoToasterOrientation } from "@po-ui/ng-components";

@Injectable({
    providedIn: 'root'
})
export class MessagesService {
    constructor(private _poNotificationService: PoNotificationService) { }

    public showMessageError(message: string): void{
        const notification: PoNotification = {
            message,
            orientation: PoToasterOrientation.Bottom
        };

        this._poNotificationService.error(notification);
    }

    public showMessageSuccess(message: string): void{
        const notification: PoNotification = {
            message,
            orientation: PoToasterOrientation.Bottom
        };

        this._poNotificationService.success(notification);
    }

    public showMessageInfo(message: string): void{
        const notification: PoNotification = {
            message,
            orientation: PoToasterOrientation.Bottom
        };

        this._poNotificationService.information(notification);
    }
}

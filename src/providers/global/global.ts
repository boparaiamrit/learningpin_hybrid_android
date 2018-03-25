import {Injectable} from '@angular/core';
import {Toast, ToastController} from 'ionic-angular';

@Injectable()
export class GlobalProvider {
    constructor(private toastController: ToastController) {

    }

    public showToast(message: any) {
        let toast: Toast;
        toast = this.toastController.create({
            message: message,
            duration: 3000,
            position: 'top'
        });

        toast.present().then(() => {
            console.log('Toast shown.');
        }).catch(() => {
            console.log('Error in toast showing.');
        });
    }
}

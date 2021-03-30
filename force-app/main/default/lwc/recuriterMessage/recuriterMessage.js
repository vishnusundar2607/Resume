import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class RecuriterMessage extends LightningElement {

    ShowMessgae = false;
    handleSuccess() {
        this.ToggleShowMessgae();
        const event = new ShowToastEvent({
            title: 'Your message saved succesfully',
            message: 'Email sent to your email address',
        });
        this.dispatchEvent(event);

    }

    ToggleShowMessgae() {
        this.ShowMessgae = !this.ShowMessgae;
    }

}
import { LightningElement, wire } from 'lwc';
import messageChannel from '@salesforce/messageChannel/MapMessageChannel__c';
import { subscribe, MessageContext } from 'lightning/messageService';

export default class Maplocation extends LightningElement {
    mapMarkers = [{
        location: {
            Latitude: '13.021534',
            Longitude: '80.158730'
        }
    }];

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.handleSubscribe();
    }

    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, messageChannel, (message) => {
            console.log(message.messageText);
            if (message.messageText == 'Home Address') {
                this.mapMarkers = [{
                    location: {
                        Latitude: '10.374725',
                        Longitude: '77.985593'
                    }
                }];
            } else if (message.messageText == 'Current Address') {
                this.mapMarkers = [{
                    location: {
                        Latitude: '13.021534',
                        Longitude: '80.158730'
                    }
                }];
            }

        });
    }

}
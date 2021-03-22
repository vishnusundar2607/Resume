import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import PROFILE_PIC from '@salesforce/resourceUrl/profilepic';
import RESUME_URL from '@salesforce/apex/resumeController.resumeURL';


export default class Profileheader extends NavigationMixin(LightningElement) {
    profilepic = PROFILE_PIC;

    @wire(RESUME_URL) resumeUrl
    viewResume() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.resumeUrl.data
            },
        });
    }
}
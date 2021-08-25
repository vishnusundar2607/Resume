import { LightningElement, wire } from 'lwc';
import messageChannel from '@salesforce/messageChannel/MapMessageChannel__c';
import { publish, MessageContext } from 'lightning/messageService'
import RESUME_ICONS from '@salesforce/resourceUrl/ResumeIcons';
import { NavigationMixin } from 'lightning/navigation';
export default class PersonalDetails extends NavigationMixin(LightningElement) {


    details = [{ name: 'Phone', IconName: RESUME_ICONS + '/Phone.png', value: '+91 7010300479' },
    { name: 'Email', IconName: RESUME_ICONS + '/Email.png', value: 'vishnusundar2607@gmail.com' },
    { name: 'Skype', IconName: RESUME_ICONS + '/Skype.png', value: 'vishnusundar2607' },
    { name: 'LinkedIn', IconName: RESUME_ICONS + '/Linkedin.png', value: 'linkedin.com/in/vishnusundar2607' },
    { name: 'Trailhead', IconName: RESUME_ICONS + '/Trailhead.png', value: 'trailblazer.me/id/vishnusundar2607' },
    { name: 'GitHub', IconName: RESUME_ICONS + '/GitHub.png', value: 'github.com/vishnusundar2607/Resume' },
    { name: 'Date Of Birth', IconName: RESUME_ICONS + '/DOB.png', value: '26/07/1992' },
    { name: 'Home Address', IconName: RESUME_ICONS + '/HomeLocation.png', value: '18 A M.V.M Nagar, Karur Road, Dindigul-624001' },
    { name: 'Current Address', IconName: RESUME_ICONS + '/Currenlocation2.png', value: 'Srikrishna’s “VRINDAVAN” Flat No: G1, Plot No. 30, Nethaji Street, Sri Raja Rajeswari Nagar, Madhanadhapuram, Porur, Chennai-125' }
    ]

    @wire(MessageContext)
    messageContext;

    ShowData(event) {
        event.preventDefault();
        event.stopPropagation();

        let message = { messageText: event.target.dataset.name };
        switch (event.target.dataset.name) {
            case 'LinkedIn': {
                this[NavigationMixin.Navigate]({
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://linkedin.com/in/vishnusundar2607',
                    },
                });
                break;
            }
            case 'Trailhead': {
                this[NavigationMixin.Navigate]({
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://trailblazer.me/id/vishnusundar2607',
                    },
                });
                break;
            }
            case 'GitHub': {
                this[NavigationMixin.Navigate]({
                    type: 'standard__webPage',
                    attributes: {
                        url: 'https://github.com/vishnusundar2607/Resume',
                    },
                });
                break;
            }
            case 'Home Address': {
                publish(this.messageContext, messageChannel, message);
                break;
            }
            case 'Current Address': {
                publish(this.messageContext, messageChannel, message);
                break;
            }

        }

    }


}
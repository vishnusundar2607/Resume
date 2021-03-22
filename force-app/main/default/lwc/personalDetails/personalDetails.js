import { LightningElement } from 'lwc';
import PROFILE_PIC from '@salesforce/resourceUrl/testsvg';
import PhoneIcon from '@salesforce/resourceUrl/PhoneIcon';
import RESUME_ICONS from '@salesforce/resourceUrl/ResumeIcons';
export default class PersonalDetails extends LightningElement {
    profilepic = `${PROFILE_PIC}#logo`
    PHONE_ICON = PhoneIcon
    ResumeIcons = RESUME_ICONS + '/Phone.png';
    details = [{ name: 'Phone', IconName: RESUME_ICONS + '/Phone.png', value: '+91 99-444-75300' },
    { name: 'Email', IconName: RESUME_ICONS + '/Email.png', value: 'vishnusundar2607@gmail.com' },
    { name: 'Skype', IconName: RESUME_ICONS + '/Skype.png', value: 'live:vishnusundar2607' },
    { name: 'LinkedIn', IconName: RESUME_ICONS + '/Linkedin.png', value: 'linkedin.com/in/vishnusundar2607' },
    { name: 'Trailhead', IconName: RESUME_ICONS + '/Trailhead.png', value: 'trailblazer.me/id/vishnusundar2607' },
    { name: 'Date Of Birth', IconName: RESUME_ICONS + '/DOB.png', value: '26/07/1992' },
    { name: 'Home Address', IconName: RESUME_ICONS + '/HomeLocation.png', value: '18 A M.V.M Nagar, Karur Road, Dindigul-624001' },
    { name: 'Current Address', IconName: RESUME_ICONS + '/Currenlocation2.png', value: 'Srikrishna’s “VRINDAVAN” Flat No: G1, Plot No. 30, Nethaji Street, Sri Raja Rajeswari Nagar, Madhanadhapuram, Porur, Chennai-125' },
    ]

   
    checkvalue() {
        
        console.log(this.details);
        console.log(this.ResumeIcons);
        console.log(details);
    }


}
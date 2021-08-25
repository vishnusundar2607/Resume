import { LightningElement } from 'lwc';

import CERTFICATE_PNG from '@salesforce/resourceUrl/CertificatePNG';
export default class Certificates extends LightningElement {

    certArray = [
        { name: 'Platform Developer I', IconName: CERTFICATE_PNG + '/PlatformDeveloper1.png', credentialId: 21994594 },
        { name: 'Javascript Developer', IconName: CERTFICATE_PNG + '/JavascriptDeveloper.png', credentialId: 22260182 },
        { name: 'Community Cloud Consultant', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 },
        { name: 'Administrator', IconName: CERTFICATE_PNG + '/Administrator.png', credentialId: 21720821 },
        { name: 'Einstein Next Best Action', IconName: CERTFICATE_PNG + '/EinsteinNextBestAction.png', credentialId: 1023451 }];
}
import { LightningElement } from 'lwc';

import CERTFICATE_PNG from '@salesforce/resourceUrl/CertificatePNG';
export default class Certificates extends LightningElement {

    certArray = [
        { name: 'Administrator', IconName: CERTFICATE_PNG + '/Administrator.png', credentialId: 21720821 },
        { name: 'Community Cloud Consultant', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 },
        { name: 'Platform Developer I', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 },
        { name: 'Platform Developer II', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 },
        { name: 'Javascript Developer', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 },
        { name: 'Platform App Builder', IconName: CERTFICATE_PNG + '/CommunityCloud.png', credentialId: 21836666 }];
}
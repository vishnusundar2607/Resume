import { LightningElement } from 'lwc';
export default class Expertise extends LightningElement {

    get ExpertiseList() {
        return [{ name: 'LWC', progressLevel: 'width:85%' },
        { name: 'Apex & Trigger', progressLevel: 'width:90%' },
        { name: 'Experience Cloud', progressLevel: 'width:87%' },
        { name: 'JavaScript', progressLevel: 'width:75%' },
        { name: 'Integration', progressLevel: 'width:60%' },
        { name: 'Aura', progressLevel: 'width:65%' },
        { name: 'SFDX & GIT', progressLevel: 'width:50%' },
        { name: 'Configurations', progressLevel: 'width:85%' }];
    };
}
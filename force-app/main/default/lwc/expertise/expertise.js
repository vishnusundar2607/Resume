import { LightningElement } from 'lwc';
export default class Expertise extends LightningElement {

    get ExpertiseList() {
        return [{ name: 'LWC', progressLevel: 'width:90%' },
        { name: 'Lightning', progressLevel: 'width:50%' },
        { name: 'Apex Controller', progressLevel: 'width:30%' },
        { name: 'Visualforce', progressLevel: 'width:75%' },
        { name: 'Triggers', progressLevel: 'width:90%' },
        { name: 'Configurations', progressLevel: 'width:64%' },
        { name: 'Automations Tools', progressLevel: 'width:85%' }];
    };
}
import { LightningElement ,api,wire} from 'lwc';
import SKILLS from '@salesforce/apex/resumeController.getSkillList'

export default class Skills extends LightningElement {

    relative = false ;
    skillheader ='';
    skillDescription='';
    @wire(SKILLS) skilllist;
    skillSelected(event){
        let selectedskill
        if(this.skilllist!=null){
            selectedskill = this.skilllist.data.find(rFields => rFields.Id === event.target.dataset.key);
            this.skillheader =selectedskill.Name;
            this.skillDescription =selectedskill.Description__c;
        }
        this.relative = true;
    }
    closeModal(){
        this.relative = false;
    }
    checkWire(){
        console.log(this.skilllist);
    }
}
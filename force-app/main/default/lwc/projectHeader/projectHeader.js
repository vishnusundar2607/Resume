import { LightningElement ,track ,wire,api} from 'lwc';
import GET_PROJECT from '@salesforce/apex/resumeController.getProject';
export default class ProjectHeader extends LightningElement {


    @api projectNames = 'Advisor group;coty';
    @track projectDetails =[];
    @wire(GET_PROJECT,{projectName: '$projectNames'}) Projects({error,data}){
        if(data){
            console.log('test123'+ JSON.stringify(data));
            this.projectDetails =data.map(projectdate=>{
                return{
                    ...projectdate,
                    showPoints : false
                }
            });
            console.log(this.projectDetails);
        }else if (error){
            console.log(error);
        }
    }

    expand(event) {
        let tempId = event.target.dataset.key
       // this.projectDetails.find(f => f.Id == tempId).showPoints = !(this.projectDetails.find(f => f.Id == tempId).showPoints)
        for(let p of this.projectDetails){
            if(p.Id==tempId){
                p.showPoints = !p.showPoints;
            }else{
                p.showPoints =false;
            }
        }
    }

}
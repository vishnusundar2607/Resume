import { LightningElement,api ,wire } from 'lwc';
import PROJECT_POINTS from '@salesforce/apex/resumeController.getProjectPoints';
export default class ProjectPoints extends LightningElement {
    @api projectId;
    ProjectPoint;
    @wire(PROJECT_POINTS,{projectID:'$projectId'}) Points({error,data}){
        if(data){
            this.ProjectPoint = data;
        }else if(error){
            console.log('error log');
        }
    }
}
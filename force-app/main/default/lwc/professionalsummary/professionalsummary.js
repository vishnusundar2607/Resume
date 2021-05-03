import { LightningElement ,wire} from 'lwc';
import PROFESSIONAL_SUMMARY from '@salesforce/apex/resumeController.getProjectId';
import PROJECT_POINTS from '@salesforce/apex/resumeController.getProjectPoints';
export default class Professionalsummary extends LightningElement {

    Professionalsummary = 'PROFESSIONAL SUMMARY';
    summaryRecord =[];
    name
    point
    projectId
    ProjectPoint
    
    @wire(PROFESSIONAL_SUMMARY,{projectName:'PROFESSIONAL SUMMARY'}) Summary({error,data}){
        if(data){
            this.name = data.Name;
            this.point = data.Summary_Points__c;
            this.projectId =data.Id;
            this.summaryRecord = data;
        }else if (error){
            console.log(error);
        }
    }

    @wire(PROJECT_POINTS,{projectID:'$projectId'}) Points({error,data}){
        if(data){
            this.ProjectPoint = data;
        }else if(error){
            console.log('error log');
        }
    }

 

    checkwire(){
        console.log(this.Summary);
        console.log(this.Summary);
    }

 /*    get name(){
        return this.Summary.data.Name;
    }

    get Points(){
        return this.Summary.data.Summary_Points__c;
    }
 */
}
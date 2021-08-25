public without sharing class resumeController {
    public resumeController() {

    }

    @AuraEnabled(cacheable=true)
    public static user fetchUserDetail(){
        User u =[Select id,Name,SmallPhotoUrl, FullPhotoUrl
        From User
        Where Id =: Userinfo.getUserId()];
        string Photolink =u.FullPhotoUrl;
        return u;
    }
    @AuraEnabled(cacheable=true)
    public static string resumeURL(){
        Portfolio__c RURL = Portfolio__c.getvalues('ResumeURL');
        return RURL.Resume__c;
    }

    @AuraEnabled(cacheable=true)
    public static List<Skill__c> getSkillList(){       
        return [
            SELECT Id,Name,Description__c,Status__c,Priority__c FROM Skill__c WHERE Status__c = 'Published' ORDER BY Priority__c ASC NULLS LAST
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Summary__c getProjectId(string projectName){
        return [
            SELECT Id,Name,Summary_Points__c,Role__c,Start_Date__c,End_Date__c FROM Summary__c WHERE Name = :projectName LIMIT 1
        ];
    }

    @AuraEnabled(cacheable=true)
    public static list<Summary__c> getProject(string projectName){
        List<string> projectNames = projectName.split(';');
        return [
            SELECT Id,Name,Summary_Points__c,Role__c,Start_Date__c,End_Date__c FROM Summary__c WHERE Name IN :projectNames LIMIT 20
        ];
    }

    @AuraEnabled(cacheable=true)
    public static list<Point__c> getProjectPoints(string projectID){
        return [
            SELECT Id,Name,Points__c,Summary__c FROM Point__c WHERE Summary__c = :projectID ORDER BY Order__c ASC NULLS LAST
        ];
    }


}
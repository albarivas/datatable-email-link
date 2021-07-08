public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT Name, Email, Phone FROM Contact];
    }
}

import { LightningElement, wire } from 'lwc';
//import { NavigationMixin } from 'lightning/navigation';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import CONTACT_ID_FIELD from '@salesforce/schema/Contact.Id';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import CONTACT_PHONE_FIELD from '@salesforce/schema/Contact.Phone';

const COLUMNS = [
  {
    label: 'Name',
    fieldName: CONTACT_NAME_FIELD.fieldApiName,
    type: 'text'
  },
  {
    label: 'Email',
    fieldName: CONTACT_EMAIL_FIELD.fieldApiName,
    type: 'clickableEmail',
    typeAttributes: {
      recordId: { fieldName: CONTACT_ID_FIELD.fieldApiName },
    }, 
  },
  {
      label: 'Phone',
      fieldName: CONTACT_PHONE_FIELD.fieldApiName,
      type: 'phone'
  }
];

export default class DatatableEmailLinks extends LightningElement {
  columns = COLUMNS;

  @wire(getContacts)
  contacts;
}
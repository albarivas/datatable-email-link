/* myDatatable.js */
import LightningDatatable from 'lightning/datatable';
import clickableEmailTemplate from './clickableEmailTemplate.html';

export default class MyDatatable extends LightningDatatable {
   static customTypes = {
       clickableEmail: {
           template: clickableEmailTemplate,
           standardCellLayout: true,
           // Provide template data here if needed
           typeAttributes: ['recordId']
       }
      //more custom types here
   };
}
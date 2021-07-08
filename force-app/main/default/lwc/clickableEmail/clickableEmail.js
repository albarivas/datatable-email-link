import { LightningElement, api } from 'lwc';

export default class ClickableEmail extends LightningElement {
  @api recordId;
  @api email;

  get recordIdURL() {
    return `/${this.recordId}`;
  }
}
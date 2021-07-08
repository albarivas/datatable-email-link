import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ClickableEmail extends NavigationMixin(
  LightningElement
) {
  @api recordId;
  @api email;

  navigate(event) {
      event.preventDefault();
      this[NavigationMixin.GenerateUrl]({
          type: 'standard__recordPage',
          attributes: {
              recordId: this.recordId,
              actionName: 'view'
          }
      }).then(url => { window.open(url) });
  }
}


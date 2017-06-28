import { Component } from '@angular/core';


@Component(
  {selector: 'i18n-select-pipe', template: `<div>{{gender | i18nSelect: inviteMap}} </div>`})
export class I18nSelectPipeComponent {
  gender: string = 'male';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};
}



/*@Component({
  moduleId: module.id,
  selector: 'i18n-select-pipe',
  templateUrl: 'pipe.component.html'
})

export class I18nSelectPipeComponent {
  imperial: string = 'Imperial';
}*/

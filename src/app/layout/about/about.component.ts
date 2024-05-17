import {Component} from '@angular/core';
import {PrimeIcons} from "primeng/api";
import {Clipboard} from '@angular/cdk/clipboard';
import {MessageService as MessageServicePn} from "primeng/api";
import {CoreMessageEnum} from "@shared/enums";
import {CoreService} from '@servicesApp/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  protected readonly PrimeIcons = PrimeIcons;

  constructor(
    protected readonly coreService: CoreService,
    private readonly clipboard: Clipboard,
    private readonly messageServicePn: MessageServicePn,
  ) {
  }


  copy(text: string) {
    this.clipboard.copy(text);
    this.messageServicePn.clear();
    this.messageServicePn.add({
      key: CoreMessageEnum.APP_TOAST,
      severity: 'info',
      summary: 'Copiado',
      detail: text,
    });
  }
}

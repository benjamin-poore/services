import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountsService} from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}
  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}

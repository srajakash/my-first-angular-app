import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowCreateServer = false;
  serverCreatedStatus = 'No Servers Created';
  serverName = '';
  isServerCreated = false;
  onCreateServer() {
    this.serverCreatedStatus = 'Server created';
    this.isServerCreated = true;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    setTimeout(() => {
      this.allowCreateServer = true;
    }, 2000);
  }
}

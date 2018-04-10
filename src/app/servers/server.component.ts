import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowCreateServer = false;
  serverStatus = 'No Servers Created';
  serverName = '';
  isServerCreated = false;
  onCreateServer() {
    this.serverStatus = 'Server created';
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

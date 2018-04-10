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
  serverStatus = '';
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
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

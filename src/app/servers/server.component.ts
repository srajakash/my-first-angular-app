import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  allowCreateServer = false;
  serverStatus = 'No servers were created';
  onCreateServer() {
    this.serverStatus = 'A server was created';
  }
  constructor() {
    setTimeout(() => {
      this.allowCreateServer = true;
    }, 2000);
  }
}

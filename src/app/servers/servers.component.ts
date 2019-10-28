import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created as of now';
  serverName = 'TestServer';

  servers = ['TestServer', 'TestServer2'];

  serverCreated = false;

  constructor() {
    setTimeout( () => { this.allowNewServer = true; }, 2000);
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Name is ' + this.serverName ;
  }

  onUpdateServerName (event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  ngOnInit() {
  }

}

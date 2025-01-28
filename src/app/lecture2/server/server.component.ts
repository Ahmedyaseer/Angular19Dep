import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss'
})
export class ServerComponent {

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  serverid: number = 10;
  serverStatus: string = 'offline';
  allowNewServer:boolean = false;
  twoWayBinding:string = 'TestServer';
  iserverCreated:boolean = false;
  isServerOffline:boolean = !this.iserverCreated;
  styleNoServer:{} = {
    'background-color': 'blue',
    'color': 'white'};
    styleServer:{} = {
      'background-color': 'green',
      'color': 'white'};

      mapScssSuccess:{}={
        'success':this.iserverCreated,
      }
      mapScssFail:{}={
        'bad':this.isServerOffline
      }

      servers:Array<string> = ['TestServer', 'TestServer2'];

  onUpdateServer():string {
    const result = confirm('Server is online');
    if(result){
      this.iserverCreated = true;
      return this.serverStatus = 'online';
    }
    this.iserverCreated = false;
   return this.serverStatus = 'offline';
  }
  onOffline():void{
    const result = confirm('Server is offline');
    if(result){
      this.iserverCreated = false;
      this.serverStatus = 'offline';
    }

  }

  serverStatusStr():string {
    return this.serverStatus;
  }

  onAddNewServer(){
    if(this.twoWayBinding == ''){
     return alert('Server name cannot be empty');
    }
    for(let i = 0; i < this.servers.length; i++){
      if(this.twoWayBinding == this.servers[i]){
        return alert('Server already exist');
      } 
    }
    this.servers.push(this.twoWayBinding);
    this.twoWayBinding = '';
  }

  
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  template: `
      <p>I'm in the Users Component</p>
      <button (click) = "showInfo = true">Show Info</button>
      <button (click) = "onShowAlert()">Alert!</button>
      <p *ngIf="showInfo">some extra user information</p>
      <p *ngFor="let user of users">{{user}}</p>
      <p [ngStyle] = "{'background-color': color}">Green</p>
    
  `
})

export class UsersComponent {
  showInfo = false;
  color = 'green';
  // @Input() users: any;
  @Output() alertThrown = new EventEmitter<string>();

  users: any[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }
  onShowAlert() {
    this.alertThrown.emit('This is the message');
  }
}



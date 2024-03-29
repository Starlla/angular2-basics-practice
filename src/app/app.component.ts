import { Component } from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  age = 27;
  person = {
    name: 'Max',
    age: 27
  };
  users: any[];

  constructor(private usersService: UsersService) {
      this.users = this.usersService.getUsers();
  }


  getName() {
    return 'Max';
  }

  setAge(age: number) {
    this.age = age;
  }

  onChildAlert(message: string) {
    alert(message);
  }
}

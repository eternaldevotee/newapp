import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const helper:number = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[helper];
  get img_path() {
    return './users/' + this.selectedUser.avatar;

  }

  userClicked() {
    const helper:number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[helper];
}

}

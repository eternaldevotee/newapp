import { Component,signal,computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const helper:number = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[helper]);
  img_path = computed(() => "./users/" + this.selectedUser().avatar);
  // get img_path() {
  //   return './users/' + this.selectedUser().avatar;

  // }

  userClicked() {
    const helper:number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[helper]);
}

}
  
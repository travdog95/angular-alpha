import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  protected readonly title = signal('angular-alpha');
  users = DUMMY_USERS;
  selectedUserid?: string;

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserid)!;
  }

  onSelectUser(id: string) {
    this.selectedUserid = id;
  }
}

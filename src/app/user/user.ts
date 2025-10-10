import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // Using decorators
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // Using signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // Using computed
  // imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectedUser() {
    // alert(`User ${this.name} selected!`);
    this.select.emit(this.user.id);
  }
}

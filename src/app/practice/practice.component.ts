import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html'
})

export class PracticeComponent {
  username = '';
  checkUsername(): boolean {
    if (this.username === '') {
      return true;
    }
  }
  resetUsername(event: Event) {
    this.username = '';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session2-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './session2-task.component.html',
  styleUrl: './session2-task.component.scss'
})
export class Session2TaskComponent {
  
  constructor() {
    this.userName = '';
  }
  userName: string = '';
  isUserNameEmpty: boolean = false;
  isShowDetails: boolean = false;
  isShowPassword: boolean = false;
  timeClicked:Array<string> = [Date.now().toString()];
  mapfifthDateScss:{}={
    "fifthDate":true  
  };


  onUpdate(): boolean {
    if (this.userName = '') {
     return this.isUserNameEmpty = false
    } else {
     return this.isUserNameEmpty = true;
    }
  }

  showDetails(): boolean {
    return this.isShowDetails = true;
  }

  onShowOrHidden(): boolean {
    if (this.isShowPassword) {
     return this.isShowPassword = false;
    } else {
     return this.isShowPassword = true;
    }
  }

  onDateClicked() {
    this.timeClicked.push(Date.now().toString());
  }
}

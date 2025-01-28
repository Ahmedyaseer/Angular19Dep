import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Session2TaskComponent } from "./session2/session2-task/session2-task.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
     Session2TaskComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular19Dep';
}

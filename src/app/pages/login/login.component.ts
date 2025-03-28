import { Component } from '@angular/core';
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  imports: [
    FaIconComponent
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
}

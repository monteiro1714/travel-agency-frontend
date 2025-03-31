import { Component } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;

}

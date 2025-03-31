import { Component } from '@angular/core';
import {faWhatsapp,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [
    FaIconComponent
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;

}

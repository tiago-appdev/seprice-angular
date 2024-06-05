import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarHomeComponent } from '../layout/nav-bar-home/nav-bar-home.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavBarHomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  clinicaName = 'SePrice';
  cards = [
    {
      id: 'primary-care',
      title: 'Atención Primaria',
      description:
        'Servicios integrales de atención primaria para todas sus necesidades de salud.',
      icon: '🩺',
    },
    {
      id: 'cardiology',
      title: 'Cardiología',
      description:
        'Atención cardíaca experta para mantener su corazón sano y fuerte.',
      icon: '❤️',
    },
    {
      id: 'diagnostics',
      title: 'Diagnósticos',
      description:
        'Servicios avanzados de diagnóstico para identificar y abordar sus preocupaciones de salud.',
      icon: '🔬',
    },
    {
      id: 'urgent-care',
      title: 'Atención de Urgencias',
      description:
        'Atención rápida y eficiente para necesidades médicas inesperadas.',
      icon: '🚑',
    },
  ];
}

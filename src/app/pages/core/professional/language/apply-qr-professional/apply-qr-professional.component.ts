import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Professional {
  name: string;
  profession: string;
  formation: string;
  skills: string[];
  summary: string;
}

@Component({
  selector: 'app-apply-professional-curriculum',
  templateUrl: './apply-qr-professional.component.html',
  styleUrls: ['./apply-qr-professional.component.scss']
})
export class ApplyQrProfessionalComponent implements OnInit {
  
  professionals: Professional[] = [
    {
      name: 'Juan Pérez',
      profession: 'Desarrollador Web',
      formation: 'Ingeniería en Sistemas',
      skills: ['Angular', 'TypeScript', 'PrimeNG'],
      summary: 'Desarrollador web con más de 5 años de experiencia en la construcción de aplicaciones robustas y escalables.'
    },
    {
      name: 'Ana García',
      profession: 'Diseñadora Gráfica',
      formation: 'Licenciatura en Diseño Gráfico',
      skills: ['Photoshop', 'Illustrator', 'UI/UX'],
      summary: 'Diseñadora gráfica especializada en la creación de interfaces de usuario intuitivas y atractivas.'
    },
    {
      name: 'Darío García',
      profession: 'Diseñadora Gráfica',
      formation: 'Licenciatura en Diseño Gráfico',
      skills: ['Photoshop', 'Illustrator', 'UI/UX'],
      summary: 'Diseñadora gráfica especializada en la creación de interfaces de usuario intuitivas y atractivas.'
    }
  ];

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home' },
      { label: 'Profesionales', icon: 'pi pi-fw pi-users' },
      { label: 'Servicios', icon: 'pi pi-fw pi-briefcase' },
      { label: 'Contacto', icon: 'pi pi-fw pi-envelope' }
    ];
  }
  
}

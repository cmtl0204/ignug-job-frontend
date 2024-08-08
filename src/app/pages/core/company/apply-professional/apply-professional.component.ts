import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Professional {
  id: number;
  name: string;
  profession: string;
  formation: string;
  skills: string[];
  summary: string;
  experience: string;
  contact: string;
  location: string;
}

@Component({
  selector: 'app-apply-professional',
  templateUrl: './apply-professional.component.html',
  styleUrls: ['./apply-professional.component.scss']
})
export class ApplyProfessionalComponent implements OnInit {

  professionals: Professional[] = [
    {
      id: 1,
      name: 'Juan Pérez',
      profession: 'Desarrollador Web',
      formation: 'Ingeniería en Sistemas',
      skills: ['Angular', 'TypeScript', 'PrimeNG'],
      summary: 'Desarrollador web con más de 5 años de experiencia en la construcción de aplicaciones robustas y escalables.',
      experience: '5 años en desarrollo web.',
      contact: 'juan.perez@example.com',
      location: 'Ambato, Ecuador'
    },
  
    {
      id: 2,
      name: 'Ana García',
      profession: 'Diseñadora Gráfica',
      formation: 'Licenciatura en Diseño Gráfico',
      skills: ['Photoshop', 'Illustrator', 'UI/UX'],
      summary: 'Diseñadora gráfica especializada en la creación de interfaces de usuario intuitivas y atractivas.',
      experience: '3 años en diseño gráfico.',
      contact: 'ana.garcia@example.com',
      location: 'Guayaqui, Ecuador'
    },
    {
      id: 3,
      name: 'Darío García',
      profession: 'Analista de datos',
      formation: 'Ingeniería en ciencas de datos',
      skills: ['SQL', 'API REST', 'HTTP PROTOCOLS'],
      summary: 'Ingeniero en ciencias de datos especializado en la gestión de tráfico de datos y bases relacionales',
      experience: '4 años en MetaCience',
      contact: 'dario.garcia@example.com',
      location: 'Quito, Ecuador'
    }
    // Agregar más profesionales según sea necesario
  ];

  items: MenuItem[] = [];
  selectedProfessional!: Professional;

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home' },
      { label: 'Profesionales', icon: 'pi pi-fw pi-users' },
      { label: 'Servicios', icon: 'pi pi-fw pi-briefcase' },
      { label: 'Contacto', icon: 'pi pi-fw pi-envelope' }
    ];
  }

  selectProfessional(professional: Professional) {
    this.selectedProfessional = professional;
  }
}

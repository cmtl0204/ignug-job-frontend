import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

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
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {
  @Input() professional!: Professional;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    
  }

  contactProfessional() {
    this.messageService.add({ severity: 'success', summary: 'Contacto', detail: `El profesional ${this.professional.name} será contactado.` });
  }
}
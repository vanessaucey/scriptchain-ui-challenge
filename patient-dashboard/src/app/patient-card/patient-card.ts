import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  standalone: true,
  imports: [],
  templateUrl: './patient-card.html',
  styleUrl: './patient-card.scss'
})
export class PatientCard {
  @Input() name!: string;
  @Input() nextAppointment!: string;
  @Input() dob!: string;
  @Input() sex!: string;
  @Input() residence!: string;
  @Input() mrn!: string;
  @Input() id!: string;
  @Input() ssn!: string;
  @Input() phone!: string;
  @Input() email!: string;
  @Input() hospital!: string;
  @Input() dept!: string;
  @Input() physician!: string;
  @Input() conditions!: string;
}

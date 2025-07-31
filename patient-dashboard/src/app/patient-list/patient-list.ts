import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientCard } from '../patient-card/patient-card';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, PatientCard],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.scss'
})
export class PatientList {
  patients = [
    {
      name: 'Ashley Citarella',
      nextAppointment: 'Today 9:00 am',
      dob: '07/02/1958',
      sex: 'Female',
      residence: 'Santa Clara, CA',
      mrn: 'YTK12345678',
      id: 'NHL12345679',      
      ssn: '0000',
      phone: '(000)-000-0000',
      email: 'ashley@example.com',
      hospital: 'General Hospital',
      dept: 'Department of Cardiology',
      physician: 'Dr. Smith',
      conditions: 'COPD'
    },
    {
      name: 'Albert Johnson',
      dob: '01/15/1952',
      sex: 'Male',
      residence: 'Waltham, MA',
      mrn: 'YTK12343675',
      id: 'NHL12345678',
      ssn: '1111',
      phone: '(111)-111-1111',
      email: 'aljohnson1952@example.com',
      hospital: 'Valley Medical',
      dept: 'Department of Cardiology',
      physician: 'Dr. Patel',
      nextAppointment: 'Tomorrow 10:30 am',
      conditions: 'Hypertension, Asthma'
    }
    
  ]
}

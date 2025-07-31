import { Component, Input } from '@angular/core';
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
  // receives the search term
  @Input() filters: any = {};

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
  
  get filteredPatients() {
    return this.patients.filter(patient => {
      const f = this.filters;

      // split name to check first/last name separately
      const [firstName, lastName] = patient.name.split(' ');

      // check first name
      if (f.firstName && !firstName.toLowerCase().includes(f.firstName.toLowerCase())) {
        return false;
      }

      // check last name
      if (f.lastName && !lastName.toLowerCase().includes(f.lastName.toLowerCase())) {
        return false;
      }

      // check DOB
      if (f.dob && patient.dob !== f.dob) {
        return false;
      }

      // check appointment range
      if (f.startDate && patient.nextAppointment < f.startDate) {
        return false;
      }
      if (f.endDate && patient.nextAppointment > f.endDate) {
        return false;
      }

      return true;
    });
  }
}

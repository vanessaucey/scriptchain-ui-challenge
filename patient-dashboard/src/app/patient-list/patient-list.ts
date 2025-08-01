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

  // creates tab between today's patients and searching through all patients
  activeTab: 'today' | 'search' = 'today';

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
    },
    {
      name: 'Leslie Isabelle Wang',
      dob: '03/12/1985',
      sex: 'Female',
      residence: 'Mooselookmeguntic, ME',
      mrn: 'YTK1234566',
      id: 'NHL12345677',
      ssn: '2222',
      phone: '(222)-222-2222',
      email: 'leslie.isabelle.wang@example.com',
      hospital: 'Massachusettes Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      nextAppointment: 'Today 7:30pm',
      conditions: 'CHF'
    },
    {
      name: 'Adela Basic',
      dob: '03/12/1950',
      sex: 'Female',
      residence: 'Boston, MA',
      mrn: 'YTK1234565',
      id: 'NHL12345676',
      ssn: '3333',
      phone: '(333)-333-3333',
      email: 'adellabasic50@example.com',
      hospital: 'Massachusettes Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      nextAppointment: 'Today 2:30pm',
      conditions: 'CHF'
    },
    {
      name: 'Reza Saatchi',
      dob: '03/12/1957',
      sex: 'Male',
      residence: 'Boston, MA',
      mrn: 'YTK1234564',
      id: 'NHL12345675',
      ssn: '4444',
      phone: '(444)-444-4444',
      email: 'reza.saatchi@example.com',
      hospital: 'Massachusettes Medical Group',
      dept: 'Department of Cardiology',
      physician: 'Dr. Beth Smith',
      nextAppointment: 'Today 2:30pm',
      conditions: 'CHF'
    }
  ]

  // selection of tab underneath search feature
  setTab(tab: 'today' | 'search') {this.activeTab = tab;
}
  
  get filteredPatients() {
    let results =  this.patients.filter(patient => {  
      const f = this.filters;

      // BASIC SEARCH to check first/last name, DOB, and appt. range, 
      // split name to check first/last name separately
      const [firstName, lastName] = patient.name.split(' ');
      if (f.firstName && !firstName.toLowerCase().includes(f.firstName.toLowerCase())) {
        return false;
      }
      if (f.lastName && !lastName.toLowerCase().includes(f.lastName.toLowerCase())) {
        return false;
      }
      if (f.dob && patient.dob !== f.dob) {
        return false;
      }
      if (f.startDate && patient.nextAppointment < f.startDate) {
        return false;
      }
      if (f.endDate && patient.nextAppointment > f.endDate) {
        return false;
      }
      
      // ADVANCED SEARCH to check hospital, dept., and physician
      if (f.hospital && !patient.hospital.toLowerCase().includes(f.hospital.toLowerCase())) {
        return false;
      }
      if (f.department && !patient.dept.toLowerCase().includes(f.department.toLowerCase())) {
        return false;
      }
      if (f.physician && !patient.physician.toLowerCase().includes(f.physician.toLowerCase())) {
        return false;
      }
      
      return true;
    });

    // Display of patients with appointments today in 'today' tab
    if (this.activeTab === 'today'){
      results = results.filter(patient => patient.nextAppointment.toLowerCase().startsWith('today'));
    }

    return results;
  }
}

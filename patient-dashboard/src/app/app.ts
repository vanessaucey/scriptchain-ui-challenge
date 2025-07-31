import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientCard } from './patient-card/patient-card';
import { PatientList } from './patient-list/patient-list';
import { SearchBar } from './search-bar/search-bar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PatientCard, PatientList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('patient-dashboard');
  
  filters: any = {};

  onFilters(newFilters: any) {
    this.filters = newFilters;
  }
}

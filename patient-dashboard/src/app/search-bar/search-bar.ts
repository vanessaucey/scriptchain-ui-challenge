import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  @Output() filtersChange = new EventEmitter<any>();
  
  // screenshot provides two tabs for searching: 'basic' or 'advanced'
  // track which tab is active: 'basic' or 'advanced'
  activeTab: 'basic' | 'advanced' = 'basic';

  // basic search fields
  // patient info + appointment range
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  startDate: string = '';
  endDate: string = '';

  // advanced serach fields
  advancedFilters = {
    hospital: '',
    department: '',
    physician: ''
  };

  setTab(tab: 'basic' | 'advanced') {
    this.activeTab = tab;
  }

  emitFilters() {
    this.filtersChange.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }
}

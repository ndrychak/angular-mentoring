import { Component } from '@angular/core';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})

export class SearchComponent {
  searchText: string;

  constructor() { }

  findCourse(): void {
    console.log(`search: ${this.searchText}`);
  }
}

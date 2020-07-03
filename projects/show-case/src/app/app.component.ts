import { Component } from '@angular/core';
import { mockData } from '../assets/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'show-case';
  isModalOpen = false;
  isSideBarOpen = false;
  tableData = mockData;

  onClick(event: Event) {
    console.log('CLICKED', event);
  }

  setCloseModal(event) {
    this.isModalOpen = !this.isModalOpen;
  }

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  getSelectedResults(data) {
    console.log('SEARCH RESULT', data);
  }
}

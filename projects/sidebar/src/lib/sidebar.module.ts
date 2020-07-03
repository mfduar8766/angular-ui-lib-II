import { NgModule } from '@angular/core';
import { SideBarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule],
  exports: [SideBarComponent]
})
export class SideBarModule { }

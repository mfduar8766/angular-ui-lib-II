import { NgModule } from '@angular/core';
import { SplitbuttonComponent } from './splitbutton.component';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [SplitbuttonComponent, HoverDirective],
  imports: [CommonModule, ],
  exports: [SplitbuttonComponent]
})
export class SplitbuttonModule { }

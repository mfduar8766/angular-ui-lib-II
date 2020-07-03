import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <button
      [ngStyle]="{ 'background-color': backgroundColor }"
      [type]="buttonType"
      (click)="handleClick.emit($event)"
      [disabled]="isDisabled"
    >
      {{ buttonText }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Input() buttonType = 'button';
  @Input() isDisabled = false;
  @Input() backgroundColor: string;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();
}

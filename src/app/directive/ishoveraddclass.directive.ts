import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIshoveraddclass]',
  standalone: true
})
export class IshoveraddclassDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = '';
   }

}

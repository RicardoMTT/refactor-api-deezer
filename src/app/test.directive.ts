import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  constructor(private elementRef: ElementRef) {}
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter() {
    console.log('enter');
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    console.log('leave');
  }
}

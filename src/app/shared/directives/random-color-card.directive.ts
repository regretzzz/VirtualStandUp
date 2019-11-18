import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColorCard]'
})
export class RandomColorCardDirective {

  randomColorClass: string[] = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning',
    'bg-info'
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const index = Math.floor(Math.random() * 5);
    renderer.addClass(el.nativeElement, this.randomColorClass[index]);
  }

}

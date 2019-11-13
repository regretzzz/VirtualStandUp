import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloatAddButton]'
})
export class FloatAddButtonDirective {

  constructor(public el: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
      this.renderer.addClass(this.el.nativeElement.children[1], 'show-long-text');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement.children[1], 'show-long-text');
  }
}

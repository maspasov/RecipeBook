import { Directive, ElementRef, Input, Renderer, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @Input() dirHighlight: string;

  @Input() defaultColor = 'white';
  @Input('dirHighlight') dirHighlightColor = 'green';

  private backgroundColor:string;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.dirHighlightColor;
  }
  
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(el: ElementRef, rederer: Renderer) {
    // el.nativeElement.style.backgroundColor = 'yellow';
    // rederer.setElementStyle(el.nativeElement, 'background-color', 'green');
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[auto-grow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrow {

  onFocus(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '350px');
    console.log('Inside onFocus el:' + this.el);
  }

  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
    console.log('Inside onBlur el:' + this.el);
  }

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

}

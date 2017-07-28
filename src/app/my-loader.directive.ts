import { Directive, ElementRef, Input, ViewRef, TemplateRef, ViewContainerRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyLoader]'
})
export class MyLoaderDirective {


  constructor(
    private renderer: Renderer, 
    private el: ElementRef) {

  }

  @Input() set appMyLoader(isLoading: boolean) {
    console.log(isLoading);
    if (isLoading) {
      Array.from(this.el.nativeElement.childNodes).map((x: any) => {
        if ("style" in x) {
          x.style.visibility = "hidden";
        }
      });

      var spinnerEl = this.renderer.createElement(this.el.nativeElement, "div");
      this.renderer.setElementClass(spinnerEl, "spinner", true);

    }
  }

}

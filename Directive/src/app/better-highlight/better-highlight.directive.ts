import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  // tslint:disable-next-line:no-input-rename
  @Input('appBetterHighlight') highlightColor = 'blue';
  // @HostBinding('style.backgroundColor')backgroundColor: string = this.defaultColor;
  @HostBinding('style.backgroundColor')backgroundColor: string;
  // @HostBinding('style.backgroundColor')backgroundColor:string= 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
      this.backgroundColor = this.defaultColor;
     // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseover')mouseover(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      // this.backgroundColor = 'blue';
      this.backgroundColor = this.highlightColor;
    }
    @HostListener('mouseleave')mouseleave(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      // this.backgroundColor = 'transparent';
      this.backgroundColor = this.defaultColor;
    }
}

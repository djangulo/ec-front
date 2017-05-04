import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(private el: ElementRef) { }

    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside){
            this.clickOutside.emit(null);
        }
    }

}

@Directive({
    selector: '[escapeClose]'
})
export class EscapeCloseDirective{
    constructor(private el: ElementRef) { }
    
    @Output() public clickOutside = new EventEmitter();
    
    @HostListener('document:keydown') onkeydown(event) {
        if(event.keyCode == 27){
            
        }
    }
}
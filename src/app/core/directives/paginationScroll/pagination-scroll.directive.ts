import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appPaginationScroll]',
})
export class PaginationScrollDirective {
  private page = 0;
  private scrollTop = 0;

  /**
   * create event and create debouncetime by event scroll
   * @param element get element
   * @param renderer set configure scroll
   */
  constructor(private element: ElementRef, private renderer: Renderer2) {
    fromEvent(this.element.nativeElement, 'scroll')
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((event: any) => {
        this.configurePage(event);
        this.configureScroll(event);
      });
  }

  /**
   * @param event configure page plus or substract value
   */
  private configurePage(event: any) {
    if (this.scrollTop < event.target.scrollTop) {
      this.page++;
    } else if (this.scrollTop > event.target.scrollTop) {
      this.page--;
    }
  }
  /**
   *
   * @param event set pagination by scroll on current page
   */
  private configureScroll(event: any) {
    if (this.scrollTop !== event.target.scrollTop) {
      this.scrollTop = 48 * (10 * this.page);
      this.renderer.setProperty(
        this.element.nativeElement,
        'scrollTop',
        this.scrollTop
      );
    }
  }
}

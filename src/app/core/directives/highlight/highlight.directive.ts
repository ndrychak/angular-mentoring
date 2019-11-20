import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[agmHighlight]'
})

export class HighlightDirective implements OnInit {
  @Input() creationDate: string;

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    const creationDate = new Date(this.creationDate);
    const currentDate = new Date();
    const days = 14;
    const daysAgo = new Date(new Date().setDate(new Date().getDate() - days));

    const isPublished = creationDate.getTime() < currentDate.getTime();
    const isPublishedRecently = creationDate.getTime() >= daysAgo.getTime();
    const isFuturePublish = creationDate.getTime() > currentDate.getTime();

    const colorPast = '#9BC53D';
    const colorFuture = '#5BC0EB';

    if (isPublished && isPublishedRecently) {
      this.highlightWith(colorPast);
    } else if (isFuturePublish) {
      this.highlightWith(colorFuture);
    }
  }

  highlightWith(color: string) {
    this.el.nativeElement.style.borderColor = color;
  }
}

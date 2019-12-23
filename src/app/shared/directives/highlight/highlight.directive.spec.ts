import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let sut;
  let ElementRef;

  const colorPast = '#9BC53D';
  const colorFuture = '#5BC0EB';

  beforeEach(() => {
    ElementRef = {
      nativeElement: {
        style: {
          borderColor: ''
        }
      }
    };

    sut = new HighlightDirective(ElementRef);

    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2019-11-08'));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      spyOn(sut, 'highlightWith');
    });

    it('should call highlightWith with color when article will be published in future', () => {
      sut.date = '2020-11-05';
      sut.ngOnInit();

      expect(sut.highlightWith).toHaveBeenCalledWith(colorFuture);
    });

    it('should call highlightWith with color when article was published less then 14 days ago', () => {
      sut.date = '2019-11-05';
      sut.ngOnInit();

      expect(sut.highlightWith).toHaveBeenCalledWith(colorPast);
    });
  });

  describe('#highlightWith', () => {
    it('should set border color', () => {
      sut.highlightWith(colorPast);

      expect(sut.el.nativeElement.style.borderColor).toEqual(colorPast);
    });
  });
});


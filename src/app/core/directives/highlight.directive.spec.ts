import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let directive;
  let elRef;

  const colorPast = '#9BC53D';
  const colorFuture = '#5BC0EB';

  class MockElementRef {
    nativeElement = {
      style: {
        borderColor: ''
      }
    };
  }

  beforeEach(() => {
    elRef = new MockElementRef();
    directive = new HighlightDirective(elRef);

    spyOn(directive, 'highlightWith');
    jasmine.clock().install();
    jasmine.clock().mockDate(new Date('2019-11-08'));
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should call highlightWith with color when article will be published in future', () => {
    directive.creationDate = '2020-11-05';
    directive.ngOnInit();

    expect(directive.highlightWith).toHaveBeenCalledWith(colorFuture);
  });

  it('should call highlightWith with color when article was published less then 14 days ago', () => {
    directive.creationDate = '2019-11-05';
    directive.ngOnInit();

    expect(directive.highlightWith).toHaveBeenCalledWith(colorPast);
  });
});


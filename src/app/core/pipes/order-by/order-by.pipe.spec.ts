import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let sut;

  beforeEach(() => {
    sut = new OrderByPipe();
  });

  describe('#transform', () => {
    it('should sort array by property DESC', () => {
      const arr = [{prop: '22'}, {prop: '11'}, {prop: '33'}];

      expect(sut.transform(arr, 'prop')).toEqual([{prop: '33'}, {prop: '22'}, {prop: '11'}]);
    });
  });
});


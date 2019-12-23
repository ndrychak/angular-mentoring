import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let sut;

  beforeEach(() => {
    sut = new FilterPipe();
  });

  describe('#transform', () => {
    it('should return filtered by provided value array. partial match', () => {
      const arr = [{prop: '22aa'}, {prop: 'aa11'}, {prop: 'ddd33'}];

      expect(sut.transform(arr, 'prop', 'd3')).toEqual([{prop: 'ddd33'}]);
    });
  });
});


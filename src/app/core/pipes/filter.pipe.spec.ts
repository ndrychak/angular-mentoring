import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should return filtered by provided value array. partial match', () => {
    const arr = [{prop: '22aa'}, {prop: 'aa11'}, {prop: 'ddd33'}];

    expect(pipe.transform(arr, 'prop', 'd3')).toEqual([{prop: 'ddd33'}]);
  });
});


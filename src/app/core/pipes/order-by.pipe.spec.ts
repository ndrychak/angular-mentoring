import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should sort array by property DESC', () => {
    const arr = [{prop: '22'}, {prop: '11'}, {prop: '33'}];

    expect(pipe.transform(arr, 'prop')).toEqual([{prop: '33'}, {prop: '22'}, {prop: '11'}]);
  });
});


import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new StrengthPipe();
  });

  it('should display weak if strength is 5', () => {
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 12', () => {
    expect(pipe.transform(12)).toEqual('12 (strong)');
  });

  it('should display unbelievable if strength is 22', () => {
    expect(pipe.transform(22)).toEqual('22 (unbelievable)');
  });
});

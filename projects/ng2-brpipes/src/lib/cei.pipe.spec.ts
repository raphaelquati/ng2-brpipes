import { CeiPipe } from './/cei.pipe';

describe('CeiPipe', () => {

  const pipe = new CeiPipe();
  test('transforms "761198762985" to "76.119.87629/85"', () => {
    expect(pipe.transform('761198762985')).toBe('76.119.87629/85');
  });

  test('transforms null to null', () => {
    expect(pipe.transform(null)).toBe(null);
  });

  test('transforms undefined to undefined', () => {
    expect(pipe.transform(undefined)).toBe(undefined);
  });

  test('transforms "" to ""', () => {
    expect(pipe.transform('')).toBe('');
  });

  test('transforms "33154" to "33154"', () => {
    expect(pipe.transform('33154')).toBe('33154');
  });
});

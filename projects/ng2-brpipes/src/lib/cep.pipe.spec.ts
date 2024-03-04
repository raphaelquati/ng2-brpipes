import { CepPipe } from './/cep.pipe';

describe('CepPipe', () => {

  const pipe = new CepPipe();
  test('transforms "72006226" to "72006-226"', () => {
    expect(pipe.transform('72006226')).toBe('72006-226');
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

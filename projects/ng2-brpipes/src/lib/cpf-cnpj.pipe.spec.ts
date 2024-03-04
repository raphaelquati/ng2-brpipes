import { CpfCnpjPipe } from '././/cpf-cnpj.pipe';

describe('CpfCnpjPipe', () => {

  const pipe = new CpfCnpjPipe();
  test('transforms "01964256119" to "019.642.561-19"', () => {
    expect(pipe.transform('01964256119')).toBe('019.642.561-19');
  });

  test('transforms "019.642.561-19" to "019.642.561-19"', () => {
    expect(pipe.transform('019.642.561-19')).toBe('019.642.561-19');
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

  test('transforms "43146822000198" to "43.146.822/0001-98"', () => {
    expect(pipe.transform('43146822000198')).toBe('43.146.822/0001-98');
  });

});

import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

const arrayBufferConverter = new ArrayBufferConverter();

test('load()', () => {
  arrayBufferConverter.load(getBuffer());
  expect(arrayBufferConverter.buffer).toEqual(getBuffer());
});

test('toString()', () => {
  expect(arrayBufferConverter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});

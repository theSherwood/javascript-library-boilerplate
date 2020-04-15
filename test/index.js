import { testFunction } from '../src/index';
import test from 'tape';

test('sample test', (t) => {
  t.equal(1, testFunction());
  t.end();
});

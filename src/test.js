import { library } from './index';
import test from 'tape';

test('sample test', (t) => {
  t.equal(1, library());
  t.end();
});

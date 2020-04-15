import { library } from 'libraryTest';
import test from 'tape';

test('sample test', (t) => {
  t.equal(0, library());
  t.end();
});

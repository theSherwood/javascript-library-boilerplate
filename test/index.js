import { test_function, a_second_test_function } from '../src/index';
import test from 'tape';

test('test_function', (t) => {
  t.equal(1, test_function());
  t.end();
});

test('a_second_test_function', (t) => {
  t.equal(5, a_second_test_function(5));
  t.end();
});

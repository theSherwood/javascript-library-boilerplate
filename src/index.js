/*eslint no-unused-vars: "off"*/

/**
 * A test function that returns 1.
 *
 * @example
 * 1 === testFunction(); // true
 *
 * @param {*} [a_param] - Does nothing
 * @returns {Number} 1
 */
export function test_function(a_param) {
  return 1;
}

/**
 * A test function that returns its first argument.
 *
 * @example
 * 2 === a_second_test_function(2); // true
 *
 * @returns {*} The first argument passed to the function
 */
export function a_second_test_function(a_param) {
  return a_param;
}

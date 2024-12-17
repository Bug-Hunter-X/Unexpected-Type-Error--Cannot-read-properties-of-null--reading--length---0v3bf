function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-object cases
  }
  return x.length;
}
// Improved handling of different input types
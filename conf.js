exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  browser: ['chrome'],
  specs: ['test/todo-spec.js', 'test/spec.js']
};
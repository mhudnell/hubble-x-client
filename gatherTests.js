const testStore = require('../../dist/testStore-compiled.js');
console.log(require.resolve('../../dist/testStore-compiled.js'));

require('/Users/mhudnell/dev/test-react-app/viz-tests/Accordion.test.js');
require('/Users/mhudnell/dev/test-react-app/viz-tests/Card.test.js');

testStore.showTests();

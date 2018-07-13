const testStore = require('/Users/mhudnell/dev/test-react-app/node_modules/vizreg/dist/testStore-compiled.js');       //'../../../dist/testStore-compiled.js' '../../vizreg/dist/testStore-compiled.js'

// TODO: find and require user test files automatically
require('/Users/mhudnell/dev/test-react-app/viz-tests/Accordion.test.js');
require('/Users/mhudnell/dev/test-react-app/viz-tests/Card.test.js');
require('/Users/mhudnell/dev/test-react-app/viz-tests/OldTests.test.js');

let testData = testStore.getTests();  // returns all test info in a javascript object

export default testData;


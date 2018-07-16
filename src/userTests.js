const testStore = require('../../vizreg/dist/testStore-compiled.js');

// find and require all test files
let r = require.context('../../../viz-tests', true, /\.test\.js$/);
r.keys().forEach(r)

let testData = testStore.getTests();  // returns all test info in a javascript object

export default testData;


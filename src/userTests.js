const testStore = require('testStorePath'); // refers to an alias specified in webpack config

// find and require all test files
let r = require.context('usrTestsPath', true, /\.test\.js$/);
r.keys().forEach(r)

let testData = testStore.getTests();  // returns all test info in a javascript object

export default testData;


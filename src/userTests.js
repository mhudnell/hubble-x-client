const testStore = require('testStorePath'); // refers to an alias specified in webpack config

// find and require all test files
try {
  let r = require.context('usrTestsPath', true, /\.test\.js$/);
  r.keys().forEach(r)
} catch(err) {
  console.log("Can't resolve 'usrTestsPath': Make sure your test files are in a folder named 'hubble-tests' located in the root directory of your application.");
}

let testData = testStore.getTests();  // returns all test info in a javascript object

export default testData;


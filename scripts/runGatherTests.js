'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const webpack = require('webpack');
const MemoryFS = require('memory-fs'),
      memfs = new MemoryFS();
const paths = require('../config/paths');
const config = require('../config/webpackGatherTests.config');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const express = require('express'),
      app = express();


function bundleUserTests() {
  console.log('Bundling user tests...');
  // memfs.mkdirpSync(paths.appBuild);

  let compiler = webpack(config);
  // compiler.outputFileSystem = memfs;
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        warnings: messages.warnings,
      });
    });
  });
}

// this will go in a different file at some point
bundleUserTests().then( () => {
  console.log("Bundle created");
  //===== server from directory for testing
  app.use(express.static(paths.gatherTestsBuild));
  app.get('*', function (req, res) {
    res.sendFile(paths.gatherTestsBuildIndex);
  });


  let server = app.listen(4000);
  console.log("SERVING WITH EXPRESS");
})

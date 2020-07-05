const path = require('path');
const { equalValueChecks } = require('../../tests/utils/baseTestFramework.js');

const TEST_MAP = [
  {
    desc: 'should test javascript inside brackets',
    query: '[data-test="js-add-check"]',
    toEqual: String(11)
  },
  {
    desc: 'should test if reassignment of variable is possible',
    query: '[data-test="reassignment-check"]',
    toEqual: String(9)
  },
  {
    desc: 'should check if values can be required from json and js',
    query: '[data-test="require-check"]',
    toEqual: String(69)
  },
  {
    desc: 'should test if putting slash before bracket prints content as it is',
    query: '[data-test="comment-check"]',
    toEqual: '{{ print this as it is }}'
  }
];

describe('examples/main', () => {
  equalValueChecks(TEST_MAP, {
    exampleToRun: 'main',
    outPath: path.join(__dirname, 'out.html')
  });
});

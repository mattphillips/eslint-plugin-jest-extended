const toBeTrue = require('./rules/toBeTrue');

module.exports = {
  configs: {
    recommended: {
      rules: {
        'jest-extended/prefer-to-be-true': 'warn'
      }
    }
  },
  environments: {
    globals: {
      globals: {
        afterAll: false,
        afterEach: false,
        beforeAll: false,
        beforeEach: false,
        describe: false,
        expect: false,
        fit: false,
        it: false,
        jasmine: false,
        jest: false,
        pending: false,
        pit: false,
        require: false,
        test: false,
        xdescribe: false,
        xit: false,
        xtest: false
      }
    }
  },
  rules: {
    'prefer-to-be-true': toBeTrue
  }
};

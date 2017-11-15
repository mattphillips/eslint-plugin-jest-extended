const { RuleTester } = require('eslint');
const rule = require('./');

new RuleTester().run('prefer_to_be_false', rule, {
  valid: ['expect(false).toBeFalse();'],
  invalid: [
    {
      code: 'expect(false).toBe(false);',
      errors: [
        {
          message: 'Use toBeFalse() instead.',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(false).toBeFalse();'
    },
    {
      code: 'expect(false).toBeFalsy();',
      errors: [
        {
          message: 'Use toBeFalse() instead.',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(false).toBeFalse();'
    },
    {
      code: 'expect(true).toBe(false);',
      errors: [
        {
          message: 'Use toBeFalse() instead.',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(true).toBeFalse();'
    },
    {
      code: 'expect(varA).toBe(false);',
      errors: [
        {
          message: 'Use toBeFalse() instead.',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(varA).toBeFalse();'
    },
    {
      code: 'expect(varA, varB).toBe(false);',
      errors: [
        {
          message: 'Use toBeFalse() instead.',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(varA, varB).toBeFalse();'
    }
  ]
});

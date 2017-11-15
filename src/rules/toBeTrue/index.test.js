const { RuleTester } = require('eslint');
const rule = require('./');

new RuleTester().run('prefer_to_be_true', rule, {
  valid: ['expect(true).toBeTrue();'],
  invalid: [
    {
      code: 'expect(true).toBe(true);',
      errors: [
        {
          message: 'Use toBeTrue() instead',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(true).toBeTrue();'
    },
    {
      code: 'expect(true).toBeTruthy();',
      errors: [
        {
          message: 'Use toBeTrue() instead',
          column: 1,
          line: 1
        }
      ],
      output: 'expect(true).toBeTrue();'
    }
  ]
});

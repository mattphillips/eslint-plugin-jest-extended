const looksLike = require('../../utils/looks-like');

const isTrueIdentifier = a => !!a[0] && a[0].value === true;

module.exports = context => {
  return {
    ExpressionStatement(node) {
      const isToBeTruthy = looksLike(node, {
        expression: {
          callee: {
            object: {
              callee: {
                type: 'Identifier',
                name: 'expect'
              },
              arguments: isTrueIdentifier
            },
            property: {
              name: 'toBeTruthy'
            }
          }
        }
      });
      const isToBe = looksLike(node, {
        expression: {
          callee: {
            object: {
              callee: {
                type: 'Identifier',
                name: 'expect'
              },
              arguments: isTrueIdentifier
            },
            property: {
              name: 'toBe'
            }
          },
          arguments: isTrueIdentifier
        }
      });

      if (isToBeTruthy) {
        const fix = fixer => [fixer.replaceText(node.expression.callee.property, 'toBeTrue')];
        return context.report({ node, message: 'Use toBeTrue() instead.', fix });
      }

      if (isToBe) {
        const fix = fixer => [
          fixer.replaceText(node.expression.callee.property, 'toBeTrue'),
          fixer.remove(node.expression.arguments[0])
        ];
        return context.report({ node, message: 'Use toBeTrue() instead.', fix });
      }
    }
  };
};

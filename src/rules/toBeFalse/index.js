const looksLike = require('../../utils/looks-like');

const isFalseIdentifier = a => !!a[0] && a[0].value === false;

module.exports = context => {
  return {
    ExpressionStatement(node) {
      const isToBeFalsy = looksLike(node, {
        expression: {
          callee: {
            object: {
              callee: {
                type: 'Identifier',
                name: 'expect'
              },
              arguments: isFalseIdentifier
            },
            property: {
              name: 'toBeFalsy'
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
              arguments: isFalseIdentifier
            },
            property: {
              name: 'toBe'
            }
          },
          arguments: isFalseIdentifier
        }
      });

      if (isToBeFalsy) {
        const fix = fixer => [fixer.replaceText(node.expression.callee.property, 'toBeFalse')];
        return context.report({ node, message: 'Use toBeFalse() instead.', fix });
      }

      if (isToBe) {
        const fix = fixer => [
          fixer.replaceText(node.expression.callee.property, 'toBeFalse'),
          fixer.remove(node.expression.arguments[0])
        ];
        return context.report({ node, message: 'Use toBeFalse() instead.', fix });
      }
    }
  };
};

const { check, validationResult, oneOf } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.Validator = () => [
  check('descricao')
    .optional({ nullable: true }),
  check('custo')
    .notEmpty()
    .withMessage('Custo não informado')
    .isFloat()
    .withMessage('Adicione um número real'),
  check('tipo')
    .notEmpty()
    .withMessage('O tipo não foi informado')
    .isNumeric()
    .withMessage('O custo aceita somente numeros'),
  oneOf([
    check('tipo').equals('Regular'),
    check('tipo').equals('Irregular'),
  ], 'O tipo aceita somente Regular ou Irregular'),
];

const { check, validationResult } = require('express-validator');

exports.validateRequest = (req) => {
  const result = validationResult(req);
  return result.errors;
};

exports.registerValidator = () => [
  check('nomeFamilia')
    .notEmpty()
    .withMessage('Nome não informado')
    .isLength({min : 5})
    .withMessage('O campo nome deve conter pelo menos 5 caracteres')
    .isString()
    .withMessage('O campo nome recebe apenas letras'),
  check('endereco')
    .notEmpty()
    .withMessage('Endereço não informado')
    .isLength({ min:15 , max: 200 })
    .withMessage('O endereço deve conter entre 15-200 caracteres'),
  check('quantidadeMembros')
    .notEmpty()
    .withMessage('A quantidade de membros não foi informada')
    .isNumeric()
    .withMessage('A quantida de membros aceita somente numeros'),
  check('preferencial')
    .notEmpty()
    .withMessage('O campo Preferencial não foi informado')
    .isBoolean()
    .withMessage('O campo Preferencial aceita somente true ou false'),
  check('renda')
    .notEmpty()
    .withMessage('O campo Renda não foi informado')
    .isNumeric()
    .withMessage('O campo Renda aceita somente numeros'),
  check('status')
    .notEmpty()
    .withMessage('O status não foi informado')
    //.if('Status' !== 'Ativo' && 'Status' !== 'Inativo')
    //.withMessage('O status aceita somente Ativo ou Inativo')
];

exports.updateValidator = () => [
  check('endereco')
    .notEmpty()
    .withMessage('Endereço não informado')
    .isLength({ min:15 , max: 200 })
    .withMessage('O endereço deve conter entre 15-200 caracteres'),
  check('quantidadeMembros')
    .notEmpty()
    .withMessage('A quantidade de membros não foi informada')
    .isNumeric()
    .withMessage('A quantida de membros aceita somente numeros'),
  check('preferencial')
    .notEmpty()
    .withMessage('O campo Preferencial não foi informado')
    .isBoolean()
    .withMessage('O campo Preferencial aceita somente true ou false'),
  check('renda')
    .notEmpty()
    .withMessage('O campo Renda não foi informado')
    .isNumeric()
    .withMessage('O campo Renda aceita somente numeros')
];

exports.patchValidator = () => [
  check('status')
  .notEmpty()
  .withMessage('O status não foi informado')
  //.if(status !== 'Ativo' && status !== 'Inativo')
  //.withMessage('O status aceita somente Ativo ou Inativo')
];

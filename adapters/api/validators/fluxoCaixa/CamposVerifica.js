exports.updateFields = (body) => {
  if (!body) {
    return {};
  }
  const camposPermitidos = ['descricao', 'custo', 'tipo'];
  const bodyFinal = {};
  camposPermitidos.forEach((campo) => {
    bodyFinal[campo] = body[campo];
  });
  return bodyFinal;
};
exports.patchFields = (body) => {
  if (!body) {
    return {};
  }
  const bodyFinal = {};
  bodyFinal.status = body.status;
  return bodyFinal;
};
exports.createFields = (body) => {
  if (!body) {
    return {};
  }
  const camposPermitidos = ['id', 'descricao', 'custo', 'tipo'];
  const bodyFinal = {};
  camposPermitidos.forEach((campo) => {
    bodyFinal[campo] = body[campo];
  });
  return bodyFinal;
};
exports.allFields = (body) => {
  if (!body) {
    return {};
  }
  let dadosFiltrados = this.createFields(body);
  if (Array.isArray(body)) {
    dadosFiltrados = body.map((dado) => this.createFields(dado));
  }
  return dadosFiltrados;
};

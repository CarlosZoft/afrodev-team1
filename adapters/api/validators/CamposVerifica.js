class CamposVerifica {
  updateFields(body) {
    if (!body) {
      return {};
    }
    const camposPermitidos = ['endereco', 'quantidade_membros', 'preferencial', 'renda'];
    const bodyFinal = {};
    camposPermitidos.forEach((campo) => {
      bodyFinal[campo] = body[campo];
    });
    return this.bodyFinal;
  }

  patchFields(body) {
    if (!body) {
      return {};
    }
    const bodyFinal = {};
    bodyFinal.status = body.status;
    return this.bodyFinal;
  }

  createFields(body) {
    if (!body) {
      return {};
    }
    const camposPermitidos = ['nome_familia', 'endereco', 'quantidade_membros', 'preferencial', 'renda', 'status'];
    const bodyFinal = {};
    camposPermitidos.forEach((campo) => {
      bodyFinal[campo] = body[campo];
    });
    return this.bodyFinal;
  }

  allFields(body) {
    let dadosFiltrados = this.createFields(body);
    if (Array.isArray(body)) {
      dadosFiltrados = body.map((dado) => this.createFields(dado));
    }
    return dadosFiltrados;
  }
}
module.exports = CamposVerifica;

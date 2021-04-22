class CamposVerifica {
   
    updateFields(body) {
        var camposPermitidos = ['endereco', 'quantidade_membros', 'preferencial', 'renda'];
        var bodyFinal = {};
        camposPermitidos.forEach((campo) => {
            bodyFinal[campo] = body[campo]        
        });
        return bodyFinal;
    }

    patchFields(body) {
            var bodyFinal = {}
            bodyFinal['status'] = body['status'];
            return bodyFinal;
    }
    
    createFields(body) {
            const camposPermitidos = ['nome_familia', 'endereco', 'quantidade_membros', 'preferencial', 'renda', 'status'];
            var bodyFinal = {}
            camposPermitidos.forEach(campo => {

                bodyFinal[campo] = body[campo]
            })
            return bodyFinal;
    }
    
    allFields(body) {
        let dadosFiltrados = this.createFields(body)
            
        if(Array.isArray(body)){
            dadosFiltrados = body.map((dado) => {
                    return this.createFields(dado);
            })
        }
        return dadosFiltrados;
    }
}

module.exports = CamposVerifica;
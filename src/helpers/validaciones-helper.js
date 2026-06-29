class ValidacionesHelper {
    validarTexto = (valor, nombreCampo, minimo = 3) => {
        if (valor == null || valor.trim() === '') {
            throw new Error(`El campo ${nombreCampo} es obligatorio.`)
        }

        if (valor.trim().length < minimo) {
            throw new Error(`El campo ${nombreCampo} debe tener al menos ${minimo} letras.`)
        }
    }

    validarId = (id, nombreCampo = 'id') => {
        if (id == null || id === '' || isNaN(parseInt(id))) {
            throw new Error(`El campo ${nombreCampo} debe ser un numero valido.`)
        }
    }
}

export default new ValidacionesHelper()
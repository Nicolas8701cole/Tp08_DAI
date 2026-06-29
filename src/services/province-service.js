import ProvinceRepository from '../repositories/province-repository.js';
import ValidacionesHelper from '../helpers/validaciones-helper.js'
validarProvince = (entity) => {
    if (entity == null) {
        throw new Error('La provincia es obligatoria.')
    }

    ValidacionesHelper.validarTexto(entity.name, 'name', 3)
    ValidacionesHelper.validarTexto(entity.full_name, 'full_name', 3)
}

export default class ProvinceService {
    constructor() {
        console.log('Estoy en: ProvinceService.constructor()');
        this.ProvinceRepository = new ProvinceRepository();
    }
    getAllAsync = async () => {
        console.log(`ProvinceService.getAllAsync()`);
        const returnArray = await this.ProvinceRepository.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        console.log(`ProvinceService.getByIdAsync(${id})`)
        ValidacionesHelper.validarId(id)
        const returnEntity = await this.ProvinceRepository.getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {
        console.log(`ProvinceService.createAsync(${JSON.stringify(entity)})`);
        this.validarProvince(entity)
        const newId = await this.ProvinceRepository.createAsync(entity);
        return newId
        //Esto vincula con helper para autoponer id o validar que pueda ser
        //integrado o no esté duplicado o lo que sea
    }

    updateAsync = async (id) => {
        console.log(`ProvinceService.deleteByIdAsync(${id})`)
        this.validarProvince(id)
        const rowsAffected = await this.ProvinceRepository.updateAsync(id);
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
        console.log(`ProvinceService.deleteByIdAsync(${id})`);
        const rowsAffected = await this.ProvinceRepository.deleteByIdAsync(id);
        return rowsAffected;
    }
}
import ProvinceRepository from './src/repositories/province-repository.js'
const repo = new ProvinceRepository();
const provincias = await repo.getAllAsync();
console.log(provincias);


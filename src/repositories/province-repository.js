import pkg from 'pg'
import DBConfig from '../configs/db-config.js'

const { Pool } = pkg

export default class ProvinceRepository {
    constructor() {
        this.DBPool = null
    }

    getDBPool = () => {
        if (this.DBPool == null) {
            this.DBPool = new Pool(DBConfig)
        }

        return this.DBPool
    }

    getAllAsync = async () => {
        let returnArray = null

        try {
            const sql = 'select * from provinces order by display_order'

            const devolucion = await this.getDBPool().query(sql)
            returnArray = devolucion.rows
        } catch (error) {
            console.log(error)
        }

        return returnArray
    }
    getByIdAsync = async (id) => {
        let returnEntity = null

        try {
            const sql = 'select * from provinces where id = $1'
            const value = [id]

            const devolucion = await this.getDBPool().query(sql, value)
            if (devolucion.rows.length > 0) {
                returnEntity = devolucion.rows[0]
            }
        } catch (error) {
            console.log(error)
        }

        return returnEntity
    }

    createAsync = async (id) => {
        let newId = 0

        try {
            const sql = `insert into provinces
                        (name, full_name, latitude, longitude, display_order)
                     values
                        ($1, $2, $3, $4, $5)
                     returning id`;
            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];

            const devolucion = await this.getDBPool().query(sql, values)
            newId = devolucion.rows[0].id
        } catch (error) {
            console.log(error)
        }

        return newId
    }
    updateAsync = async (id) => {
        let rowsAffected = 0

        try {
            const sql = `update provinces
                        set name, full_name, latitude, longitude, display_order)
                     values
                        ($2, $3, $4, $5, $6)
                     where id = $1`;
            const values = [
                entity.name,
                entity.full_name,
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];

            const devolucion = await this.getDBPool().query(sql, values)
            rowsAffected = devolucion.rowCount;
        } catch (error) {
            console.log(error)
        }

        return rowsAffected
        //1 encontró y modifico, 0 no existía
    }
    deleteByIdAsync = async (id) => {
        let returnEntity = null

        try {
            const sql = 'delete * from provinces where id = $1'
            const value = [id]

            const devolucion = await this.getDBPool().query(sql, value)
            if (devolucion.rows.length > 0) {
                returnEntity = devolucion.rows[0]
            }
        } catch (error) {
            console.log(error)
        }

        return returnEntity
    }
}
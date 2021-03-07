import pool from '../config/db.js';

export default {
    allProducts: (callback) => {
        const query = `
        SELECT * FROM product
        `
        pool.query(
            query,
            [],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    },
    addProduct: (data,callback) => {
        const query = `
        INSERT INTO product(name) VALUES(?)
        `
        pool.query(
            query,
            [
                data.name
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    }
}
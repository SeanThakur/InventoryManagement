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
        INSERT INTO product(name, price) VALUES(?,?)
        `
        pool.query(
            query,
            [
                data.name,
                data.price,
            ],
            (err, result) => {
                if(err) {
                    return callback(err);
                }else {
                    return callback(null, result)
                }
            }
        )
    },
    editProduct: (data,callback) => {
        const query = `
        UPDATE product SET product.name = ?, product.price = ? WHERE product.id = ?
        `
        pool.query(
            query,
            [
                data.name,
                data.price,
                data.id,
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
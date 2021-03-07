import pool from '../config/db.js';

export default {
    allMovement: (callback) => {
        const query = `
        SELECT * FROM product_movement
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
    addMovement: (data,callback) => {
        const query = `
            INSERT INTO 
            product_movement(
                product_movement.qty, 
                product_movement.from_location, 
                product_movement.to_location, 
                product_movement.product_id
            ) VALUES(?,?,?,?)
        `
        pool.query(
            query,
            [
                data.qty,
                data.from,
                data.to,
                data.product_id
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
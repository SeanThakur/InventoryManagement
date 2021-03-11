import pool from '../config/db.js';

export default {
    allMovement: (callback) => {
        const query = `
            SELECT 
                product_movement.movement_id as id, 
                product_movement.qty, 
                product.name, 
                location.location_description, 
                product_movement.timestamp 
            FROM product_movement 
            JOIN product ON product.id = product_movement.product_id 
            JOIN location ON location.id = product_movement.location_id
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
            INSERT INTO product_movement(product_movement.qty, product_movement.product_id, product_movement.location_id) VALUES(?,?,?)
        `
        pool.query(
            query,
            [
                data.qty,
                data.product_id,
                data.location_id,
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
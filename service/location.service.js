import pool from '../config/db.js';

export default {
    addLocation: (data,callback) => {
        const query = `
        INSERT INTO location(location_description) VALUES(?)
        `
        pool.query(
            query,
            [
                data.from
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
    allLocation: (callback) => {
        const query = `
        SELECT * FROM location
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
    }
}
import pool from '../config/db.js';

export default {
    addLocation: (data,callback) => {
        const query = `
        INSERT INTO location(from_location, to_location) VALUES(?,?)
        `
        pool.query(
            query,
            [
                data.from,
                data.to,
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
import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_management',
    connectionLimit : 1000,
});

export default pool;
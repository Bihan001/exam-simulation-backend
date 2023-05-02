import e from 'express';
import mysql from 'mysql2/promise';
import { scheduleOnServerRestart } from '../utils/examFunctions';

let db: any;
const connectDatabase = async () => {
  db = await mysql.createConnection({
    host: 'quizzio-db-instance.cpr6f54gzlkx.us-east-1.rds.amazonaws.com',
    user: 'group_7',
    password: 'abarKHELAhobe7',
    port: 3306,
    database: 'examSimulation',
    multipleStatements: true, // Prevent nested sql statements
    connectTimeout: 60 * 60 * 1000,
    // debug: true,
  });
  if (db) {
    console.log('Database Connected !');
    scheduleOnServerRestart();
  } else console.log('Database Not Connected !');
};

const getDb = () => {
  return db;
};

export default db;
export { connectDatabase, getDb };

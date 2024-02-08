import knex from 'knex';
import dbConfig from '../knex';

export async function getAllPositionsController() {
 const connection = knex(dbConfig);
 try {
   const results = await connection('position').select('*');
   console.log(results);
   return results
 } catch (error) {
   console.error(error);
   return error
 }
}


getAllPositionsController();
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

 const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

//  created a sql connection using my env variables
 export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
 )

//  this sql function i exported is used as a tagged template literal, which allows me to write SQL queries safely
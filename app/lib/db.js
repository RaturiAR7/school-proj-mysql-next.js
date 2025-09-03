import mysql from "mysql2/promise";
import fs from "fs";
import path from "path";

export async function query({ query, values = [] }) {
  // Find the path to the certificate file
  const caCertPath = path.resolve("./ca.pem");

  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // SSL configuration for a secure connection to Aiven
    ssl: {
      ca: fs.readFileSync(caCertPath),
    },
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    // Log a more descriptive error
    console.error("Database Query Error:", error.message);
    throw new Error("Failed to execute database query.");
  }
}
export async function testConnection() {
  try {
    const result = await query({ query: "SELECT 1 + 1 AS test" });
    console.log("✅ Database connected successfully:", result);
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
}

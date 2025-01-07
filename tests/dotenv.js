import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

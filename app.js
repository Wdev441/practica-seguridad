// Código seguro: las credenciales se leen desde variables de entorno (.env)
const DB_USER = process.env.DB_USER || "usuario_por_defecto";
const DB_PASSWORD = process.env.DB_PASSWORD;

console.log("Conectando de forma segura a la base de datos con el usuario:", DB_USER);

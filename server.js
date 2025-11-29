import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

// Configurar dotenv primero
dotenv.config();

// Verificar que las variables de entorno estén cargadas
console.log('Variables de entorno:', {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});

// Validar variables requeridas
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  throw new Error(`Faltan variables de entorno: ${missingVars.join(', ')}`);
}

// Crear conexión con manejo de errores
try {
  const conn = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  console.log('✅ Conexión a la base de datos establecida');
} catch (error) {
  console.error('❌ Error conectando a la base de datos:', error.message);
}
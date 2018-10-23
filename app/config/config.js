module.exports = {
  logging: false,
  database: process.env.DB_DATABASE || 'jobseek',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: true,
    paranoid: true,
    underscores: false,
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  }

}

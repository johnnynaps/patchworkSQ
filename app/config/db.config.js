module.exports = {
  HOST: "patchwork.czcsky1pfuhv.us-east-2.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "patchwork123?",
  DB: "patchwork",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
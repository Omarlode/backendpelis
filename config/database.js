/* module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "ec2-34-246-227-219.eu-west-1.compute.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "df0rauconnuovn"),
      user: env("DATABASE_USERNAME"),
      password: env(
        "DATABASE_PASSWORD",
        "60f7cab45cb7c43ab67e68f06f0304d23dca46b67d616ecc6dea6cc39a0c8e7d"
      ),
      ssl: env.bool("DATABASE_SSL_SELF", false),
    },
  },
}); */
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
});

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'localhost'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'railwaytest'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '123456'),
      ssl: env.bool(true),
    },
    pool: { min: 0 }
  },
});

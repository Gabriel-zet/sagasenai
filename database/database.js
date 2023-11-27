const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '8187',
      database : 'senai',
      typeCast: function(field, next) {
        if (field.type == 'BIT' && field.length == 1) {
          const bytes = field.buffer();
          return bytes[ 0 ] === 1;
        }
        return next();
      }
    },
  });

  module.exports = knex;
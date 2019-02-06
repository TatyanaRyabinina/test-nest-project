'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        firstName: 'User',
        lastName: 'User',
        email: 'admin@yojji.io',
        password: '12345',
        role: 'admin',
      },
      {
        firstName: 'Super',
        lastName: 'User',
        email: 'super-admin@yojji.io',
        password: 'superpass',
        role: 'super-admin',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User');
  },
};

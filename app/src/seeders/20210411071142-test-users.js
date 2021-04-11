'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'users',
      [
        {name: 'Kazunari', createdAt: now, updatedAt: now},
        {name: 'Miki', createdAt: now, updatedAt: now},
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

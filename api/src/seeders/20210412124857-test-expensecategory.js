'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'expensecategories',
      [
        {name: '食費', createdAt: now, updatedAt: now},
        {name: '交際費', createdAt: now, updatedAt: now},
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('expensecategories', null, {});

  }
};

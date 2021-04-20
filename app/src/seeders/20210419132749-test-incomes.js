'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'incomes',
      [
        {date: now, userId: 4, categoryId:1, amount: 1000, note: 'お昼', createdAt: now, updatedAt: now},
        {date: now, userId: 1, categoryId:3, amount: 590, note: '電車', createdAt: now, updatedAt: now},
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('incomes', null, {});
  }
};

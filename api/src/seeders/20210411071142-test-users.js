'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'users',
      [
        {name: 'Kazunari', createdAt: now, updatedAt: now},
        {name: 'Miki', createdAt: now, updatedAt: now},
      ],
      'incomecategories',
      [
        {name: '給与', createdAt: now, updatedAt: now},
        {name: '臨時収入', createdAt: now, updatedAt: now},
      ],
      
      'incomes',
      [
        {date: now, userId:0, categoryId:0, amount:1000, createdAt: now, updatedAt: now},
        {date: now, userId:1, categoryId:1, amount:1000, note:'飲み会', createdAt: now, updatedAt: now},
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Campuses",
            [
                {
                    name: "Valdivia",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Bangor",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Chatillon",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Filacciano",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    },
};

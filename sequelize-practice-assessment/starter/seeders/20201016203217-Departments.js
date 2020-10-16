"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "People",
            [
                {
                    name: "Economics",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Mathematics",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                { name: "Music", createdAt: new Date(), updatedAt: new Date() },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    },
};

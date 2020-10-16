"use strict";
module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define(
        "Person",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {}
    );
    Person.associate = function (models) {
        const columnMapping = {
            through: "Enrollments",
            otherKey: "courseId",
            foreignKey: "personId",
        };
        Person.belongsToMany(models.Course, columnMapping);
    };
    return Person;
};

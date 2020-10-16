"use strict";
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define(
        "Department",
        {
            name: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        {}
    );
    Department.associate = function (models) {
        // associations can be defined here
    };
    return Department;
};

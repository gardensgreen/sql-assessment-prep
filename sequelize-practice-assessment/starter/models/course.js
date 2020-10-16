"use strict";
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        "Course",
        {
            name: DataTypes.STRING,
            level: DataTypes.INTEGER,
            campusId: DataTypes.INTEGER,
            departmentId: DataTypes.INTEGER,
        },
        {}
    );
    Course.associate = function (models) {
        const columnMapping = {
            through: "Enrollments",
            otherKey: "personId",
            foreignKey: "courseId",
        };
        Course.belongsToMany(models.Person, columnMapping);

        Course.belongsTo(models.Campus, { foreignKey: "campusId" });

        Course.belongsTo(models.department, { foreignKey: "departmentId" });
    };
    return Course;
};

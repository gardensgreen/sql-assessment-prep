const { Person, Course } = require("../models");

async function lookupPersonAndCourses(personId) {
    // Find person and associated courses by `personId`
    let person = await Person.findByPk(personId, {
        include: Course,
    });

    return person;
}

async function lookupPersonByLastName(lastName) {
    // Find people by `lastName`
    let people = await Person.findAll({
        where: { lastName: lastName },
    });

    return people;
}

async function lookupCoursesByPersonEmail(email) {
    // Find person by `email` and return associated courses

    let people = await Person.findAll({
        where: { email: email },
        include: Course,
    });

    return people[0].Courses;
}

module.exports = {
    lookupPersonAndCourses,
    lookupPersonByLastName,
    lookupCoursesByPersonEmail,
};

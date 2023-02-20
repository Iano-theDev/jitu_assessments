"use strict";
// Class of developer with properties and a private constructor
// that gives th property value
class Developer {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }
    static createDeveloper(name, skills) {
        return new Developer(name, skills);
    }
}
const Iano = Developer.createDeveloper("Ian Kamande", ["JavaScript", "TypeScript"]);
console.log(Iano.name);
const anotherDev = Developer.createDeveloper("Mr. Statistic", ["go-lang", "scala", "R"]);
console.log(anotherDev.skills);

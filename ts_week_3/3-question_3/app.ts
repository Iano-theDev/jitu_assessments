// Class of developer with properties and a private constructor
// that gives th property value

class Developer {
    name: string;
    skills: string[];

    private constructor(name: string, skills: string[]) {
        this.name = name;
        this.skills = skills;
    }

    static createDeveloper(name: string, skills: string[]): Developer {
        return new Developer(name, skills);
    }
}

const Iano = Developer.createDeveloper("Ian Kamande", ["JavaScript", "TypeScript"]);
console.log(Iano.name);

const anotherDev = Developer.createDeveloper("Mr. Statistic", ["go-lang", "scala", "R"]);
console.log(anotherDev.skills)

// CODE here for your Lambda Classes
class Person {
    constructor(stat){
        this.name = stat.name;
        this.age = stat.age;
        this.location = stat.location;
        this.gender = stat.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
class Instructor extends Person {
    constructor(stat){
        super(stat);
        this.specialty = stat.specialty;
        this.favLanguage = stat.favLanguage;
        this.catchPhrase = stat .catchPhrase;
    }
    demo() {
        console.log(`Today we are learning about ${this.subject}`)
    }
}
class Student extends Person {
    constructor(stat) {
        super(stat);
        this.className = stat.className;
        this.favSubjects = stat.favSubjects;
    }
    listsSubjects() {

    }
    PRAssignment() {

    }
    sprintChallenge() {

    }
}
class ProjectManager extends Instructor {
    constructor(stat) {
        super(stat);
        this.gradClassName = stat.gradClassName;
        this.favInstructors = stat.favInstructors;
    }
    standUp() {

    }
    debugsCode() {
        
    }
}
// CODE here for your Lambda Classes
"use strict"
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
        this.subject = stat.subject;
    }
    demo(subject) {
        return `Today we are learning about ${this.subject}`
    }
    grade(Student) {
        return `${Student.name} recieves a perfect score on ${this.subject}.`;
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
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: `Science`
  });
  const joe = new Instructor({
    name: 'Joe',
    location: 'Your Moms House',
    age: 29,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I forgot`,
    subject: `Math`
  });
  const kyile = new Instructor({
    name: 'kyile',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: `Hystory`
  });
  const billy = new Student({
      name: 'Billy Bob Thortain',
      location: 'The Hills',
      age: 4,
      gender: 'male',
      className: 'Unibrows',
      favSubjects:[ 
        'History',
        'Math',
        'Naptime'
      ]
  });
  const silly = new Student({
    name: 'Silly Bob Thortain',
    location: 'The Hills',
    age: 4,
    gender: 'male',
    className: 'Unibrows',
    favSubjects:[ 
      'History',
      'Math',
      'Naptime'
    ]
});
const shrilly = new Student({
    name: 'Shrilly Bob Thortain',
    location: 'The Hills',
    age: 4,
    gender: 'female',
    className: 'Unibrows',
    favSubjects:[ 
      'History',
      'Math',
      'Naptime'
    ]
});
const kyle = new ProjectManager({
    name: 'Kyle',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: `Hystory`
  });
  const penelope = new ProjectManager({
    name: 'Penelope',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: `Math`
  });
  const hailey = new ProjectManager({
    name: 'Hailey',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: `Science`
  });

    

  
  console.log(fred.speak());
  console.log (fred.demo());
  console.log(fred.grade(billy));
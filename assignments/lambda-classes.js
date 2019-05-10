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
        return `Today we are learning about ${subject}`
    }
    grade(Student,subject) {
        return `${Student.name} recieves a perfect score on ${subject}.`;
    }
}
class Student extends Person {
    constructor(stat) {
        super(stat);
        this.className = stat.className;
        this.favSubjects = stat.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;

    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;

    }
}
class ProjectManager extends Instructor {
    constructor(stat) {
        super(stat);
        this.gradClassName = stat.gradClassName;
        this.favInstructors = stat.favInstructors;
    }
    standUp(slackCh) {
        return `${this.name} announces to ${slackCh}, @channel standy times!`;
    }
    debugsCode(Student,subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
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
  });
  const kyile = new Instructor({
    name: 'kyile',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });
  const billy = new Student({
      name: 'Billy Bob Thortain',
      location: 'The Hills',
      age: 4,
      gender: 'male',
      className: 'Unibrows',
      favSubjects:[ 
        'History ',
        'Math ',
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
    gradClassName: 'fedora',
    favInstructors: 'kylie'
  });
  const penelope = new ProjectManager({
    name: 'Penelope',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'fedora',
    favInstructors: 'kylie'
  });
  const hailey = new ProjectManager({
    name: 'Hailey',
    location: 'Grub',
    age: 24,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'fedora',
    favInstructors: 'kylie'
  });

    

  
  console.log(fred.speak());
  console.log (fred.demo("Science"));
  console.log(fred.grade(billy,"Math"));
  console.log(billy.listsSubjects());
  console.log(silly.PRAssignment("Math"));
  console.log(shrilly.sprintChallenge("Science"))
  console.log(hailey.standUp("thesbians"))
  console.log(penelope.debugsCode(billy, "Maths"))

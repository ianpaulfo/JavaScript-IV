// CODE here for your Lambda Classes

class Person {
  constructor(props) {
      this.name = props.name;
      this.age = props.age;
      this.location = props.location;
  }
  speak() {
      return `Hello my name is ${this.name}, i am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(INSprops) {
      super(INSprops);
      this.specialty = INSprops.specialty;
      this.favLanguage = INSprops.favLanguage;
      this.catchPhrase = INSprops.catchPhrase;
      this.subject = INSprops.subject;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}.`;
  }
}

// add instructors -----------------------------------------------------------
const Jenny = new Instructor({
name: "Jenny",
age: 36,
location: "Florida",
gender: "Female",
specialty: "Front-End",
favLanguage: "CSS",
catchPhrase: "Time to code",
subject: "Flex Box"
});

const Raul = new Instructor({
name: "Raul",
age: 40,
location: "Arkansas",
gender: "Male",
specialty: "Back-End",
favLanguage: "Ruby",
catchPhrase: "Hello friends",
subject: "DOM I"
});

class Student extends Person {
  constructor(STDprops) {
    super(STDprops);
    this.prevBackground = STDprops.background;
    this.className = STDprops.className;
    this.favSubjects = STDprops.favSubjects;
  }
  listSubs() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(
        `One of ${this.name}'s favorite subject is ${this.favSubjects[i]}.`
      );
    }
  }
  PRAssignments(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}


// add Students------------------------------------------------
const Cristina = new Student({
name: "Cristina",
age: 21,
location: "North Carolina",
gender: "Female",
background: "Factories",
className: "CSS II",
favSubjects: ["CSS", "Java", "Python"]
});

const Stanly = new Student({
name: "Stanly",
age: 30,
location: "Arizona",
gender: "Male",
background: "Social Work",
className: "JavaScript III",
favSubjects: ["CSS", "Javascript", "React"]
});


class ProjectManagers extends Instructor {
  constructor(PMprops) {
    super(PMprops);
    this.gradClassName = PMprops.gradClass;
    this.favInstructor = PMprops.favInstructor;
  }

  standup(channel) {
    return `${this.name} announces to ${channel} @channel standy times!`;
  }
  debugsCode(students, subject) {
    return `${this.name} debugs ${students.name}'s code on ${subject}.`;
  }
}

const Daniel = new ProjectManagers({
name: "Daniel",
age: 26,
location: "South Dakota",
gender: "Male",
specialty: "Front-End",
favLanguage: "JavaScript",
catchPhrase:
  "Attendance! Please leave a unique emoji so I know you are here!",
gradClass: "Whatevs",
favInstructor: "Dan"
});

const Susan = new ProjectManagers({
name: "Susan",
age: 35,
location: "Maryland",
gender: "Female",
specialty: "Back-End",
favLanguage: "Ruby",
catchPhrase: "Hey team! Whats up!!",
gradClass: "Whatever",
favInstructor: "Josh"
});


console.log(Jenny.demo("flexbox"));
console.log(Raul.grade(Cristina, "CSS II"));
console.log(Daniel.standup("PT11"));
console.log(Susan.debugsCode(Stanly, "JS III"));
console.log(Stanly.PRAssignments("React"));
console.log(Cristina.sprintChallenge("CSS"));


// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow extra properties
}

// Extend Teacher to create Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Step 1: Define the function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Step 2: Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Step 3: Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Step 1: Define constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Step 2: Define class behavior interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Step 3: Implement the class
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Step 4: Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName());      // Output: John
console.log(student.workOnHomework());  // Output: Currently working

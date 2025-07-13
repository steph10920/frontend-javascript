// Step 1: Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Step 2: Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Mombasa',
};

// Step 3: Put the students in an array
const studentsList: Student[] = [student1, student2];

// Step 4: Create an HTML table
const table = document.createElement('table');
table.border = '1';
table.style.marginTop = '20px';
table.style.borderCollapse = 'collapse';

// Create table header
const headerRow = table.insertRow();
const nameHeader = headerRow.insertCell();
const locationHeader = headerRow.insertCell();
nameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';
nameHeader.style.fontWeight = 'bold';
locationHeader.style.fontWeight = 'bold';

// Add each student as a row
studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);

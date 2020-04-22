import React, { useState } from 'react';
import NewStudentForm from './components/NewStudentForm';
import StudentCollection from './components/StudentCollection';
import './App.css';


const students = [
  {
    id: 1,
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
    present: true,
  },
  {
    id: 2,
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
    present: false,
  },
];

function App () {
  console.log('rendering');
  const [studentList, setStudentList] = useState(students);

  const updateStudent = (updatedStudent) => {
    const students = [];

    studentList.forEach((student) => {
      if (student.id === updatedStudent.id) {
        students.push(updatedStudent);
      } else {
        students.push(student);
      }
    });

    setStudentList(students);
  };

  const addStudent =(student)=>{
    const newStudents = [...students];
    const nextID = Math.max(...newStudents.map((student)=>student.id)) + 1;

    newStudents.push({
      //...student
      fullName:student.fullName,
      email:student.email,

      id:nextID,
      present:false,
    })

    setStudentList(newStudents);

  }
 

  return (
    <div className="App">
      <StudentCollection students={studentList} onUpdateStudent={updateStudent} />
      <NewStudentForm onSubmitCallBack={addStudent}/>
    </div>
   
  );
}

export default App;

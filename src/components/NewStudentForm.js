import React, {useState} from 'react';
import './NewStudentForm.css';
import PropTypes from 'prop-types';

const NewStudentForm = (props)=>{

  const [student,setStudent] = useState({
    fullName:'',
    email:'',
  });


  const onNameChange = (event) =>{

    const newStudent = {
      ...student,
      fullName: event.target.value,
    }
    setStudent(newStudent);

  };

  const onEmailChange = (event) =>{
    const newStudent = {
      ...student,
      email:event.target.value,
    }

    setStudent(newStudent);

  };

  const onFormSubmit =(event)=>{
    event.preventDefault();
    props.onSubmitCallBack(student);

    if(student.fullName!== '' && student.email!==''){
      setStudent({
        fullName:"",
        email:"",});
    };


  }

  return(
    <form className="new-student-form" onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input 
        name="fullName"
        value={student.fullName}
        onChange = {onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email"
        value ={student.email}
        onChange={onEmailChange}
        />
      </div>
      <input
        type="submit"
        value="Add Student"
      />
    </form>
  );
};

NewStudentForm.propTypes = {
  onSubmitCallBack:PropTypes.func.isRequired,
}

export default NewStudentForm;
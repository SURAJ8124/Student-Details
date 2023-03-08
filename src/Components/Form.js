import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useRef } from 'react';


const Form = ({ onAdd }) => {

  // <td>{student.stud_name}</td>
  // <td>{student.stud_phone}</td>
  // <td>{student.stud_email}</td>
  // <td>{student.stud_gender}</td>
  // <td>{student.stud_div}</td>
  // <td>{student.stud_classs}</td>
  // <td>{student.stud_dob}</td>
  // state varibles for set the value of input fields
  const [stud_name, setStud_name] = useState('')
  const [stud_classs, setStud_classs] = useState('')
  const [stud_div, setStud_div] = useState('')
  const [stud_gender, setStud_gender] = useState('');
  const [stud_dob, setStud_dob] = useState('')
  const [stud_email, setStud_email] = useState('')
  const [stud_phone, setStud_phone] = useState('')


  const formRef = useRef(null);
  function handleReset() {
    console.log(formRef, "formref")
    formRef.current.reset();
    setStud_name('')
    setStud_classs("")
    setStud_dob("")
    setStud_div('')
    setStud_email('')
    setStud_gender('')
    setStud_phone('')
  }
  // submit  function
  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ stud_name, stud_classs, stud_div, stud_gender, stud_dob, stud_email, stud_phone })
    setStud_name('')
    setStud_classs("")
    setStud_dob("")
    setStud_div('')
    setStud_email('')
    setStud_gender('')
    setStud_phone('')
  }


  return (
    <>
      <form onSubmit={onSubmit} ref={formRef} >
        {/* first student input field */}
        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <div className='col-4'>
              <lable >Student Name :</lable></div>
            <div className='col-5'>
              <input className='text-field'
                type="text"
                placeholder='Student Name'
                value={stud_name}
                onChange={(e) => setStud_name(e.target.value)} />
            </div>
            <div className='col-1' >   </div>
          </div>
        </div>


        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <div className='col-4'>
              <label >Select a class :</label>
            </div>
            <div className='col-5'>
              <select className='text-field-class'
                id="s_class"
                value={stud_classs}
                onChange={(event) => setStud_classs(event.target.value)} >
                <option value="" >Select a class</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
              </select>
            </div>
            <div className='col-1' >   </div>
          </div>
        </div>



        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <label className='col-4'>Select  division:</label>
            <div className='col-5'>
              <select
                className='text-field-division'
                id="division-select" name="division"
                value={stud_div}
                onChange={(e) => setStud_div(e.target.value)}>
                <option value="">Select a division</option>
                <option value="A">Division A</option>
                <option value="B">Division B</option>
                <option value="C">Division C</option>
                <option value="D">Division D</option>
              </select>
            </div>
            <div className='col-1' >   </div>
          </div>
        </div>



        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <label className='col-4'>Select  gender:</label>
            <div className='col-5'>
              <select
                className='text-field-gender'
                id="gender"
                value={stud_gender}
                onChange={(event) => setStud_gender(event.target.value)}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className='col-1'></div>
          </div>
        </div>



        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <lable className='col-4' >Date of birth :</lable>
            <div className='col-5'>
              <input
                value={stud_dob}
                onChange={(e) => setStud_dob(e.target.value)}
                className='text-field-division'
                type="date"
                placeholder='Date of birth' /></div>
            <div className='col-1'></div>
          </div>
        </div>



        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <lable className='col-4'>Email Address :</lable>
            <div className='col-5'>
              <input
                className='text-field'
                type="email"
                placeholder='Email Address'
                value={stud_email}
                onChange={(e) => setStud_email(e.target.value)}
              /></div>
            <div className='col-1'></div>
          </div>
        </div>




        <div className='container-fluid mt-3'>
          <div className="row">
            <div className='col-1'></div>
            <lable className='col-4'>Phone No :</lable>
            <div className='col-5'>
              <input
                className='text-field'
                value={stud_phone}
                onChange={(e) => setStud_phone(e.target.value)}
                type="text"
                placeholder='Phone No' />
            </div>
            <div className='col-1'></div>
          </div>
        </div>


        <button type="submit" value="Submit" className='button'>Submit</button>
        <button type="reset" value="Reset" className='button' onClick={handleReset}>Cancel</button>
      </form>

    </>
  )
}

export default Form
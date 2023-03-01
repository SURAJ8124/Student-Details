import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState,useRef } from 'react';


const Form = ({ onAdd }) => {
 
  // state varibles for set the value of input fields
  const [student, setStudent] = useState('')
  const [s_class, setS_class] = useState('')
  const [div, setDiv] = useState('')
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')


  const formRef = useRef(null);
  function handleReset() {
    console.log(formRef,"formref")
    formRef.current.reset();
    setStudent('')
    setS_class("")
    setDate('')
    setDiv('')
    setEmail('')
    setGender('')
    setPhone_number('')
  }
   // submit  function
  const onSubmit = (e) => {
    e.preventDefault()
    onAdd({ student, s_class, div, gender, date, email, phone_number })
    setStudent('')
    setS_class("")
    setDate('')
    setDiv('')
    setEmail('')
    setGender('')
    setPhone_number('')
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
                value={student}
                onChange={(e) => setStudent(e.target.value)} />
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
              <select   className='text-field-class'
                id="s_class"
                value={s_class}
                onChange={(event) => setS_class(event.target.value)} >
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
            <label for="division-select" className='col-4'>Select  division:</label>
              <div className='col-5'>
            <select 
           className='text-field-division'
            id="division-select" name="division" 
            value={div}
              onChange={(e) => setDiv(e.target.value)}>
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
            <label for="gender-select" className='col-4'>Select  gender:</label>
            <div  className='col-5'>
            <select
              className='text-field-gender'
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}>
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
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
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
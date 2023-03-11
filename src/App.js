import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import Heading from './Components/Heading';
import Form from './Components/Form';
import Data from './Components/Data';
import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [foundNames, setFoundNames] = useState([]);
  const [students, setStudents] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    fetchData();
  }, [students]);



  const fetchData = () => {
    fetch("http://localhost:8080/api/students")
      .then(response => response.json())
      .then(json => {
        setStudents(json)
      })
      .catch(e => {
        console.log("error", e)
      })

  };




  const addForm = (obj) => {
    console.log(obj, "obj")
    const stud_id = Math.floor(Math.random() * 10000) + 1
    console.log(stud_id, "id")
    const newObj = { stud_id, ...obj }
    console.log(newObj, "newObj")
    fetch(`http://localhost:8080/api/students`, {
      method: 'POST',
      headers: {
        'Acceptt': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    }).then((resp) => {
      console.log(resp, "resp")
    })
    fetchData();
  }





  const deleteStudent = (id) => {
    fetch(`http://localhost:8080/api/students/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => {
      })
    fetchData();
  }

  const onClick = () => {
    setShow(!show)
  }

  const handleSearch = (e) => {

    if (e.target.value === '') {
      setStudents(foundNames)
    }
    else {
      const filterResult = foundNames.filter(
        item => item.email.toLowerCase().includes(e.target.value.toLowerCase())
          || item.name.toLowerCase().includes(e.target.value.toLowerCase())
          || item.gender.toLowerCase().includes(e.target.value.toLowerCase())
          || item.div.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setStudents(filterResult)
    }
    setSearchValue(e.target.value)
    console.log(e.target.value, "value2")
  };
  return (
    <>
      <div className='main'>
        <Container>
          <Row>
            {!show && <Col>
              <div className='second-box'>
                <Heading heading='Student Details' />
                <button onClick={onClick} className="show-button">show details</button>
                <Form onAdd={addForm} />
              </div>
            </Col>}
            {show && <Col>
              <div className='second-box'  >
                <Heading heading='Student data' />
                <button onClick={onClick} className="show-button">show details</button>
                {students.length > 0 ? <Data students={students} onDelete={deleteStudent}
                  searchValue={searchValue} handleSearch={handleSearch} /> : "No Data"}
              </div>
            </Col>}
          </Row>
        </Container>
      </div>

    </>
  );
}

export default App;

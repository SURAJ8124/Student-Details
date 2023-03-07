import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import Heading from './Components/Heading';
import Form from './Components/Form';
import Data from './Components/Data';
import React, { useState, useEffect } from 'react';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [foundNames, setFoundNames] = useState([]);
  const [students, setStudents] = useState([])

  useEffect(() => {
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

    fetchData();
  }, []);
  console.log(students, "data")

  const addForm = (obj) => {
    console.log(obj, "obj")
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id, "id")
    const newObj = { id, ...obj }
    setStudents([...students, newObj])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id))
  }


  const handleSearch = (e) => {
    console.log(e.target.value, "value1")

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
            <Col>
              <div className='first-box'>
                <Heading heading='Student Details' />
                <Form onAdd={addForm} />
              </div>
            </Col>
            <Col>
              <div className='second-box'  >
                <Heading heading='Admin data' />
                {students.length > 0 ? <Data students={students} onDelete={deleteStudent}
                  searchValue={searchValue} handleSearch={handleSearch} /> : "No Data"}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default App;

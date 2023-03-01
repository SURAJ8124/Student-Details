import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import Heading from './Components/Heading';
import Form from './Components/Form';
import Data from './Components/Data';
import { useState } from 'react';


function App() {

  const [searchValue, setSearchValue] = useState('');
  const [foundNames, setFoundNames] = useState([]);
  const [students,setStudents]=useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      gender: 'male',
      div: 'A',
      classs: '10th',
      dob: '1999-01-01'
      
    },
    {
      id:2,
      name: 'Jane Doe',
      phone: '555-555-5555',
      email: 'jane.doe@example.com',
      gender: 'female',
      div: 'B',
      classs: '12th',
      dob: '2001-02-15'
    },
    {  id:3,
      name: 'Bob Smith',
      phone: '555-123-4567',
      email: 'bob.smith@example.com',
      gender: 'male',
      div: 'C',
      classs: '11th',
      dob: '2000-05-20'
    },
    { id:4,
      name: 'Alice Jones',
      phone: '123-555-7890',
      email: 'alice.jones@example.com',
      gender: 'female',
      div: 'A',
      classs: '10th',
      dob: '2002-08-10'
    },
    {
      id:5,
      name: 'David Lee',
      phone: '555-789-1234',
      email: 'david.lee@example.com',
      gender: 'male',
      div: 'B',
      classs: '11th',
      dob: '2003-03-25'
    },
    {  id:6,
      name: 'Emily Chen',
      phone: '555-321-4567',
      email: 'emily.chen@example.com',
      gender: 'female',
      div: 'C',
      classs: '12th',
      dob: '2001-11-17'
    },
    {  id:7,
      name: 'Frank Wang',
      phone: '123-789-5555',
      email: 'frank.wang@example.com',
      gender: 'male',
      div: 'A',
      classs: '10th',
      dob: '2004-02-06'
    },
    {   id:8,
      name: 'Grace Kim',
      phone: '555-789-4567',
      email: 'grace.kim@example.com',
      gender: 'female',
      div: 'B',
      classs: '11th',
      dob: '2002-05-12'
    },
    {  id:9,
      name: 'Henry Park',
      phone: '555-123-7890',
      email: 'henry.park@example.com',
      gender: 'male',
      div: 'C',
      classs: '12th',
      dob: '2000-12-31'
    },
    { 
      id:10,
      name: 'Isabella Davis',
      phone: '123-456-5555',
      email: 'isabella.davis@example.com',
      gender: 'female',
      div: 'A',
      classs: '10th',
      dob: '2003-09-22'
    },
    {  id:11,
      name: 'Jack Brown',
      phone: '555-456-1234',
      email: 'jack.brown@example.com',
      gender: 'male',
      div: 'B',
      classs: '11th',
      dob: '2001-07-04'
    },
    {  id:12,
      name: 'Kelly Johnson',
      phone: '555-789-3210',
      email: 'kelly.johnson@example.com',
      gender: 'female',
      div: 'C',
      classs: '11th',
      dob: '2001-07-04'
    } 

  ])

  
  const addForm=(obj)=>{
   console.log(obj,"obj")
   const id =Math.floor(Math.random()*10000)+1
   console.log(id,"id")
   const newObj={id,...obj}
   setStudents([...students,newObj])
  }

  const deleteStudent=(id)=>{
    setStudents(students.filter((student)=>student.id!==id))
  }


  const handleSearch = (e) => {
    if(e.target.value===''){
      setStudents(foundNames)
    }
    else{
      const filterResult= foundNames.filter(item=> item.email.toLowerCase().includes(e.target.value.toLowerCase())||  item.author.toLowerCase().includes(e.target.value.toLowerCase())
       ||item.text.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setStudents(filterResult)   
    }
    setSearchValue(e.target.value)
  };
  return (
   <>
    <div>
      <Container fluid>
        <Row>
          <Col>
      <div className='first-box'>
        <Heading heading='Student Details'/>
        <Form onAdd={addForm}/>
   </div>
   </Col>
   <Col>
   <div className='second-box'  >
    <Heading  heading='Admin data'/>
   { students.length>0?<Data students={students} onDelete={deleteStudent} searchValue={searchValue}handleSearch={handleSearch}/>:"No Data"}
   </div>
   </Col>
   </Row>
      </Container>
    
    </div>

   </>
  );
}

export default App;

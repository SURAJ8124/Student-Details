import React from 'react'
import Table from 'react-bootstrap/Table';
import {FaTimes} from 'react-icons/fa'

const Data = ({students,onDelete,handleSearch,searchValue}) => {
    
  return (
    <>

{/* <input className='new' type="search" placeholder='Search' value={searchValue}onChange={handleSearch}></input> */}
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>phone</th>
          <th>email</th>
          <th>gender</th>
          <th>div</th>
          <th>classs</th>
          <th>dob</th>
        </tr>
      </thead>
      {students.map(student => (
          <tr key={student.email} style={{backgroundColor:'rgba(167, 111, 63, 0.9)'}}>
            <td>{student.name}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.gender}</td>
            <td>{student.div}</td>
            <td>{student.classs}</td>
            <td>{student.dob}</td>
           {/* <td> <FaTimes style ={{ size:20,  color:'red', cursor:'pointer'}} onClick={()=>onDelete(student.id)}/></td>  */}
           <td><button type="button" class="btn" style={{backgroundColor:'#d11a2a'}} onClick={()=>onDelete(student.id)}>Delete</button>
</td>
          </tr>
        ))}
    </Table>
    
    </>
  )
}

export default Data
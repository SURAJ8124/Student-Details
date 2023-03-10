import React from 'react'
import Table from 'react-bootstrap/Table';

const Data = ({ students, onDelete, handleSearch, searchValue }) => {

  return (
    <>
      {/* <input className='new' type="search" placeholder='Search' value={searchValue} onChange={handleSearch}></input> */}
      <Table striped bordered hover size="sm">
        <thead className="tables">
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
          <tr key={student.stud_id} className="tables">
            <td>{student.stud_name}</td>
            <td>{student.stud_phone}</td>
            <td>{student.stud_email}</td>
            <td>{student.stud_gender}</td>
            <td>{student.stud_div}</td>
            <td>{student.stud_classs}</td>
            <td>{student.stud_dob}</td>
            {/* <td> <FaTimes style ={{ size:20,  color:'red', cursor:'pointer'}} onClick={()=>onDelete(student.id)}/></td>  */}
            <td><button type="button" class="btn" style={{ backgroundColor: '#d11a2a' }} onClick={() => onDelete(student.stud_id)}>Delete</button>
            
            </td>
          </tr>
        ))}
      </Table>

    </>
  )
}

export default Data
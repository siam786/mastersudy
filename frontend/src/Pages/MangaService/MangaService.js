import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const MangaService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://fathomless-hollows-04747.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = id =>{
    const proced = window.confirm('Are you sure, you want to delete?');
    if(proced){
      const url = `https://fathomless-hollows-04747.herokuapp.com/services/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then (res => res.json())
    .then(data => {
      if(data.deletedCount){
        alert('Deleted')
        const remaining = services.filter(service => service._id !== id);
        setServices(remaining)
      }
      
    })
    }
    

  }
  return (
    <div className="py-5">
      <h2>Manage Services</h2>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>Serial Token</th>
      <th>Order Items</th>
      <th>Delete items</th>
    </tr>
  </thead>
  <tbody>
    {
      services.map(service => <tr>
      <td>{service._id}</td>
      <td>{service.name}</td>
      <td>
        <button onClick={()=> handleDelete(service._id)}><FaTrash/></button>
        </td>
      </tr>)}
  </tbody>
</Table>

    {/*   {FaTrash
          services.map(service => <div>
              <h3>{service.name}</h3>
             <button onClick={()=> handleDelete(service._id)}>Delete</button>
          </div>)
      } */}
 
    </div>
  );
};

export default MangaService;

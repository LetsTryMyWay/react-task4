import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/Data.json')
      .then(res => res.json())
      .then(data => {
        setColumns(Object.keys(data.users[0]).filter(column => !['ein', 'ssn', 'userAgent'].includes(column)));
        setRecords(data.users);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  
  return (
    <div className="container mt-4" style={{ backgroundColor: "#343a40", color: "white", padding: "20px" }}>
      <h1 style={{ color: "white" }}>User Data</h1>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{record.maidenName}</td>
              <td>{record.age}</td>
              <td>{record.gender}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.username}</td>
              <td>{record.password}</td>
              <td>{record.birthDate}</td>
              <td><img src={record.image} alt="user" style={{ maxWidth: '50px', maxHeight: '50px' }} /></td>
              <td>{record.bloodGroup}</td>
              <td>{record.height}</td>
              <td>{record.weight}</td>
              <td>{record.eyeColor}</td>
              <td>{record.hair.color} - {record.hair.type}</td>
              <td>{record.domain}</td>
              <td>{record.ip}</td>
              <td>{record.address.address}, {record.address.city}, {record.address.state}, {record.address.postalCode}</td>
              <td>{record.macAddress}</td>
              <td>{record.university}</td>
              <td>{record.bank.cardNumber}</td>
              <td>{record.company.name}, {record.company.department}, {record.company.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Users = ({ users }) => {
//   const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    // const init = async () => {
    //   try {
    //     const response = await fetch(
    //       'http://localhost:3000/api/fetchAllUsers'
    //     ).then(async (response) => await response.json());
    //     setUsers(response.users);
    //     setLoading(false);
    //   } catch (err) {
    //     setError(err.response?.data.msg || err?.message || 'Server Error');
    //     setLoading(false);
    //   }
    // };
    // init();
  }, []);

  return (
    <div className='container mt-2 mb-5 mt-5' style={{ minHeight: '450px' }}>
      <h2 className='fs-2 mb-4'>Users</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {loading && <div>Loading</div>}
          {error && <div>{error}</div>}
          {users?.map((query, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{query.name}</td>
              <td>{query.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;

import React from "react";
import { Table } from "react-bootstrap";

const Users = ({ users }) => {
  return (
    <div className="container mt-2 mb-5 mt-5" style={{ minHeight: "450px" }}>
      <h2 className="fs-2 mb-4">Users</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
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

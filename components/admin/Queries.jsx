import { queryTypeEnum } from '@/constant';
import { generalContext } from '@/context/general.context';
import { parseCookies } from 'nookies';
import React, { useState, useContext } from 'react';
import { Table } from 'react-bootstrap';
import Button from '../atoms/button.atom';

const Queries = ({ queries }) => {
  const [filterQueries, setFilterQueries] = useState(queries);
  const [queryType, setQueryType] = useState(queryTypeEnum.ALL);

  // Context
  const { showAlert } = useContext(generalContext);

  const handleQueryType = (type) => {
    switch (type) {
      case queryTypeEnum.ALL:
        setFilterQueries(queries);
        break;
      case queryTypeEnum.COMPLETED:
        setFilterQueries(() =>
          queries?.filter((query) => query.isResolved === true)
        );
        break;
      case queryTypeEnum.PENDING:
        setFilterQueries(() =>
          queries?.filter((query) => query.isResolved === false)
        );
        break;
    }
    setQueryType(type);
  };

  const handleQueryResolve = async (id) => {
    const cookies = parseCookies();

    try {
      // API CALL
      const response = await fetch('http://localhost:3000/api/resolveQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authentication: cookies.token,
        },
        body: JSON.stringify({ id }),
      }).then(async (response) => await response.json());

      if (response.success) {
        // Alert
        showAlert(response?.msg, 'success');
      } else {
        // Alert
        showAlert(response?.msg, 'error');
      }
    } catch (err) {
      // Alert
      showAlert(err?.response.data?.msg || 'Something went wrong', 'error');
    }
  };
  return (
    <div>
      <div className='container mt-2 mb-5 mt-5' style={{ minHeight: '450px' }}>
        <div className='mt-4 mx-auto' style={{ width: 'fit-content' }}>
          <ul className='nav nav-tabs'>
            <li
              className={`nav-item ${
                queryType === queryTypeEnum.ALL && 'active'
              } `}
              onClick={() => handleQueryType(queryTypeEnum.ALL)}
            >
              <a className='nav-link' aria-current='page' href='#'>
                All
              </a>
            </li>
            <li
              className={`nav-item ${
                queryType === queryTypeEnum.APPROVED && 'active'
              } `}
              onClick={() => handleQueryType(queryTypeEnum.COMPLETED)}
            >
              <a className='nav-link' aria-current='page' href='#'>
                Completed
              </a>
            </li>
            <li
              className={`nav-item ${
                queryType === queryTypeEnum.NOT_APPROVED && 'active'
              } `}
              onClick={() => handleQueryType(queryTypeEnum.PENDING)}
            >
              <a className='nav-link' aria-current='page' href='#'>
                Pending
              </a>
            </li>
          </ul>
        </div>
        {/*  */}
        <h2 className='fs-2 mb-4'>Queries</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Name</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Is Resolved</th>
            </tr>
          </thead>
          <tbody>
            {filterQueries?.map((query, idx) => (
              <tr>
                <td style={{ background: query.isResolved ? 'green' : 'red' }}>
                  {idx + 1}
                </td>
                <td>{query.email}</td>
                <td>{query.name}</td>
                <td>{query.subject}</td>
                <td>{query.message}</td>
                <td>
                  <Button
                    onClick={() => handleQueryResolve(query._id)}
                    className={`btn btn-lg text-white ${
                      query.isResolved ? 'btn-danger' : 'btn-success'
                    }`}
                    value={query.isResolved ? 'Pending' : 'Completed'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Queries;

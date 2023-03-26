import { queryTypeEnum } from '@/constant';
import { generalContext } from '@/context/general.context';
import React, { useEffect, useState, useContext } from 'react';
import { Table } from 'react-bootstrap';
import Button from '../atoms/button.atom';

const Queries = ({ queries }) => {
//   const [queries, setQueries] = useState(null);
  const [filterQueries, setFilterQueries] = useState(queries);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [queryType, setQueryType] = useState(queryTypeEnum.ALL);

  const { showAlert } = useContext(generalContext);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const response = await fetch(
//           'http://localhost:3000/api/fetchAllQueries'
//         ).then(async (response) => await response.json());
//         setQueries(response.queries);
//         setFilterQueries(response.queries);
//         setLoading(false);
//       } catch (err) {
//         setError(err.response?.data.msg || err?.message || 'Server Error');
//         setLoading(false);
//       }
//     };
//     init();
//   }, []);

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
  };

  const handleQueryResolve = async (id) => {
    try {
      console.log(id, 'is`');
      const response = await fetch('http://localhost:3000/api/resolveQuery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      }).then(async (response) => await response.json());
      showAlert(response?.msg || 'Success', 'success');
    } catch (err) {
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

import Button from '@/components/atoms/button.atom';
import MyGroupCards from '@/components/MyGroupCards';
import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

export async function getServerSideProps() {
  try {
    const groupsResponse = await fetch(
      'http://localhost:3000/api/groups/fetchAllGroups'
    ).then(async (response) => await response.json());
    const usersResponse = await fetch(
      'http://localhost:3000/api/fetchAllUsers'
    ).then(async (response) => await response.json());
    const queriesResponse = await fetch(
      'http://localhost:3000/api/fetchAllQueries'
    ).then(async (response) => await response.json());

    const responses = await Promise.all([
      usersResponse,
      groupsResponse,
      queriesResponse,
    ]);

    console.log(responses, 'responses');

    return {
      props: {
        users: responses[0]?.users || [],
        groups: responses[1]?.groups || [],
        queries: responses[2]?.queries || [],
      },
    };
  } catch (err) {
    console.log(err, 'err');
    return { props: { groups: [] } };
  }
}

const Admin = ({ users, groups, queries }) => {
  const handleApproved = async (groupId, isApproved) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/groups/toggleApprove`,
        {
          method: 'post',
          body: JSON.stringify({ isApproved, groupId }),
        }
      ).then(async (response) => await response.json());
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const tabsNameEnum = {
    USERS: 'USERS',
    GROUPS: 'GROUPS',
    QUERIES: 'QUERIES',
  };

  const groupTypeEnum = {
    ALL: 'ALL',
    APPROVED: 'APPROVED',
    NOT_APPROVED: 'NOT_APPROVED',
  };

  const [tab, setTab] = useState(tabsNameEnum.USERS);
  const [groupType, setGroupType] = useState(groupTypeEnum.ALL);
  const handleTab = (tab) => {
    setTab(tab);
  };

  const handleGroupType = (type) => {
    setGroupType(type);
  };

  const handleQueryResolve = async () => {};
  return (
    <Container>
      {/* NAVIGATION */}
      <div>
        <ul className='nav nav-tabs'>
          <li
            className={`nav-item ${tab === tabsNameEnum.USERS && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.USERS)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              Users
            </a>
          </li>
          <li
            className={`nav-item ${tab === tabsNameEnum.GROUPS && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.GROUPS)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              Groups
            </a>
          </li>
          <li
            className={`nav-item ${tab === tabsNameEnum.QUERIES && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.QUERIES)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              Queries
            </a>
          </li>
        </ul>
      </div>

      {/* USERS */}
      {tab === tabsNameEnum.USERS && (
        <div
          className='container mt-2 mb-5 mt-5'
          style={{ minHeight: '450px' }}
        >
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
              {users?.map((query, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{query.name}</td>
                  <td>{query.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {/* GROUPS */}
      {tab === tabsNameEnum.GROUPS && (
        <>
          <div className='mt-4 mx-auto' style={{ width: 'fit-content' }}>
            <ul className='nav nav-tabs'>
              <li
                className={`nav-item ${
                  tab === groupTypeEnum.ALL && 'active'
                } `}
                onClick={() => handleGroupType(groupTypeEnum.ALL)}
              >
                <a className='nav-link' aria-current='page' href='#'>
                  All
                </a>
              </li>
              <li
                className={`nav-item ${
                  tab === groupTypeEnum.APPROVED && 'active'
                } `}
                onClick={() => handleGroupType(groupTypeEnum.APPROVED)}
              >
                <a className='nav-link' aria-current='page' href='#'>
                  Approved
                </a>
              </li>
              <li
                className={`nav-item ${
                  tab === groupTypeEnum.NOT_APPROVED && 'active'
                } `}
                onClick={() => handleGroupType(groupTypeEnum.NOT_APPROVED)}
              >
                <a className='nav-link' aria-current='page' href='#'>
                  Not Approved
                </a>
              </li>
            </ul>
          </div>
          {/* --- */}
          <div
            className='container mt-2 mb-5 mt-5'
            style={{ minHeight: '450px' }}
          >
            <h2 className='fs-2 mb-4'>Groups</h2>
            <div className='row gy-5'>
              {groups?.map((group) => (
                <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
                  <MyGroupCards
                    key={group._id}
                    group={group}
                    renderAction={() => (
                      <Button
                        onClick={() =>
                          handleApproved(group._id, !group?.isApproved)
                        }
                        className={`btn btn-danger btn-lg text-white`}
                        value={group.isApproved ? 'Deny' : 'Approve'}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* QUERY */}
      {tab === tabsNameEnum.QUERIES && (
        <div
          className='container mt-2 mb-5 mt-5'
          style={{ minHeight: '450px' }}
        >
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
              {queries?.map((query, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{query.email}</td>
                  <td>{query.name}</td>
                  <td>{query.subject}</td>
                  <td>{query.message}</td>
                  <td>
                    <Button
                      onClick={() =>
                        handleQueryResolve(query._id, !group?.isResolved)
                      }
                      className={`btn btn-danger btn-lg text-white`}
                      value={query.isResolved ? 'Resolved' : 'Not Resolved'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Admin;

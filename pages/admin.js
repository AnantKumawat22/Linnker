import Groups from '@/components/admin/Groups';
import Queries from '@/components/admin/Queries';
import Users from '@/components/admin/Users';
import Button from '@/components/atoms/button.atom';
import MyGroupCards from '@/components/MyGroupCards';
import { tabsNameEnum } from '@/constant';
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

  const [tab, setTab] = useState(tabsNameEnum.USERS);

  const handleTab = (tab) => setTab(tab);


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
      {tab === tabsNameEnum.USERS && <Users />}
      {/* GROUPS */}
      {tab === tabsNameEnum.GROUPS && <Groups />}
      {/* QUERY */}
      {tab === tabsNameEnum.QUERIES && <Queries />}
    </Container>
  );
};

export default Admin;

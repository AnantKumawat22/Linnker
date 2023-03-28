import Groups from '@/components/admin/Groups';
import Queries from '@/components/admin/Queries';
import Users from '@/components/admin/Users';
import { roles, tabsNameEnum } from '@/constant';
import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { token, role } = context.req.cookies;
  if (role !== roles.ADMIN) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  try {
    const groupsResponse = await fetch(
      `${process.env.BASE_URL}/admin/fetchAllGroups`,
      {
        headers: {
          authentication: token,
        },
      }
    ).then(async (response) => await response.json());
    const usersResponse = await fetch(
      `${process.env.BASE_URL}/admin/fetchAllUsers`,
      {
        headers: {
          authentication: token,
        },
      }
    ).then(async (response) => await response.json());
    const queriesResponse = await fetch(
      `${process.env.BASE_URL}/admin/fetchAllQueries`,
      {
        headers: {
          authentication: token,
        },
      }
    ).then(async (response) => await response.json());

    const responses = await Promise.all([
      usersResponse,
      groupsResponse,
      queriesResponse,
    ]);

    return {
      props: {
        users: responses[0]?.users || [],
        groups: responses[1]?.groups || [],
        queries: responses[2]?.queries || [],
      },
    };
  } catch (err) {
    return { props: { groups: [] } };
  }
}

const Admin = ({ users, groups, queries }) => {
  const [tab, setTab] = useState(tabsNameEnum.USERS);
  const handleTab = (tab) => setTab(tab);

  return (
    <Container>
      {/* NAVIGATION */}
      <div>
        <ul className='nav nav-tabs'>
          <li
            className={`nav-item ${tab === tabsNameEnum.USERS && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.USERS)}
          >
            <Link className='nav-link' aria-current='page' href='#'>
              Users
            </Link>
          </li>
          <li
            className={`nav-item ${tab === tabsNameEnum.GROUPS && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.GROUPS)}
          >
            <Link className='nav-link' aria-current='page' href='#'>
              Groups
            </Link>
          </li>
          <li
            className={`nav-item ${tab === tabsNameEnum.QUERIES && 'active'} `}
            onClick={() => handleTab(tabsNameEnum.QUERIES)}
          >
            <Link className='nav-link' aria-current='page' href='#'>
              Queries
            </Link>
          </li>
        </ul>
      </div>

      {/* USERS */}
      {tab === tabsNameEnum.USERS && <Users users={users} />}
      {/* GROUPS */}
      {tab === tabsNameEnum.GROUPS && <Groups groups={groups} />}
      {/* QUERY */}
      {tab === tabsNameEnum.QUERIES && <Queries queries={queries} />}
    </Container>
  );
};

export default Admin;

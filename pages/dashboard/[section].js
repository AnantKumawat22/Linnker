import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Profile from '@/components/Profile';
import MyGroups from '@/components/MyGroups';

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  // Redirect to login page if user is not authenticated
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  try {
    const jsonResponse = await fetch(
      'http://localhost:3000/api/groups/fetchMyGroups',
      {
        headers: {
          authentication: token,
        },
      }
    );
    const data = await jsonResponse.json();
    return {
      props: { groups: data.groups || [] },
    };
  } catch (error) {
    return {
      props: { groups: [] },
    };
  }
}
const section = ({ groups }) => {
  const router = useRouter();
  const { section } = router.query;
  const [sectionstate, setSectionState] = useState(undefined);

  useEffect(() => {
    setSectionState(section);
  }, [section]);

  function navigateprofile() {
    router.push(`/dashboard/profile`);
  }

  return typeof sectionstate !== 'undefined' ? (
    sectionstate == 'profile' ? (
      <Profile />
    ) : sectionstate == 'mygroups' ? (
      <MyGroups groups={groups} />
    ) : (
      navigateprofile()
    )
  ) : null;
};

export default section;

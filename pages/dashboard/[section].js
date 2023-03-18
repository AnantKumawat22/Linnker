import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Profile from "@/components/Profile";
import MyGroups from "@/components/MyGroups";

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
  return {
    props: {},
  }
}

const section = (props) => {

  const router = useRouter();
  const { section } = router.query;
  const [sectionstate, setSectionState] = useState(undefined);

  useEffect(() => {
    setSectionState(section);
  }, [section]);
  
  function navigateprofile(){
    router.push(`/dashboard/profile`);
  }

  return typeof sectionstate !== 'undefined' ? (
    sectionstate == 'profile' ? <Profile/> : sectionstate == 'mygroups' ? <MyGroups/> : navigateprofile()
  ) : null;
};

export default section;

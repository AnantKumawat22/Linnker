import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Profile from "@/components/Profile";
import MyGroups from "@/components/MyGroups";

const section = () => {
  const router = useRouter();
  const { section } = router.query;
  const [sectionstate, setSectionState] = useState(undefined);

  useEffect(() => {
    setSectionState(section);
  }, [section])
  
  function navigateprofile(){
    router.push(`/dashboard/profile`);
  }

  return typeof sectionstate !== 'undefined' ? (
    sectionstate == 'profile' ? <Profile/> : sectionstate == 'mygroups' ? <MyGroups/> : navigateprofile()
  ) : null;
};

export default section;

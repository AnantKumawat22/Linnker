import React, { useEffect } from "react";
import DashboardNav from "./DashboardNav";
import COLORS from "@/theme/colors";

const Profile = () => {
  useEffect(() => {
    const profileSection = document.getElementById('profilesec');
    const myGroupSection = document.getElementById('mygroupsec');

    profileSection.style.borderBottom = `4px solid ${COLORS.primary.main}`;
    myGroupSection.style.borderBottom = "none";
  }, []);
  
  return (
    <>
      <DashboardNav />
      <div>
        <h1>Profile Page</h1>
      </div>
    </>
  );
};

export default Profile;

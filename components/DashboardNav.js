import Link from "next/link";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from '../styles/dashboardnav.module.css';

const DashboardNav = () => {
  return (
    <>
      <div style={{height: "70px"}} className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <Link href="/dashboard/profile" className={styles.sectionlink} id="profilesec">Profile</Link>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Link href="/dashboard/mygroups" className={styles.sectionlink} id="mygroupsec">My Groups</Link>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;

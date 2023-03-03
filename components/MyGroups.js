import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "@/components/atoms/input.atom";
import styles from "../styles/dashboardnav.module.css";
import Button from "@/components/atoms/button.atom";
import DashboardNav from "./DashboardNav";

const MyGroups = () => {

  useEffect(() => {
    const profileSection = document.getElementById('profilesec');
    const myGroupSection = document.getElementById('mygroupsec');

    myGroupSection.style.borderBottom = "4px solid #ffd300";
    profileSection.style.borderBottom = "none";
  }, []);

  return (
    <>
      <DashboardNav />
      <div className={`${styles.mygroup} mt-5 container`}>
        <h1>Add a WhatsApp Group Link</h1>
        <div className={styles.mygroupOne}>
          <div className={styles.mygroupOneInp1}>
            <div>
              <label htmlFor="">Group Name</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="">Group Link</label>
              <Input type="text" />
            </div>
          </div>

          <div className={styles.mygroupOneInp1}>
            <div>
              <label htmlFor="">Group Description</label>
              <textarea className="form-control form-control-lg"></textarea>
            </div>
            <div>
              <label htmlFor="">Add tags</label>
              <Input width="50%" type="text" />
            </div>
          </div>

          <Button
            className="btn btn-primary btn-lg mt-5"
            value="Add Group"
          ></Button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MyGroups;

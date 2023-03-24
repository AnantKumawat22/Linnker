import Link from "next/link";
import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import COLORS from "@/theme/colors";
import { useRouter } from "next/router";
import styles from "../styles/dashboardnav.module.css";

const DashboardNav = () => {
  const profilehighlight = useRef(null);
  const mygroupshighlight = useRef(null);

  const router = useRouter();
  useEffect(() => {
    if (router.query.section == "profile") {
      profilehighlight.current.style.borderBottom = `4px solid ${COLORS.primary.main}`;
      mygroupshighlight.current.style.borderBottom = `none`;
    } else if (router.query.section == "mygroups") {
      mygroupshighlight.current.style.borderBottom = `4px solid ${COLORS.primary.main}`;
      profilehighlight.current.style.borderBottom = `none`;
    }
  }, []);

  return (
    <>
      <div style={{ height: "70px" }} className="d-flex flex-row m-100">
        <div className="d-flex w-50 justify-content-center align-items-center">
          <Link
            href="/dashboard/profile"
            className={`${styles.sectionlink}`}
            ref={profilehighlight}
          >
            Profile
          </Link>
        </div>
        <div className="d-flex w-50 justify-content-center align-items-center">
          <Link
            href="/dashboard/mygroups"
            className={styles.sectionlink}
            ref={mygroupshighlight}
          >
            My Groups
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;

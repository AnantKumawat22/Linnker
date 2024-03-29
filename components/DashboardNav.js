import Link from "next/link";
import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import COLORS from "@/theme/colors";
import { useRouter } from "next/router";

const DashboardNav = () => {
  // UseRef of profile and mygroup section.
  const profilehighlight = useRef(null);
  const mygroupshighlight = useRef(null);

  // Router
  const router = useRouter();

  useEffect(() => {
    // Highlight the section on which we are - profile or mygroup.
    if (router.asPath == "/dashboard/profile") {
      profilehighlight.current.style.borderBottom = `4px solid ${COLORS.primary.main}`;
      mygroupshighlight.current.style.borderBottom = `none`;
    } else if (router.asPath == "/dashboard/mygroups") {
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
            className={`sectionlink`}
            ref={profilehighlight}
          >
            Profile
          </Link>
        </div>
        <div className="d-flex w-50 justify-content-center align-items-center">
          <Link
            href="/dashboard/mygroups"
            className="sectionlink"
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

import React, { useEffect, useState } from "react";
import DashboardNav from "@/components/DashboardNav";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/profile.module.css";

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  // Redirect to login page if user is not authenticated
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  try {
    // API CALL
    const jsonResponse = await fetch(`${process.env.BASE_URL}/api/user`, {
      headers: {
        authentication: token,
      },
    });
    const response = await jsonResponse.json();
    return {
      props: { userdata: response.user || [] },
    };
  } catch (error) {
    return {
      props: { groups: [] },
    };
  }
}

const Profile = ({ userdata }) => {
  // Router
  const router = useRouter();

  const [dateandtime, setDateAndTime] = useState({
    date: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    second: "",
  });
  const [user, setUser] = useState(userdata);

  useEffect(() => {
    const utcTimestamp = new Date(userdata?.date);

    // Setting Date and Time.
    setDateAndTime({
      date: utcTimestamp.getDate(),
      month: utcTimestamp.getMonth() + 1,
      year: utcTimestamp.getFullYear(),
      hour: utcTimestamp.getHours(),
      minute: utcTimestamp.getMinutes(),
      second: utcTimestamp.getSeconds(),
    });
  }, []);

  return (
    <>
      <DashboardNav />
      <div
        className={`${styles.container} d-flex justify-content-center align-items-center`}
      >
        <div className={`${styles.card}`}>
          <div className={`${styles.upper}`}>
            <Image
              alt="ProfileBg"
              priority
              src="/img/Logo/profilebg.png"
              className="img-fluid"
              width={300}
              height={70}
            />
          </div>

          <div className={`${styles.user} text-center`}>
            <div className={`${styles.profile}`}>
              <Image
                alt="Profile"
                src="/profile.png"
                className="rounded-circle"
                width={360}
                height={360}
              />
            </div>
          </div>

          <div className="mt-5 pt-3 text-center">
            <h4 className="mb-0 h5">{user?.name}</h4>
            <span className="text-muted d-block mb-2">{user?.email}</span>

            <button
              onClick={() => {
                router.push("/dashboard/mygroups");
              }}
              className={`btn btn-primary btn-sm ${styles.follow}`}
            >
              My groups
            </button>

            <div
              className={`${styles.stats} d-flex justify-content-center align-items-center mt-5 px-2`}
            >
              <h6 className="mb-0 font-weight-bold">Account Created on: </h6>
              <span>
                {" "}
                {dateandtime &&
                  `${dateandtime?.date}/${dateandtime?.month}/${dateandtime?.year} - ${dateandtime?.hour}:${dateandtime?.minute}:${dateandtime?.second}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

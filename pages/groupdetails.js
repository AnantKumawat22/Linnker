import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from "next/router";
import styles from "../styles/groupdetails.module.css";
import Image from "next/image";

const groupdetails = () => {
  // Router
  const router = useRouter();
  const { groupId, groupname, groupdescription, grouplink, grouptags } =
    router.query;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/groups/groupcreatedby",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              tokenid: groupId,
            },
          }
        );
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchUser();
  }, [router.query]);

  return (
    <>
      <section
        id={`${styles.portfolioDetails}`}
        className={`${styles.portfolioDetails}`}
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className={`${styles.portfolioDetailsSlider} swiper`}>
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <Image src="/img/Logo/Logo.png" alt="" width={820} height={540} />
                  </div>
                </div>
                <div className={`${styles.swiperPagination}`}></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={`${styles.portfolioInfo}`}>
                <h3>Group information</h3>
                <ul>
                  <li>
                    <strong>Group Name</strong>: {groupname}
                  </li>
                  <li>
                    <strong>Group Tags</strong>: {grouptags}
                  </li>

                  <li className={`${styles.grouplink}`} >
                    <strong>Group Link</strong>:{" "}
                    <a href={grouplink} target="_blank">
                      {grouplink}
                    </a>
                  </li>
                  <li style={{ marginTop: "30px" }}>
                    <strong>Group Created by</strong>: {user}
                  </li>
                  <li>
                    <strong style={{ color: "grey" }}>
                      All groups are valid whatsapp groups and verified by our team.
                    </strong>
                  </li>
                </ul>
              </div>
              <div className={`${styles.portfolioDescription}`}>
                <h2>Group Description</h2>
                <p>{groupdescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default groupdetails;

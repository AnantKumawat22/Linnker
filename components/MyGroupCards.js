import React from "react";
import styles from "../styles/MyGroupCards.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";
import { useRouter } from "next/router";

const MyGroupCards = (props) => {
  const router = useRouter();

  const handleBtn = () => {
    if (router.asPath === "/dashboard/mygroups") {
      console.log("my groups...");
    } else if (router.asPath === "/groups") {
      console.log("groupssss");
    }
  };

  return (
    <>
      <div className={`${styles.groupcard} shadow-sm bg-white`}>
        <h5>MERN Stack</h5>
        <p>
          MERN stands for MongoDB, Express, React, Node, after the four key
          technologies that make up the stack. Express and Node make up the
          middle (application) tier. Express.js is a server-side web framework,
          and Node.js is the popular and powerful JavaScript server platform.
        </p>
        <div className={styles.maintag}>
          <div className={styles.tag}>
            <h6>React.js</h6>
          </div>
          <div className={styles.tag}>
            <h6>MongoDB</h6>
          </div>
          <div className={styles.tag}>
            <h6>Node.js</h6>
          </div>
          <div className={styles.tag}>
            <h6>Express.js</h6>
          </div>
          <div className={styles.tag}>
            <h6>MERN</h6>
          </div>
        </div>
        <Button
          className={`btn btn-${props.btncolor} btn-lg`}
          value={`${props.btnvalue}`}
          onClick={handleBtn}
        ></Button>
      </div>
    </>
  );
};

export default MyGroupCards;

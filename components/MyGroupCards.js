import React from "react";
import styles from "../styles/MyGroupCards.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";

const MyGroupCards = () => {
  return (
    <>
      <div className={styles.groupcard}>
        <h5>MERN Stack</h5>
        <p>
          MERN stands for MongoDB, Express, React, Node, after the four key
          technologies that make up the stack. Express and Node make up the
          middle (application) tier. Express.js is a server-side web framework,
          and Node.js is the popular and powerful JavaScript server platform.
        </p>
        <Button className="btn btn-primary btn-lg" value="Join Group"></Button>
      </div>
    </>
  );
};

export default MyGroupCards;

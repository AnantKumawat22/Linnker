import React, { useContext } from "react";
import styles from "../styles/MyGroupCards.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";
import { useRouter } from "next/router";
import { parseCookies } from 'nookies';
import groupContext from "@/context/groups/groupContext";

const MyGroupCards = (props) => {

  // Groups Context.
  const context = useContext(groupContext);
  const { mygroups, setMyGroups } = context;

  const router = useRouter();
  const arg = props.props;

  const handleBtn = async (id) => {
    const cookies = parseCookies();
    if (router.asPath === "/dashboard/mygroups") {
      // API CALL
      const response = await fetch(`/api/groups/deletemygroup/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authentication": cookies.token
        }
      });
      const data = await response.json();
      if(data.success){
        // DELETE NOTE
        
        // Alert
      } else{
        // Alert
      }

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

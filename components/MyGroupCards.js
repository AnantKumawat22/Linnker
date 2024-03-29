import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/MyGroupCards.module.css";

const MyGroupCards = ({ group, renderAction }) => {
  // Router
  const router = useRouter();

  // Sending card details when user click on card to see its details.
  const handleCardClick = (group) => {
    router.push({
      pathname: "/groupdetails",
      query: {
        groupId: group._id,
        groupname: group.name,
        groupdescription: group.description,
        grouptags: group.tags,
        grouplink: group.link,
      },
    });
  };
  return (
    <>
      <div
        className={`card shadow-sm rounded-3 h-100 ${styles["group-card-root"]}`}
      >
        <div className="card-body d-flex flex-column">
          <div
            className="card-body d-flex flex-column p-0"
            onClick={() => {
              handleCardClick(group);
            }}
          >
            <h5 className={`${styles.groupName} card-title no-of-line-1`}>{group.name}</h5>
            <p className={`${styles.groupDesc} card-text fw-light text-wrap no-of-line-2`}>
              {group.description}
            </p>
            <div className="d-flex align-items-center mb-2 flex-wrap">
              {group.tags.map((tag, idx) => (
                <div className={`me-1 mb-1 px-3 rounded-5 ${styles.tagDiv}`}>
                  <span className={`${styles.groupTag} font-weight-bolder`}> {tag}</span>
                </div>
              ))}
            </div>
          </div>
          {/* action button */}
          {renderAction()}
        </div>
      </div>
    </>
  );
};

export default MyGroupCards;

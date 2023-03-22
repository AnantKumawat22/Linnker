import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useRouter } from "next/router";

// Unused
import styles from "../styles/MyGroupCards.module.css";

const MyGroupCards = ({ group, renderAction }) => {
  // Router
  const router = useRouter();

  const handleCardClick = (group) => {
    console.log(group);
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
        className={`card shadow-lg bg-white rounded-4 h-100 ${styles['group-card-root']}`}
      >
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title no-of-line-1'>{group.name}</h5>
          <p className='card-text fw-light text-wrap flex-grow-1 no-of-line-3'>
            {group.description}
          </p>
          <div className="d-flex align-items-center mb-2 flex-wrap">
            {group.tags.map((tag, idx) => (
              <div className={`me-1 mb-1 px-3 rounded-1 border`}>
                <span className="fw-lighter">{tag}</span>
              </div>
            ))}
          </div>
          {/* action button */}
          {renderAction()}
        </div>
      </div>
    </>
  );
};

export default MyGroupCards;

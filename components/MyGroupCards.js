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
        class={`card shadow-sm bg-white rounded-4 border border-1 border-primary h-100`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleCardClick(group);
        }}
      >
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{group.name}</h5>
          <p className="card-text fw-light text-wrap flex-grow-1">
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

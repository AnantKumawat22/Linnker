import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import styles from '../styles/MyGroupCards.module.css';

const MyGroupCards = ({ group, renderAction }) => {
  return (
    <>
      <div className={`${styles.groupcard} shadow-sm bg-white`}>
        <h5>{group.name}</h5>
        <p>{group.description}</p>
        <div className={styles.maintag}>
          {group.tags.map((tag) => (
            <div className={styles.tag}>
              <h6>{tag}</h6>
            </div>
          ))}
        </div>
        {/* action button */}
        {renderAction()}
      </div>
    </>
  );
};

export default MyGroupCards;

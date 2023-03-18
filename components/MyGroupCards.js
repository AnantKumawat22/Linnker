import React from 'react';
import styles from '../styles/MyGroupCards.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@/components/atoms/button.atom';

const MyGroupCards = ({ group }) => {
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
        <Button className='btn btn-primary btn-lg' value='Join Group'></Button>
      </div>
    </>
  );
};

export default MyGroupCards;

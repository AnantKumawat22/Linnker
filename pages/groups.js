import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/groups.module.css';
import MyGroupCards from '@/components/MyGroupCards';

<<<<<<< Updated upstream


const groups = () => {
=======
export async function getServerSideProps(context) {
  const jsonResponse = await fetch(
    'http://localhost:3000/api/groups/fetchAllGroups'
  );
  const { groups } = await jsonResponse.json();

  console.log(groups, 'res');
  return {
    props: { groups },
  };
}

const groups = ({ groups }) => {
  console.log(groups, 'groups');
>>>>>>> Stashed changes
  return (
    <>
      <div className={styles.mainGroupPageDiv}>
        <div className={styles.searchAndDropDownDiv}>
          <form
            action=''
            className={`${styles.searchBarDiv} shadow-sm bg-white`}
          >
            <input
              placeholder='Search for group or tags'
              type='text'
              className={`${styles.searchInp}`}
            />
            <button className='btn btn-primary rounded-pill'>Search</button>
          </form>
          <div className={styles.dropDownDiv}>
            <select name='' id=''>
              <option className={styles.selectOptions} value='Tags'>
                Tags
              </option>
              <option className={styles.selectOptions} value='Group Name'>
                Group Name
              </option>
            </select>
          </div>
        </div>

<<<<<<< Updated upstream
        <div className="container mt-5 mb-5">
        <h2>All WhatsApp Groups</h2>
        <div className={`${styles.allgroupcard} mt-4`}>
          <MyGroupCards btnvalue="Join Group" btncolor="primary"/>
          <MyGroupCards btnvalue="Join Group" btncolor="primary"/>
          <MyGroupCards btnvalue="Join Group" btncolor="primary"/>
          <MyGroupCards btnvalue="Join Group" btncolor="primary"/>
=======
        <div className='container mt-5 mb-5'>
          <h2>All WhatsApp Groups</h2>
          <div className={`${styles.allgroupcard} mt-4`}>
            {groups.map((group, idx) => (
              <MyGroupCards key={group._id} group={group} />
            ))}
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </>
  );
};

export default groups;

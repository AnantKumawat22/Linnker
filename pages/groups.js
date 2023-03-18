import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/groups.module.css';
import MyGroupCards from '@/components/MyGroupCards';
import Button from '@/components/atoms/button.atom';

export async function getServerSideProps() {
  try {
    const jsonResponse = await fetch(
      'http://localhost:3000/api/groups/fetchAllGroups'
    );
    const response = await jsonResponse.json();
    return {
      props: { groups: response?.groups || [] },
    };
  } catch (err) {
    console.log(err, 'err');
    return { props: { groups: [] } };
  }
}

const groups = ({ groups }) => {
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

        <div className='container mt-5 mb-5'>
          <h2>All WhatsApp Groups</h2>
          <div className={`${styles.allgroupcard} mt-4`}>
            {groups?.map((group, idx) => (
              <MyGroupCards
                key={group._id}
                group={group}
                renderAction={() => (
                  <div>
                    <Button
                      className={`btn btn-primary btn-lg`}
                      value='Join Group'
                    ></Button>
                  </div>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default groups;

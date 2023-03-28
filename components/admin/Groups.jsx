import { groupTypeEnum } from '@/constant';
import { generalContext } from '@/context/general.context';
import { parseCookies } from 'nookies';
import React, { useContext, useState } from 'react';
import Button from '../atoms/button.atom';
import MyGroupCards from '../MyGroupCards';

const Groups = ({ groups }) => {
  const [filterGroup, setFilterGroup] = useState(groups);
  const [groupType, setGroupType] = useState(groupTypeEnum.ALL);

  // Context
  const { showAlert } = useContext(generalContext);

  const handleGroupType = (type) => {
    switch (type) {
      case groupTypeEnum.ALL:
        setFilterGroup(groups);
        break;
      case groupTypeEnum.APPROVED:
        setFilterGroup(() =>
          groups?.filter((group) => group.isApproved === true)
        );
        break;
      case groupTypeEnum.NOT_APPROVED:
        setFilterGroup(() =>
          groups?.filter((group) => group.isApproved === false)
        );
        break;
    }
    setGroupType(type);
  };

  const cookies = parseCookies();

  const handleGroupResolve = async (id) => {
    try {
      // API CALL
      const response = await fetch('http://localhost:3000/api/approveGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authentication: cookies.token,
        },
        body: JSON.stringify({ id }),
      }).then(async (response) => await response.json());

      if (response.success) {
        // Alert
        showAlert(response?.msg, 'success');
      } else {
        // Alert
        showAlert(response?.msg, 'error');
      }
    } catch (err) {
      // Alert
      showAlert(err?.response.data?.msg || 'Something went wrong', 'error');
    }
  };

  return (
    <div>
      <div className='mt-4 mx-auto' style={{ width: 'fit-content' }}>
        <ul className='nav nav-tabs'>
          <li
            className={`nav-item ${
              groupType === groupTypeEnum.ALL && 'active'
            } `}
            onClick={() => handleGroupType(groupTypeEnum.ALL)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              All
            </a>
          </li>
          <li
            className={`nav-item ${
              groupType === groupTypeEnum.APPROVED && 'active'
            } `}
            onClick={() => handleGroupType(groupTypeEnum.APPROVED)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              Approved
            </a>
          </li>
          <li
            className={`nav-item ${
              groupType === groupTypeEnum.NOT_APPROVED && 'active'
            } `}
            onClick={() => handleGroupType(groupTypeEnum.NOT_APPROVED)}
          >
            <a className='nav-link' aria-current='page' href='#'>
              Not Approved
            </a>
          </li>
        </ul>
      </div>
      {/* --- */}
      <div className='container mt-2 mb-5 mt-5' style={{ minHeight: '450px' }}>
        <h2 className='fs-2 mb-4'>Groups</h2>
        <div className='row gy-5'>
          {filterGroup?.map((group) => (
            <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
              <MyGroupCards
                key={group._id}
                group={group}
                renderAction={() => (
                  <Button
                    onClick={() => handleGroupResolve(group._id)}
                    className={`btn btn-lg text-white ${
                      group.isApproved ? 'btn-danger' : 'btn-success'
                    }`}
                    value={group.isApproved ? 'Deny' : 'Approve'}
                  />
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;

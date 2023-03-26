import { groupTypeEnum } from '@/constant';
import { generalContext } from '@/context/general.context';
import React, { useContext, useEffect, useState } from 'react';
import Button from '../atoms/button.atom';
import MyGroupCards from '../MyGroupCards';

const Groups = ({ groups }) => {
  //   const [groups, setGroups] = useState(null);
  const [filterGroup, setFilterGroup] = useState(groups);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupType, setGroupType] = useState(groupTypeEnum.ALL);

  const { showAlert } = useContext(generalContext);

  //   useEffect(() => {
  //     const init = async () => {
  //       try {
  //         const response = await fetch(
  //           'http://localhost:3000/api/groups/fetchAllGroups'
  //         ).then(async (response) => await response.json());
  //         setGroups(response.groups);
  //         setFilterGroup(response.groups);
  //         setLoading(false);
  //       } catch (err) {
  //         setError(err.response?.data.msg || err?.message || 'Server Error');
  //         setLoading(false);
  //       }
  //     };
  //     init();
  //   }, []);

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
  };

  const handleGroupResolve = async (id) => {
    try {
      const response = await fetch('http://localhost:3000/api/approveGroup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      }).then(async (response) => await response.json());
      //   setFilterGroup((prev) =>
      //     prev.map((group) => {
      //       if (group._id === id)
      //         return {
      //           ...group,
      //           isApproved: !group.isApproved,
      //         };
      //     })
      //   );
      showAlert(response?.msg || 'Success', 'success');
    } catch (err) {
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

import React, { useEffect, useState } from 'react';
import DashboardNav from './DashboardNav';
import COLORS from '@/theme/colors';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';
import { parseCookies } from 'nookies';

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const cookies = parseCookies();
      try {
        const jsonResponse = await fetch('http://localhost:3000/api/user', {
          headers: {
            authentication: cookies.token,
          },
        });
        const response = await jsonResponse.json();
        setUser(response.user);
      } catch (err) {
        console.log(err, 'err');
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <DashboardNav />
      <div
        className={`${styles.container} d-flex justify-content-center align-items-center`}
      >
        <div className={`${styles.card}`}>
          <div className={`${styles.upper}`}>
            <Image
              alt=''
              priority
              src='/Profilebg.jpg'
              className='img-fluid'
              width={300}
              height={70}
            />
          </div>

          <div className={`${styles.user} text-center`}>
            <div className={`${styles.profile}`}>
              <Image
                alt=''
                src='/Profile.jpg'
                className='rounded-circle'
                width={360}
                height={360}
              />
            </div>
          </div>

          <div className='mt-5 text-center'>
            <h4 className='mb-0'>{user?.name}</h4>
            <span className='text-muted d-block mb-2'>{user?.email}</span>

            <button className={`btn btn-primary btn-sm ${styles.follow}`}>
              Follow
            </button>

            <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
              <div className={`${styles.stats}`}>
                <h6 className='mb-0'>Followers</h6>
                <span>8,797</span>
              </div>

              <div className='stats'>
                <h6 className='mb-0'>Projects</h6>
                <span>142</span>
              </div>

              <div className='stats'>
                <h6 className='mb-0'>Ranks</h6>
                <span>129</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

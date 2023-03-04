import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '@/components/atoms/input.atom';
import styles from '../styles/dashboardnav.module.css';
import Button from '@/components/atoms/button.atom';
import DashboardNav from './DashboardNav';

const MyGroups = () => {
  const [input, setInput] = useState({
    name: '',
    link: '',
    description: '',
    tags: [],
  });
  const [tag, setTag] = useState('');

  console.log(input, 'input');
  useEffect(() => {
    const profileSection = document.getElementById('profilesec');
    const myGroupSection = document.getElementById('mygroupsec');

    myGroupSection.style.borderBottom = '4px solid #ffd300';
    profileSection.style.borderBottom = 'none';
  }, []);

  const handleAddTag = () => {
    setInput((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    setTag('');
  };

  const handleDeleteTag = (deleteTag) => {
    setInput((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== deleteTag),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tag') setTag(value);
    else setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <>
      <DashboardNav />
      <div className={`${styles.mygroup} mt-5 container`}>
        <h1>Add a WhatsApp Group Link</h1>
        <h1>{JSON.stringify(input)}</h1>
        <div className={styles.mygroupOne}>
          <div className={styles.mygroupOneInp1}>
            <div>
              <label htmlFor=''>Group Name</label>
              <Input
                type='text'
                onChange={handleChange}
                name='name'
                value={input.name}
              />
            </div>
            <div>
              <label htmlFor=''>Group Link</label>
              <Input
                type='text'
                onChange={handleChange}
                name='link'
                value={input.link}
              />
            </div>
          </div>

          <div className={styles.mygroupOneInp1}>
            <div>
              <label htmlFor=''>Group Description</label>
              <textarea
                className='form-control form-control-lg'
                name='description'
                onChange={handleChange}
                value={input.description}
              />
            </div>
            <div>
              <label htmlFor=''>Add tags</label>
              <Input
                width='50%'
                type='text'
                onChange={handleChange}
                name='tag'
                value={input.tag}
              />
              <div>
                {input.tags.map((tag, index) => (
                  <div className={styles.tag}>
                    <h4>{tag}</h4>
                    <div onClick={() => handleDeleteTag(tag)}>x</div>
                  </div>
                ))}
              </div>
              <Button
                className='btn btn-primary btn-lg mt-5'
                value='Add Group'
                onClick={handleAddTag}
              />
            </div>
          </div>

          <Button
            className='btn btn-primary btn-lg mt-5'
            value='Add Group'
            disabled={
              !Object.keys(input).every((key) => {
                if (key === 'tags') {
                  return input[key].length > 0;
                } else return input[key];
              })
            }
            onClick={handleSubmit}
          />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default MyGroups;

import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Input from '@/components/atoms/input.atom';
import styles from '../styles/mygroups.module.css';
import Button from '@/components/atoms/button.atom';
import DashboardNav from './DashboardNav';
import MyGroupCards from './MyGroupCards';
import { parseCookies } from 'nookies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { generalContext } from '@/context/general.context';
import { groupContext } from '@/context/group.context';

const MyGroups = ({ groups }) => {
  const { showAlert, setLoaderProgress, topLoaderBar } =
    useContext(generalContext);

  const { myGroups, setMyGroups } = useContext(groupContext);

  const [input, setInput] = useState({
    name: '',
    link: '',
    description: '',
    tags: [],
  });
  const [tag, setTag] = useState('');

  useEffect(() => {
    setMyGroups(groups);
  }, []);

  const handleAddTag = () => {
    if (tag == '') return;
    setInput((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    setTag('');
  };

  const handleDeleteTag = (deleteTag) => {
    setInput((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== deleteTag),
    }));
  };

  const handleDelete = async (id) => {
    const cookies = parseCookies();
    try {
      const response = await fetch(`/api/groups/deletemygroup/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authentication: cookies.token,
        },
      });
      const data = await response.json();
      showAlert(data.msg, 'success');
      setMyGroups((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      showAlert(error?.response?.data?.msg || 'Something went wrong', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tag') setTag(value);
    else setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Add WhatsApp Group Form Submit.
    const { name, description, tags, link } = input;

    // Get Token from nookies.
    const cookies = parseCookies();

    // Start the loader
    setLoaderProgress(true);
    topLoaderBar.current.continuousStart();

    // API CALL
    const response = await fetch('/api/groups/creategroup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: cookies.token,
      },
      body: JSON.stringify({ name, description, tags, link }),
    });
    const data = await response.json();

    // Check if Everthing is okay or not.
    if (data.success) {
      // Clear Create Group Fields.
      setMyGroups((prev) => [data.group, ...prev]);
      setInput({
        name: '',
        link: '',
        description: '',
        tags: [],
      });
      // Alert
      showAlert(data.msg, 'success');
    } else {
      // Alert
      showAlert(data.msg, 'error');
    }
    // Stop the loader
    setLoaderProgress(false);
    topLoaderBar.current.complete();
  };
  return (
    <>
      <DashboardNav />
      <div className={`${styles.mygroup} mt-5 container`}>
        <h1>Add a WhatsApp Group Link</h1>
        <div className={styles.mygroupOne}>
          <div className={styles.mygroupOneInp1}>
            <div className={styles.addGroupInpDiv}>
              <label htmlFor=''>Group Name</label>
              <Input
                type='text'
                onChange={handleChange}
                name='name'
                value={input.name}
              />
            </div>
            <div className={styles.addGroupInpDiv}>
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
            <div className={`${styles.addGroupInpDiv}`}>
              <label htmlFor=''>Group Description</label>
              <textarea
                className='form-control form-control-lg mb-4'
                name='description'
                rows={5}
                onChange={handleChange}
                value={input.description}
              />
            </div>
            <div className={styles.addGroupInpDiv}>
              <label htmlFor=''>Add Tags</label>
              <Input
                width='50%'
                type='text'
                onChange={handleChange}
                name='tag'
                maxLength="25"
                value={tag}
              />
              <div className={styles.maintag}>
                {input.tags.map((tag, index) => (
                  <div className={styles.tag} key={index}>
                    <h6>{tag}</h6>
                    <FontAwesomeIcon
                      onClick={() => handleDeleteTag(tag)}
                      icon={faClose}
                      style={{ cursor: 'pointer' }}
                      className='fas fa-close'
                    ></FontAwesomeIcon>
                  </div>
                ))}
              </div>
              <Button
                className='btn btn-success'
                value='Add Tag'
                disabled={!(input.tags.length <= 4)}
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
      </div>

      <div className='container mt-2 mb-5 mt-5' style={{ minHeight: '450px' }}>
        <h2 className='fs-2 mb-4'>Your WhatsApp Groups</h2>
        <div className='row gy-5'>
          {myGroups?.map((group) => (
            <div className='col-12 col-md-6 col-lg-4 col-xxl-3'>
              <MyGroupCards
                key={group._id}
                group={group}
                renderAction={() => (
                  <Button
                    onClick={() => handleDelete(group._id)}
                    className={`btn btn-danger btn-lg text-white`}
                    value='Delete'
                  />
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyGroups;

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@/components/atoms/button.atom';
import { generalContext } from '@/context/general.context';

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  // Redirect to login page if user is not authenticated
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Signup = (props) => {
  const { showAlert, topLoaderBar, setLoaderProgress } =
    useContext(generalContext);
  // Router
  const router = useRouter();

  // Handle State of input fields.
  const [cred, setCred] = useState({
    name: '',
    email: '',
    password: '',
    conpassword: '',
  });

  // On From Submit - SignUp
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start the loader
    setLoaderProgress(true);
    topLoaderBar.current.continuousStart();

    const { name, email, password, conpassword } = cred;

    // Check password and confirm password are same or not.
    if (password !== conpassword) {
      showAlert("Password and Confirm Password didn't matched.", 'error');
      return;
    }

    // API CALL
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);

    // Check if everything Okay.
    if (data.success) {
      // Alert
      showAlert(data.msg, 'success');

      // Stop the loader
      setLoaderProgress(false);
      topLoaderBar.current.complete();

      // Redirect at Login Page
      router.push('/login');
    } else {
      // Stop the loader
      setLoaderProgress(false);
      topLoaderBar.current.complete();

      // Alert
      showAlert(data.msg, 'error');
    }
  };

  // On change in input field.
  const inpChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section style={{ paddingTop: '40px', marginBottom: '40px' }}>
        <div className='container-fluid h-custom pb-5'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg'
                className='img-fluid'
                alt='Sample image'
              />
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 pt-5'>
              <h2 className='mb-4 text-center'>
                <u> SignUp </u>
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name input */}
                <div className='form-outline mb-4'>
                  <input
                    type='text'
                    id='name'
                    autoComplete='off'
                    value={cred.name}
                    name='name'
                    onChange={inpChange}
                    className='form-control form-control-lg'
                    placeholder='Enter your name'
                  />
                </div>

                {/* Phone Number input */}
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='email'
                    autoComplete='off'
                    value={cred.email}
                    name='email'
                    onChange={inpChange}
                    className='form-control form-control-lg'
                    placeholder='Enter your email'
                  />
                </div>

                {/* Password input */}
                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='password'
                    value={cred.password}
                    name='password'
                    onChange={inpChange}
                    className='form-control form-control-lg'
                    placeholder='Enter password'
                  />
                </div>

                {/* Confirm Password input */}
                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='conpassword'
                    value={cred.conpassword}
                    name='conpassword'
                    onChange={inpChange}
                    className='form-control form-control-lg'
                    placeholder='Confrim password'
                  />
                </div>

                {/* <div className='d-flex justify-content-between align-items-center'> */}
                  {/* Checkbox */}
                  {/* <div className='form-check mb-0'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      value=''
                      id='form2Example3'
                    />
                    <label className='form-check-label' htmlFor='form2Example3'>
                      Remember me
                    </label>
                  </div>
                </div> */}

                <div className='text-center text-lg-start mt-4 pt-2'>
                  <Button
                    type='submit'
                    value='Signup'
                    className='btn btn-primary btn-lg'
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  ></Button>
                  <p className='small mt-2 pt-1 mb-0'>
                    Already have an account?{' '}
                    <Link href='/login' className='link-danger'>
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;

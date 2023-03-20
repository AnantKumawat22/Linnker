import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import authContext from '@/context/auth.context';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@/components/atoms/button.atom';
import Input from '@/components/atoms/input.atom';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
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

const Login = (props) => {
  // Context
  // const { setCheckToken } = useContext(authContext);
  const { showAlert, topLoaderBar, setLoaderProgress } =
    useContext(generalContext);

  // Router
  const router = useRouter();

  // Handle State of input fields.
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });

  // On From Submit
  const handleSubmit = async (e) => {
    const { email, password } = cred;

    e.preventDefault();

    // Start the loader
    setLoaderProgress(true);
    topLoaderBar.current.continuousStart();

    // API CALL
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    // Check if Everthing is okay or not.
    if (data.success) {
      // Store Token in LocalStorage.
      // localStorage.setItem("token", data.authtoken);
      // document.cookie = `token=${data.authtoken}`;
      setCookie(null, 'token', data.authtoken);
      // setCheckToken(true);

      // Alert
      showAlert(data.msg, 'success');

      // Stop the loader
      setLoaderProgress(false);
      topLoaderBar.current.complete();

      setTimeout(() => {
        // Redirect at Home Page
        router.push('/');
      }, 100);
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
      <section style={{ paddingTop: '40px' }}>
        <div className='container-fluid pb-5' style={{ minHeight: '75vh' }}>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                className='img-fluid'
                alt='Sample image'
              />
            </div>
            <div className='col-md-8 col-lg-6 mt-5 col-xl-4 offset-xl-1'>
              <h2 className='mb-4 text-center'>
                <u> Login </u>
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email input */}

                <Input
                  type='email'
                  id='email'
                  value={cred.email}
                  name='email'
                  onChange={inpChange}
                  placeholder='Enter your Email'
                />

                {/* Password input */}
                <Input
                  type='password'
                  id='password'
                  value={cred.password}
                  name='password'
                  onChange={inpChange}
                  placeholder='Enter password'
                />

                <div className='d-flex flex-row-reverse justify-content-between align-items-center'>
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
                  </div> */}
                  <Link href='/forgotpassword' className='text-body'>
                    Forgot password?
                  </Link>
                </div>

                <div className='text-center text-lg-start mt-4 pt-2'>
                  <Button
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-lg'
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  ></Button>
                  <p className='small mt-2 pt-1 mb-0'>
                    Don't have an account?{' '}
                    <Link href='/signup' className='link-danger'>
                      SignUp
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

export default Login;

import React, { Suspense } from 'react';
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/Auth';
import NewPasswordPage from '../Pages/AuthPages/NewPassword';
import RegisteredPage from '../Pages/AuthPages/Registered';
import ResetPasswordPage from '../Pages/AuthPages/ResetPassword';
import SignInPage from '../Pages/AuthPages/Signin';
import SignUpPage from '../Pages/AuthPages/Signup';
import MainPage from '../Pages/Main';
import ChildOnePage from '../Pages/ParentOne/ChildOne';
import FirstChildPage from '../Pages/ParentTwo/FirstChild';
import SecondChildPage from '../Pages/ParentTwo/SecondChild';

import PrivateRoute from './PrivateRoute';
import { Container, SidebarWrapper, Wrapper } from './style';

export default function Root() {
  const [{ token }] = useAuth();
  return (
    <Container>
      {!token ? (
        <>
          <PrivateRoute>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </PrivateRoute>
          <Wrapper>
            <Suspense>
              <Routes>
                <Route
                  path='/'
                  element={
                    <PrivateRoute>
                      <MainPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/main'
                  element={
                    <PrivateRoute>
                      <MainPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/parent-one/child-one'
                  element={
                    <PrivateRoute>
                      <ChildOnePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/parent-one/child-two/child-one'
                  element={
                    <PrivateRoute>
                      <FirstChildPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/parent-one/child-two/child-two'
                  element={
                    <PrivateRoute>
                      <SecondChildPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/parent-two/child-one'
                  element={
                    <PrivateRoute>
                      <FirstChildPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/parent-two/child-two'
                  element={
                    <PrivateRoute>
                      <SecondChildPage />
                    </PrivateRoute>
                  }
                />
                <Route path='*' element={<Navigate to='/main' />} />
              </Routes>
            </Suspense>
          </Wrapper>{' '}
        </>
      ) : (
        <>
          <Routes>
            <Route
              path='/'
              element={
                <div style={{ width: '100vw' }}>
                  <div
                    style={{
                      width: '100vw',
                      height: '50px',
                      background: '#f5baba',
                      display: 'flex',
                      gap: '20px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'fixed',
                      zIndex: 1,
                    }}
                  >
                    {' '}
                    <p>these are for testing: </p>
                    <Link to='/signin'>SignInPage</Link>
                    <Link to='/signup'>SignUpPage</Link>
                    <Link to='/registered'>RegisteredPage</Link>
                    <Link to='/reset-password'>ResetPasswordPage</Link>
                    <Link to='/new-password'>NewPasswordPage</Link>
                    <Link to='/main'>MainPage</Link>
                  </div>
                  <Outlet />
                </div>
              }
            >
              <Route path='*' element={<Navigate to='/signin' />} />
              <Route path='/' element={<SignInPage />} />
              <Route path='/signin' element={<SignInPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/registered' element={<RegisteredPage />} />
              <Route path='/reset-password' element={<ResetPasswordPage />} />
              <Route path='/new-password' element={<NewPasswordPage />} />
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}

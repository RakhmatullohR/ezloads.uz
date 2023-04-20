import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/Auth';
import { getCookie, setCookie } from '../../../utils/formatters';
import { FormWrapper, Wrapper } from './style';
const SignInPage = () => {
  const [, dispatch] = useAuth();
  const [success, setSuccess] = useState(false);
  const onFinish = (values) => {
    const formData = {
      email: values.email || null,
      password: values.password || null,
    };
    fetch('https://education07.pythonanywhere.com/auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw response.json();
        } else {
          return response.json();
        }
      })
      .then(async (res) => {
        // eslint-disable-next-line no-unused-vars
        let successRes = {
          refresh:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4OTc4MTIzNSwiaWF0IjoxNjgyMDA1MjM1LCJqdGkiOiIzMzcwY2JjZmM3ZTQ0ZTQxYjNlZjJiYTRiMzE4ZWJiZSIsInVzZXJfaWQiOjE4fQ.mR8miWD7bwgHeFBF3w6m3EAb3sfKiS5KFJSMJBF5Qbo',
          access:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg0NDA1MjM1LCJpYXQiOjE2ODIwMDUyMzUsImp0aSI6IjkwMDYzNDg2MDhhYjQ3ZmM4ZjUyYTU3YmQwOTE1M2MyIiwidXNlcl9pZCI6MTh9.FsadG-a3t1mAkp5OqQlTVf708lVNJPShdYazeP-VBp0',
        };
        await setCookie('token', res?.access);
        await setSuccess(true);
        await message.success('✔ Signed In Successfully!');
        dispatch({ type: 'login', payload: getCookie('token') });
      })
      .catch((Err) => {
        Err.then((err) => err).then((err) => {
          message.warning(err.detail);
        });
      });
  };
  return (
    <Wrapper>
      <FormWrapper>
        {!success ? (
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <div style={{ textAlign: 'right', margin: '-15px 0 5px' }}>
              <Link className='login-form-forgot' to='/reset-password'>
                Forgot password
              </Link>
            </div>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Log in
              </Button>
              <span>
                Or <Link to='/signup'> register now!</Link>
              </span>
            </Form.Item>
          </Form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'green' }}>✔ Signed In Successfully</h2>
            {/* <Link to='/main'>
              Go to <b>Main</b> page
            </Link> */}
          </div>
        )}
      </FormWrapper>
    </Wrapper>
  );
};
export default SignInPage;

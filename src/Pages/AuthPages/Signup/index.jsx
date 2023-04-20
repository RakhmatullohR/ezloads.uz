import { useRef, useState } from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { FormWrapper, Wrapper } from './style';
const SignUpPage = () => {
  const [success, setSuccess] = useState(false);

  const firstameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const onSubmitData = () => {
    console.log(firstameRef.current.input.value);
  };
  const onFinish = (values) => {
    const formData = {
      first_name: values.firstname || null,
      last_name: values.lastname || null,
      email: values.email || null,
      password: values.password || null,
      re_password: values.confirm || null,
    };
    fetch('https://education07.pythonanywhere.com/auth/users/', {
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
      .then((res) => {
        // eslint-disable-next-line no-unused-vars
        let successRes = {
          first_name: 'Rakhmatillo',
          last_name: 'Rustamov',
          email: 'rakhmatillo.r@nightwell-logistics.com',
          id: 21,
        };
        message.success('Registered Successfully!');
        setSuccess(true);
      })
      .catch((Err) => {
        Err.then((err) => err).then((err) => {
          message.warning(err.email);
        });
      });
  };
  return (
    <Wrapper>
      <FormWrapper>
        {!success ? (
          <Form
            layout='vertical'
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name='firstname'
              label='Firstname'
              rules={[
                {
                  type: 'text',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input
                ref={firstameRef}
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Firstname'
              />
            </Form.Item>
            <Form.Item
              name='lastname'
              label='Lastname'
              rules={[
                {
                  type: 'text',
                  message: 'The input is not valid name!',
                },
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
            >
              <Input
                ref={lastnameRef}
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Lastname'
              />
            </Form.Item>
            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input
                ref={emailRef}
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email'
              />
            </Form.Item>
            <Form.Item
              name='password'
              label='Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password
                ref={passwordRef}
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Confirm Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!'
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                ref={confirmPasswordRef}
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Confirm Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                onClick={onSubmitData}
              >
                Sign up
              </Button>
              <span>
                If you have registered, <Link to='/signin'> signin now!</Link>
              </span>
            </Form.Item>
          </Form>
        ) : (
          <Form>
            <h2 style={{ color: 'green' }}>✔ Registered Successfully,</h2>
            <p>Please, verify your email in your mail box!</p>
          </Form>
        )}
      </FormWrapper>
    </Wrapper>
  );
};
export default SignUpPage;

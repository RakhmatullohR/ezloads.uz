import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/Auth';
import { FormWrapper, Wrapper } from './style';
const NewPasswordPage = () => {
  const [, dispatch] = useAuth();
  const [success, setSuccess] = useState(false);
  const onFinish = (values) => {
    const formData = {
      email: values.email || null,
      email: values.email || null,
    };
    fetch(
      'https://education07.pythonanywhere.com/auth/users/reset_password_confirm/',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response.json();
        } else {
          return response.json();
        }
      })
      .then(async (res) => {
        console.log('res', res);
        setSuccess(true);
      })
      .catch((Err) => {
        Err.then((err) => err).then((err) => {
          console.log('err', err);
          message.warning(err?.detail);
        });
      });
  };
  return (
    <Wrapper>
      <FormWrapper>
        {success ? (
          <Form
            layout='vertical'
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div style={{ margin: '-15px 0 5px' }}>
              <h3>Have you forgotten your password?</h3>
            </div>
            <Form.Item
              name='password'
              label='New Password'
              rules={[
                {
                  required: true,
                  message: 'Please input your new password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='New Password'
              />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Confirm New Password'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your new password!',
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
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Confirm New Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'green' }}>✔ Signed In Successfully</h2>
            <Link to='/main'>
              Go to <b>Signin</b> page
            </Link>
          </div>
        )}
      </FormWrapper>
    </Wrapper>
  );
};
export default NewPasswordPage;

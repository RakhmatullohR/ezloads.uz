import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/Auth';
import { getCookie, setCookie } from '../../../utils/formatters';
import { FormWrapper, Wrapper } from './style';
const ResetPasswordPage = () => {
  const [, dispatch] = useAuth();
  const [success, setSuccess] = useState(false);
  const onFinish = (values) => {
    const formData = {
      email: values.email || null,
    };
    fetch('https://education07.pythonanywhere.com/auth/users/reset_password/', {
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
        console.log('res', res);
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
          <div style={{ textAlign: 'center', width: '400px' }}>
            <h2 style={{ color: 'green' }}>Your request has been accepted.</h2>
            <p>Please, verify your email in your mail box!</p>
          </div>
        )}
      </FormWrapper>
    </Wrapper>
  );
};
export default ResetPasswordPage;

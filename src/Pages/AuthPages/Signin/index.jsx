import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { FormWrapper } from './style';
const SignInPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <FormWrapper>
      {' '}
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
    </FormWrapper>
  );
};
export default SignInPage;

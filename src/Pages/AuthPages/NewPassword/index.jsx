import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { FormWrapper, Wrapper } from './style';
const NewPasswordPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Wrapper>
      <FormWrapper>
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
      </FormWrapper>
    </Wrapper>
  );
};
export default NewPasswordPage;

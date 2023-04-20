import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { FormWrapper, Wrapper } from './style';
const ResetPasswordPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Wrapper>
      {' '}
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
export default ResetPasswordPage;

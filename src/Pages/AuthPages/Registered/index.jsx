import { Form } from 'antd';
import { FormWrapper } from './style';
const RegisteredPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <FormWrapper>
      {' '}
      <Form
        layout='vertical'
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h2 style={{ color: 'green' }}>✔ Registered Successfully</h2>
        <br />
        <Form.Item>
          <a href='/main'>
            Go to <b>Main</b> page
          </a>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};
export default RegisteredPage;
